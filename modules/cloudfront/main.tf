# ------------------------------
# CloudFront Origin Access Control (OAC)
# ------------------------------
resource "aws_cloudfront_origin_access_control" "cloudfront" {
  name                              = "cloudfront-oac"
  description                       = "CloudFront Origin Access Control for S3"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# ------------------------------
# CloudFront Distribution
# ------------------------------
resource "aws_cloudfront_distribution" "savenest_frontend" {
  origin {
    domain_name              = var.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront.id
    origin_id                = "s3-savenest-origin"
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "s3-savenest-origin"
    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    
    function_association {
    event_type   = "viewer-request"
    function_arn = aws_cloudfront_function.rewrite_index.arn
  }

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_index.arn
    }
  }

 
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 500
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_200"

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = var.environment
    Name        = "Savenest Frontend App"
  }
}

resource "aws_s3_bucket_policy" "cloudfront_access" {
  bucket = var.bucket_name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid    = "AllowCloudFrontServicePrincipalReadOnly",
        Effect = "Allow",
        Principal = {
          Service = "cloudfront.amazonaws.com"
        },
        Action   = "s3:GetObject",
        Resource = "${var.bucket_arn}/*",
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.savenest_frontend.arn
          }
        }
      }
    ]
  })
}

resource "aws_cloudfront_function" "rewrite_index" {
  name    = "rewrite_index"
  runtime = "cloudfront-js-2.0"
  comment = "SPA routing rewrite function"
  code    = <<-EOT
function handler(event) {
  var req = event.request;
  var uri = req.uri;

  // 1) If this is an asset under /_next/, let it pass through
  if (uri.startsWith('/_next/')) {
    return req;
  }

  // 2) If it ends in a file extension (e.g. .css, .js, .svg, .png, .jpg), let it pass through
  if (uri.match(/\/[^\/]+\.[^\/]+$/)) {
    return req;
  }

  // 3) Otherwise treat it as a SPA route: drop trailing slash and serve index.html
  var base = uri.endsWith('/') ? uri.slice(0, -1) : uri;
  req.uri = base + '/index.html';
  return req;
}
  EOT
}

resource "null_resource" "invalidate_cloudfront" {
  triggers = {
    s3_upload       = var.s3_files_upload_trigger
    distribution_id = aws_cloudfront_distribution.savenest_frontend.id
  }

  provisioner "local-exec" {
    command = <<EOT
      aws cloudfront create-invalidation \
        --distribution-id ${aws_cloudfront_distribution.savenest_frontend.id} \
        --invalidation-batch "{\"Paths\": {\"Quantity\": 1, \"Items\": [\"/*\"]}, \"CallerReference\": \"invalidation-$(date +%s)\"}" \
        --region us-east-1 \
        --output text
    EOT

    # Explicitly use a Unix-style shell that understands the command
    interpreter = ["sh", "-c"]
  }

  depends_on = [aws_cloudfront_distribution.savenest_frontend]
}
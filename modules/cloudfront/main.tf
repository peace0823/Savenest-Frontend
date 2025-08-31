# ------------------------------
# Origin Access Control
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

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    # Rewrite function to handle SPA routes
    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.rewrite_index.arn
    }
  }

  # Important: serve index.html on errors (prevents AccessDenied/404 issues in SPA)
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
    Environment = "production"
    Name        = "Savenest Frontend App"
  }
}

# ------------------------------
# S3 Bucket Policy (for CloudFront access)
# ------------------------------
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

# ------------------------------
# CloudFront Function
# ------------------------------
resource "aws_cloudfront_function" "rewrite_index" {
  name    = "rewrite_index"
  runtime = "cloudfront-js-1.0"
  publish = true

  comment = "Map folder routes to index.html and drop trailing slash"

  code = <<-EOT
    function handler(event) {
      var req = event.request;
      var uri = req.uri;

      // 1) If this is an asset under /_next/, let it pass through
      if (uri.startsWith('/_next/')) {
        return req;
      }

      // 2) If it ends in a file extension (e.g. .css, .js, .svg, .png, .jpg), let it pass through
      if (uri.match(/\\/[^\\/]+\\.[^\/]+$/)) {
        return req;
      }

      // 3) Otherwise treat it as a SPA route: drop trailing slash and serve index.html
      var base = uri.endsWith('/') ? uri.slice(0, -1) : uri;
      req.uri = base + '/index.html';
      return req;
    }
  EOT
}

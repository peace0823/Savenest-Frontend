resource "aws_s3_bucket" "savenest" {
  bucket = var.bucket_name

  tags = {
    Name = "savenest-${var.environment}-bucket"
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_s3_bucket_versioning" "versioning" {
  bucket = aws_s3_bucket.savenest.id

  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_public_access_block" "savenest-public_access" {
  bucket                  = aws_s3_bucket.savenest.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# Optional: Add CORS config if needed
# resource "aws_s3_bucket_cors_configuration" "savenest_cors" {
#   bucket = aws_s3_bucket.savenest.id

#   cors_rule {
#     allowed_headers = ["*"]
#     allowed_methods = ["GET", "HEAD"]
#     allowed_origins = ["*"]
#     max_age_seconds = 3000
#   }
# }
# --- NEW: Define MIME types for proper content headers ---
locals {
  mime_types = {
    "html" = "text/html",
    "css"  = "text/css",
    "js"   = "application/javascript",
    "map"  = "application/json",
    "png"  = "image/png",
    "jpg"  = "image/jpeg",
    "jpeg" = "image/jpeg",
    "svg"  = "image/svg+xml",
    "ico"  = "image/x-icon",
    "json" = "application/json"
  }
}

# --- NEW: Upload all built frontend files to S3 ---
# This is the key resource for the pipeline
resource "aws_s3_object" "frontend_files" {
  for_each = fileset("${path.module}/../../out", "**/*") # Path from the module to the root `out/` folder

  bucket       = aws_s3_bucket.savenest.id
  key          = each.value
  source       = "${path.module}/../../out/${each.value}"
  etag         = filemd5("${path.module}/../../out/${each.value}")
  content_type = lookup(local.mime_types, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}
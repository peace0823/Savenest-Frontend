# ./modules/s3/outputs.tf

output "bucket_name" {
  description = "The name of the frontend bucket"
  value       = aws_s3_bucket.savenest.bucket  # Changed from .id to .bucket for clarity
}

output "bucket_arn" {
  description = "The ARN of the frontend bucket"
  value       = aws_s3_bucket.savenest.arn
}

output "bucket_regional_domain_name" {
  description = "The regional domain name of the frontend bucket"
  value       = aws_s3_bucket.savenest.bucket_regional_domain_name
}

output "bucket_id" {
  description = "The ID of the frontend bucket"
  value       = aws_s3_bucket.savenest.id
}

# --- NEW: Output for triggering CloudFront invalidation ---
output "frontend_files_upload" {
  description = "A value that changes when the frontend files are uploaded. Used for triggering dependencies."
  # This gets the combined ID of all the uploaded file objects.
  # Any change to the files will change this value.
  value = sha1(join("", [for o in aws_s3_object.frontend_files : o.id]))
}
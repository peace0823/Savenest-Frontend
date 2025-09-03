output "frontend_bucket_name" {
  description = "Name of the S3 bucket used for the frontend"
  value       = module.s3.bucket_name
}

output "cloudfront_distribution_url" {
  description = "URL of the CloudFront distribution"
  value       = module.cloudfront.cloudfront_url
}

output "cloudfront_distribution_id" {
  value = module.cloudfront.cloudfront_Id
}

output "cloudfront_distribution_arn" {
  value = module.cloudfront.cloudfront_distribution_arn
}

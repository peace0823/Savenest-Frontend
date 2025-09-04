# ./modules/cloudfront/outputs.tf

output "cloudfront_distribution_arn" {
  description = "The ARN of the CloudFront distribution"
  value       = aws_cloudfront_distribution.savenest_frontend.arn
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.savenest_frontend.id
}

output "cloudfront_distribution_url" {
  description = "The domain name of the CloudFront distribution"
  value       = aws_cloudfront_distribution.savenest_frontend.domain_name
}
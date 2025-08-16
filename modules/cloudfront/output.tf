
output "cloudfrontId" {
  value = aws_cloudfront_distribution.savenest_frontend.id
}

output "cloudfront_url" {
  description = "CloudFront Distribution URL"
  value       = "https://${aws_cloudfront_distribution.savenest_frontend.domain_name}"
}

output "cloudfront_distribution_arn" {
  value = aws_cloudfront_distribution.savenest_frontend.arn
}
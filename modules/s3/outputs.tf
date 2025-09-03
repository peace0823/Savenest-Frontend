output "bucket_name" {
  value = aws_s3_bucket.savenest.id
}

output "bucket_arn" {
  value = aws_s3_bucket.savenest.arn
}

output "bucket_regional_domain_name" {
  value = aws_s3_bucket.savenest.bucket_regional_domain_name
}

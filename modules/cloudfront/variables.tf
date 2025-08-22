variable "bucket_regional_domain_name" {
  type        = string
  description = "S3 regional domain name"
}

variable "bucket_name" {
  type        = string
  description = "Name of the S3 bucket for frontend"
}

variable "bucket_arn" {
  type        = string
  description = "ARN of the S3 bucket for frontend"
}

variable "environment" {
  type        = string
  description = "Deployment environment (e.g., dev, prod)"
}
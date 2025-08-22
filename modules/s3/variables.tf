variable "environment" {
  type        = string
  description = "Environment"
  default     = "dev"
}

variable "bucket_name" {
  description = "This is the application bucket name"
  type        = string
  default     = "savenest-email-template"
}

variable "RESOURCES_PREFIX" {
  type        = string
  description = "Prefix for resources"
}

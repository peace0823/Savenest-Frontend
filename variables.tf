variable "region" {
  type    = string
  default = "us-east-1"
}

variable "ENV" {
  type    = string
  default = "dev"
}

variable "RESOURCES_PREFIX" {
  type        = string
  description = "Prefix for all resource names"
  default     = "savenest"
}

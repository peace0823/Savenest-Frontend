
variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }
}

variable "callback_url" {
  description = "URL for OAuth callbacks after authentication"
  type        = string
  default     = "http://localhost:3000"
}

variable "logout_url" {
  description = "URL for logout redirects"
  type        = string
  default     = "http://localhost:3000"
}

variable "create_test_user" {
  description = "Whether to create a test user (for development only)"
  type        = bool
  default     = false
}

data "aws_region" "current" {}
resource "aws_cognito_user_pool" "user_pool" {
  name = "${var.environment}-savenest-user-pool"

  # Password policy - strong security
  password_policy {
    minimum_length                   = 8
    require_lowercase                = true
    require_uppercase                = true
    require_numbers                  = true
    require_symbols                  = true
    temporary_password_validity_days = 7
  }

  # Required attributes for users
  schema {
    name                = "email"
    attribute_data_type = "String"
    required            = true
    mutable             = true
  }

  schema {
    name                = "given_name"
    attribute_data_type = "String"
    required            = true
    mutable             = true
  }

  schema {
    name                = "family_name"
    attribute_data_type = "String"
    required            = true
    mutable             = true
  }

  # Optional phone number for OTP
  schema {
    name                = "phone_number"
    attribute_data_type = "String"
    required            = false
    mutable             = true
  }

  # Auto-verify email addresses
  auto_verified_attributes = ["email"]

  # Email configuration (uses Cognito default email)
  email_configuration {
    email_sending_account = "COGNITO_DEFAULT"
  }

  # Account recovery via email
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
  }

  
  mfa_configuration = "OFF" # Change to "ON" to enable SMS MFA

  # User pool tags
  tags = {
    Environment = var.environment
    Project     = "savenest"
  }
}

# User pool domain for hosted UI
resource "aws_cognito_user_pool_domain" "domain" {
  domain       = "${var.environment}-savenest-auth"
  user_pool_id = aws_cognito_user_pool.user_pool.id
}

# User pool client for your frontend application
resource "aws_cognito_user_pool_client" "client" {
  name = "${var.environment}-savenest-web-client"

  user_pool_id                  = aws_cognito_user_pool.user_pool.id
  generate_secret               = false  # Must be false for web apps
  prevent_user_existence_errors = "ENABLED" # Security best practice

  # Authentication flows
  explicit_auth_flows = [
    "ALLOW_USER_PASSWORD_AUTH",
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_SRP_AUTH", # Secure Remote Password
    "ALLOW_CUSTOM_AUTH"    # For custom auth challenges
  ]

  # OAuth settings for redirects
  callback_urls = [var.callback_url]
  logout_urls   = [var.logout_url]

  allowed_oauth_flows          = ["implicit", "code"]
  allowed_oauth_scopes         = ["email", "openid", "profile", "aws.cognito.signin.user.admin"]
  supported_identity_providers = ["COGNITO"]

  allowed_oauth_flows_user_pool_client = true
}

# Optional: Create a test user (remove in production)
resource "aws_cognito_user" "test_user" {
  count         = var.create_test_user ? 1 : 0
  user_pool_id  = aws_cognito_user_pool.user_pool.id
  username      = "test@example.com"
  password      = "TempPassword123!" 
  message_action = "SUPPRESS" 

  attributes = {
    email          = "test@example.com"
    given_name     = "Test"
    family_name    = "User"
    email_verified = "true"
  }
}


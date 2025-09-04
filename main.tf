locals {
  RESOURCES_PREFIX = "${lower(var.ENV)}-${var.RESOURCES_PREFIX}"
  ACCOUNT_ID       = data.aws_caller_identity.current.account_id

  common_tags = {
    environment = var.ENV
    project     = "savenest"
    managedby   = "cloud-team"
  }
}

module "s3" {
  source           = "./modules/s3"
  environment      = var.ENV
  bucket_name      = "${local.RESOURCES_PREFIX}-frontend"
  RESOURCES_PREFIX = local.RESOURCES_PREFIX
}

module "cloudfront" {
  source                      = "./modules/cloudfront"
  environment                 = var.ENV
  bucket_name                 = module.s3.bucket_name
  bucket_arn                  = module.s3.bucket_arn
  bucket_regional_domain_name = module.s3.bucket_regional_domain_name
  s3_files_upload_trigger     = module.s3.frontend_files_upload
}


module "cognito" {
  source          = "./modules/cognito"
  environment     = var.ENV
  callback_url    = "https://${module.cloudfront.cloudfront_distribution_url}"
  logout_url      = "https://${module.cloudfront.cloudfront_distribution_url}"
  create_test_user = true
}


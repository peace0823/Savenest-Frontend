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
}

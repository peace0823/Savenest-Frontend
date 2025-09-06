# Statefile creation
terraform {
  backend "s3" {
    encrypt = true
    bucket  = "savenest-bucket-statefile"
    key     = "backend/terraform.tfstate"
    region  = "us-east-1"
    # dynamodb_table = "testworklock"
  }
}
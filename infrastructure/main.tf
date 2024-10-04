terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = ">= 4.0"
    }
  }
}

provider "aws" {
  region = "eu-central-1"
}

# For cloudfront, the acm has to be created in us-east-1 or it will not work
provider "aws" {
  region = "us-east-1"
  alias  = "aws-us-east-1"
}

# create acm and explicitly set it to us-east-1 provider
module "acm_request_certificate" {
  source = "cloudposse/acm-request-certificate/aws"
  providers = {
    aws = aws.aws-us-east-1
  }

  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"
  domain_name                       = "hasemato.com"
  subject_alternative_names         = ["wattlink-landing.hasemato.com", "wattlink.hasemato.com"]
  process_domain_validation_options = true
  ttl                               = "300"
}

module "cdn" {
  source = "cloudposse/cloudfront-s3-cdn/aws"
  # Cloud Posse recommends pinning every module to a specific version
  # version = "x.x.x"

  namespace         = "wattlink"
  stage             = "test"
  name              = "landing"
  aliases           = ["wattlink-landing.hasemato.com", "wattlink.hasemato.com"]
  dns_alias_enabled = true
  parent_zone_name  = "hasemato.com"

  acm_certificate_arn = module.acm_request_certificate.arn

  depends_on = [module.acm_request_certificate]

  deployment_principal_arns = {
    "arn:aws:iam::456004844534:user/lynqtech-macbook-iam" = [""]
  }
}
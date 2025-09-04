# Frontend Environment Variables
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-1_dikaUP5aM
NEXT_PUBLIC_COGNITO_CLIENT_ID=4ur79joc7e82u9r7njooq01m31
NEXT_PUBLIC_COGNITO_DOMAIN=dev-savenest-auth.auth.us-east-1.amazoncognito.com
NEXT_PUBLIC_API_BASE_URL=https://d9ji7koaa33f2.cloudfront.net
NEXT_PUBLIC_APP_URL=https://d9ji7koaa33f2.cloudfront.net

// Frontend Cognito Config
const cognitoConfig = {
  userPoolId: 'us-east-1_dikaUP5aM',
  clientId: '4ur79joc7e82u9r7njooq01m31',
  region: 'us-east-1'
};

# Backend Environment Variables
COGNITO_USER_POOL_ID=us-east-1_dikaUP5aM
COGNITO_REGION=us-east-1
COGNITO_APP_CLIENT_ID=4ur79joc7e82u9r7njooq01m31

arn:aws:cognito-idp:us-east-1:644789170159:userpool/us-east-1_dikaUP5aM

#Both Teams
- Authentication Endpoint: https://dev-savenest-auth.auth.us-east-1.amazoncognito.com
- Callback URL: https://d9ji7koaa33f2.cloudfront.net

# AWS Resources
CDN: CloudFront (E3R08D6U2XXZYO)

Storage: S3 Bucket (dev-savenest-frontend)

Authentication: Cognito User Pool (us-east-1_dikaUP5aM)
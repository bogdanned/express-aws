db_password=$(aws ssm get-parameters --region eu-central-1 --names Express_APP_Production_URL --with-decryption --query Parameters[0].Value)
echo db_password
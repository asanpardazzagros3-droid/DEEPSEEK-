#!/bin/bash
echo "💰 راه‌اندازی سریع سیستم پرداخت هوشمند"

# نصب وابستگی‌ها
npm install stripe @paypal/paypal-js axios dotenv

# تنظیم متغیرهای محیطی
cat > .env <<EOF
STRIPE_SECRET_KEY=sk_test_...
DEEPSEEK_API_KEY=your-deepseek-key
PAYPAL_CLIENT_ID=...
PAYPAL_CLIENT_SECRET=...
CRYPTO_WALLET_ADDRESS=...
EOF

# اجرای سرور پرداخت
node payment-server.js

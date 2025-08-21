// Stripe Configuration Template
// Copy this file to config.js and fill in your actual values

module.exports = {
    stripe: {
        // Your Platform Secret Key (from your Stripe Dashboard)
        secretKey: 'sk_test_your_platform_secret_key_here',
        
        // Your Platform Publishable Key (from your Stripe Dashboard)
        publishableKey: 'pk_test_your_platform_publishable_key_here',
        
        // Connected Account ID (you'll get this after running setup-stripe-connect.js)
        connectedAccountId: 'acct_your_connected_account_id_here',
        
        // Webhook Secret (you'll get this after setting up webhooks)
        webhookSecret: 'whsec_your_webhook_secret_here'
    },
    
    server: {
        port: process.env.PORT || 3000,
        environment: process.env.NODE_ENV || 'development'
    }
}; 
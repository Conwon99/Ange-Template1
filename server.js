const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_your_stripe_secret_key_here');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Store the connected account ID (you'll get this after creating the connected account)
const CONNECTED_ACCOUNT_ID = process.env.STRIPE_CONNECTED_ACCOUNT_ID || 'acct_your_connected_account_id_here';

// Stripe checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { line_items, total } = req.body;

        // Create Stripe checkout session with connected account
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/success`,
            cancel_url: `${req.protocol}://${req.get('host')}/cancel`,
            currency: 'gbp',
            metadata: {
                total_amount: total.toString()
            }
        }, {
            stripeAccount: CONNECTED_ACCOUNT_ID // This routes payments to your client's account
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session' });
    }
});

// Create connected account endpoint (run this once to set up your client's account)
app.post('/create-connected-account', async (req, res) => {
    try {
        const account = await stripe.accounts.create({
            type: 'express',
            country: 'GB',
            email: 'yogawithange@outlook.com', // Your client's email
            capabilities: {
                card_payments: { requested: true },
                transfers: { requested: true },
            },
            business_type: 'individual',
            business_profile: {
                url: 'https://holistics71.com', // Replace with actual website
                mcc: '7299', // Health and beauty spas
            },
        });

        console.log('Connected Account ID:', account.id);
        res.json({ 
            accountId: account.id, 
            onboardingUrl: account.onboarding_url 
        });
    } catch (error) {
        console.error('Error creating connected account:', error);
        res.status(500).json({ error: 'Failed to create connected account' });
    }
});

// Success page
app.get('/success', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Successful - Holistics71</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                .success { color: #28a745; font-size: 24px; margin-bottom: 20px; }
                .button { background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="success">✅ Payment Successful!</div>
            <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
            <a href="/" class="button">Return to Home</a>
        </body>
        </html>
    `);
});

// Cancel page
app.get('/cancel', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Cancelled - Holistics71</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                .cancel { color: #dc3545; font-size: 24px; margin-bottom: 20px; }
                .button { background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
            </style>
        </head>
        <body>
            <div class="cancel">❌ Payment Cancelled</div>
            <p>Your payment was cancelled. You can try again or contact us for assistance.</p>
            <a href="/" class="button">Return to Home</a>
        </body>
        </html>
    `);
});

// Serve the main index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view your website`);
}); 
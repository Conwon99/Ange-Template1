const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'YOUR_STRIPE_SECRET_KEY_HERE');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.')); // Serve static files from current directory

// Stripe checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
    try {
        console.log('Received checkout request:', req.body);
        const { line_items, total } = req.body;

        if (!line_items || !Array.isArray(line_items) || line_items.length === 0) {
            console.error('Invalid line_items:', line_items);
            return res.status(400).json({ error: 'Invalid line items' });
        }

        // Create Stripe checkout session (direct to client's account)
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
        });

        console.log('Created session:', session.id);
        res.json({ url: session.url });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: 'Failed to create checkout session: ' + error.message });
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

// Contact form handler
app.post('/contact', async (req, res) => {
    try {
        console.log('Contact form submission:', req.body);
        const { Name, Email, Message } = req.body;
        
        // Log the contact form submission
        console.log('Contact from:', Name, Email);
        console.log('Message:', Message);
        
        // Create email content
        const emailContent = `
New Contact Form Submission from Holistics71 Website

Name: ${Name}
Email: ${Email}
Message: ${Message}

This message was sent from the contact form on the Holistics71 website.
        `;
        
        // For immediate testing, let's use a simple console notification
        // In production, you would use a proper email service
        console.log('📧 EMAIL NOTIFICATION:');
        console.log('To: dorward.connor@gmail.com');
        console.log('Subject: New Contact Form Submission - Holistics71');
        console.log('Content:', emailContent);
        console.log('📧 END EMAIL NOTIFICATION');
        
        // TODO: To enable actual email sending, you can:
        // 1. Use a service like SendGrid, Mailgun, or EmailJS
        // 2. Configure Gmail SMTP with app passwords
        // 3. Use a form service like Formspree or Netlify Forms
        
        // Example with Gmail (requires app password setup):
        /*
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-gmail@gmail.com',
                pass: 'your-16-digit-app-password'
            }
        });
        
        const mailOptions = {
            from: 'your-gmail@gmail.com',
            to: 'dorward.connor@gmail.com',
            subject: 'New Contact Form Submission - Holistics71',
            text: emailContent,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>From:</strong> ${Name} (${Email})</p>
                <p><strong>Message:</strong></p>
                <p>${Message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>This message was sent from the contact form on the Holistics71 website.</em></p>
            `
        };
        
        await transporter.sendMail(mailOptions);
        */
        
        console.log('Email to be sent to dorward.connor@gmail.com:');
        console.log(emailContent);
        
        res.json({ success: true, message: 'Thank you! Your message has been sent!' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ success: false, message: 'Oops! Something went wrong while submitting the form.' });
    }
});

// Newsletter subscription handler
app.post('/newsletter', (req, res) => {
    try {
        console.log('Newsletter subscription:', req.body);
        const { 'Newsletter-Email': email } = req.body;
        
        // Here you would typically add to mailing list
        console.log('Newsletter signup:', email);
        
        res.json({ success: true, message: 'Thank you! Your submission has been received!' });
    } catch (error) {
        console.error('Error handling newsletter signup:', error);
        res.status(500).json({ success: false, message: 'Oops! Something went wrong while submitting the form.' });
    }
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

// Serve about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about', 'page.html'));
});

// Serve services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services', 'page.html'));
});

// Serve contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact', 'page.html'));
});

// Serve blog page
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog', 'page.html'));
});

// Serve privacy policy page
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy-policy', 'page.html'));
});

// Serve terms and conditions page
app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms-conditions', 'page.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view your website`);
});
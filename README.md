# Holistics71 by Ange - Website with Stripe Integration

A professional website for Holistics71 by Ange, offering yoga classes, reflexology treatments, and aromatics products with integrated Stripe payment processing.

## Features

- **Yoga Classes**: Information about weekly classes in Troon, Irvine, and Kilwinning
- **Reflexology Treatments**: 60-minute sessions with qualified/insured reflexologist
- **Aromatics Shop**: Premium wellness products with e-commerce functionality
- **Stripe Payment Integration**: Secure payment processing for online purchases
- **Responsive Design**: Mobile-friendly layout
- **Shopping Cart**: Interactive cart with quantity controls

## Setup Instructions

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Stripe account (for platform)

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Stripe Connect (Platform Account)**
   
   **Step 1: Create Your Platform Account**
   - Sign up for a Stripe account at [stripe.com](https://stripe.com)
   - Complete your business verification
   - Go to Dashboard → Developers → API Keys
   - Copy your **Secret Key** and **Publishable Key**

   **Step 2: Enable Stripe Connect**
   - In your Stripe Dashboard, go to **Connect** → **Get Started**
   - Choose **Express** as the account type
   - Complete the platform onboarding

   **Step 3: Create Connected Account for Client**
   ```bash
   # Update the secret key in setup-stripe-connect.js
   # Then run:
   node setup-stripe-connect.js
   ```

   **Step 4: Configure Environment**
   - Copy `config.example.js` to `config.js`
   - Fill in your actual Stripe keys and connected account ID

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the website**
   - Open your browser and go to `http://localhost:3000`
   - The website will be fully functional with Stripe Connect

### Development

For development with auto-restart:
```bash
npm run dev
```

## Stripe Connect Setup

### Client Onboarding Process

1. **Run the Setup Script**
   ```bash
   node setup-stripe-connect.js
   ```

2. **Send Onboarding Link to Client**
   - The script will output an onboarding URL
   - Send this URL to your client (Ange)
   - Client completes their business verification

3. **Client Completes Verification**
   - Business information
   - Bank account details
   - Identity verification
   - Business verification

4. **Update Configuration**
   - Copy the Account ID from the setup script
   - Update `config.js` with the connected account ID

### Test Mode
- Use test API keys for development
- Test card numbers: 4242 4242 4242 4242 (Visa)
- Any future expiry date and any 3-digit CVC

### Production Mode
- Replace test keys with live keys
- Update success/cancel URLs to your domain
- Ensure HTTPS is enabled
- Client must complete full verification

### Account Management

**For You (Developer):**
- Technical integration and maintenance
- API management and updates
- Development and testing support

**For Client (Holistics71):**
- Access to their own Stripe Dashboard
- View transactions and customer data
- Manage their business settings
- Direct access to their bank account

## File Structure

```
├── index.html          # Main website file
├── server.js           # Node.js server with Stripe integration
├── package.json        # Node.js dependencies
├── README.md          # This file
├── angeassets/        # Images and assets
├── fonts/             # Custom fonts
└── [other pages]/     # Additional website pages
```

## Payment Flow

1. **Add to Cart**: Users can add products with quantity controls
2. **View Cart**: Click the shopping cart widget to review items
3. **Checkout**: Redirects to Stripe Checkout for secure payment
4. **Success/Cancel**: Users are redirected back to appropriate pages
5. **Order Processing**: Orders are processed through Stripe

## Security Features

- **HTTPS Required**: Stripe requires HTTPS for live payments
- **Server-side Processing**: All payment logic runs on the server
- **No Card Data**: Card information never touches your server
- **PCI Compliance**: Stripe handles all PCI compliance requirements

## Support

For technical support or questions about the Stripe integration, please contact the developer.

## License

MIT License - see package.json for details.

---

**Website designed by Connor Dorward**
**© 2024 Holistics71 by Ange. All Rights Reserved.** 
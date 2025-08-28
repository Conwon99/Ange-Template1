const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY_HERE'); // Your Stripe secret key

async function createConnectedAccount() {
    try {
        console.log('Creating Stripe Connect account for Holistics71...');
        
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
            individual: {
                first_name: 'Ange',
                last_name: 'Holistics71',
                email: 'yogawithange@outlook.com',
                phone: '+447814487281',
                address: {
                    line1: 'Your Business Address',
                    city: 'Troon',
                    postal_code: 'Your Postal Code',
                    country: 'GB',
                },
            },
        });

        console.log('\n✅ Connected Account Created Successfully!');
        console.log('==========================================');
        console.log(`Account ID: ${account.id}`);
        console.log(`Onboarding URL: ${account.onboarding_url}`);
        console.log('\n📋 Next Steps:');
        console.log('1. Send the onboarding URL to your client');
        console.log('2. Client completes their business verification');
        console.log('3. Update your .env file with the Account ID');
        console.log('4. Test the payment flow');
        
        return account;
    } catch (error) {
        console.error('❌ Error creating connected account:', error.message);
        throw error;
    }
}

// Run the setup
createConnectedAccount()
    .then(() => {
        console.log('\n🎉 Setup complete!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n💥 Setup failed:', error);
        process.exit(1);
    });

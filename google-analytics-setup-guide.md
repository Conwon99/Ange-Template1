# Google Analytics Setup Guide for Holistics71

## 🎯 **Step 1: Create Google Analytics Account**

1. **Go to Google Analytics**: Visit [analytics.google.com](https://analytics.google.com)
2. **Start Measuring**: Click "Start measuring"
3. **Create Account**:
   - Account name: `Holistics71`
   - Data sharing settings: Choose your preferences
4. **Create Property**:
   - Property name: `Holistics71 Website`
   - Reporting time zone: `Europe/London`
   - Currency: `GBP`
5. **Business Information**:
   - Industry category: `Health & Beauty`
   - Business size: `Small business`
   - How do you plan to use GA4: Select relevant options

## 🎯 **Step 2: Get Your Measurement ID**

1. After creating the property, you'll get a **Measurement ID** (starts with "G-")
2. Copy this ID - you'll need it for the next step

## 🎯 **Step 3: Update Your Website**

1. **Replace the placeholder** in your `index.html` file:
   - Find: `GA_MEASUREMENT_ID`
   - Replace with: Your actual Measurement ID (e.g., `G-XXXXXXXXXX`)

2. **The tracking code is already added** to your website in the `<head>` section

## 🎯 **Step 4: Enhanced Event Tracking**

Your website now tracks the following events automatically:

### 📊 **Navigation Events**
- **Navigation clicks**: When users click navigation links
- **Smooth scrolling**: Tracks section visits

### 📞 **Contact Events**
- **WhatsApp clicks**: When users click WhatsApp links
- **Facebook clicks**: When users click Facebook links
- **Email clicks**: When users click email links
- **Phone clicks**: When users click phone numbers
- **Contact form submissions**: When users submit the contact form

### 🛒 **E-commerce Events**
- **Add to cart**: When users add products to cart
- **Begin checkout**: When users start checkout process
- **Product views**: When users view product details

### 🎯 **CTA Events**
- **Button clicks**: All "Explore", "Shop All", and other CTA buttons
- **External links**: When users click external booking links

## 🎯 **Step 5: Set Up Goals in Google Analytics**

### **1. Contact Form Submissions**
1. Go to **Admin** → **Goals**
2. Click **New Goal**
3. Choose **Custom**
4. Name: `Contact Form Submission`
5. Type: **Event**
6. Event conditions: `Event name equals form_submit`

### **2. WhatsApp Contact**
1. New Goal → Custom
2. Name: `WhatsApp Contact`
3. Type: **Event**
4. Event conditions: `Event name equals whatsapp_click`

### **3. Facebook Contact**
1. New Goal → Custom
2. Name: `Facebook Contact`
3. Type: **Event**
4. Event conditions: `Event name equals facebook_click`

### **4. Add to Cart**
1. New Goal → Custom
2. Name: `Add to Cart`
3. Type: **Event**
4. Event conditions: `Event name equals add_to_cart`

### **5. Checkout Started**
1. New Goal → Custom
2. Name: `Checkout Started`
3. Type: **Event**
4. Event conditions: `Event name equals begin_checkout`

## 🎯 **Step 6: Set Up Enhanced E-commerce**

1. **Enable Enhanced E-commerce**:
   - Go to **Admin** → **E-commerce Settings**
   - Enable **Enhanced E-commerce Reporting**

2. **Set up Product Categories**:
   - Yoga Classes
   - Reflexology Treatments
   - Aromatics Products

## 🎯 **Step 7: Create Custom Reports**

### **1. Contact Methods Report**
Create a custom report showing:
- Contact form submissions
- WhatsApp clicks
- Facebook clicks
- Email clicks
- Phone clicks

### **2. E-commerce Performance**
Track:
- Products added to cart
- Checkout conversions
- Revenue (when payment processing is added)

### **3. User Journey Report**
Track how users move through your site:
- Landing pages
- Navigation patterns
- Exit pages

## 🎯 **Step 8: Set Up Conversion Tracking**

### **1. Google Ads Integration** (if you plan to advertise)
1. Link your Google Ads account
2. Import goals as conversions
3. Set up remarketing audiences

### **2. Facebook Pixel** (if you plan to advertise on Facebook)
1. Create Facebook Business Manager account
2. Add Facebook Pixel to your website
3. Set up custom conversions

## 🎯 **Step 9: Privacy Compliance**

### **1. Cookie Consent**
Consider adding a cookie consent banner:
- Required for GDPR compliance
- Informs users about tracking

### **2. Privacy Policy**
Update your privacy policy to mention:
- Google Analytics usage
- Data collection practices
- User rights

## 🎯 **Step 10: Testing Your Setup**

### **1. Real-Time Reports**
1. Go to **Reports** → **Realtime**
2. Visit your website
3. Perform actions (click buttons, fill forms)
4. Verify events appear in real-time

### **2. Debug Mode**
1. Install Google Analytics Debugger extension
2. Open browser console
3. Check for tracking events

## 📊 **What You'll Be Able to Track**

### **Visitor Analytics**
- Total visitors and unique visitors
- Page views and session duration
- Bounce rate and exit pages
- Geographic location of visitors
- Device types (mobile vs desktop)

### **User Behavior**
- Most popular pages
- User flow through your site
- Time spent on each page
- Scroll depth and engagement

### **Conversion Tracking**
- Contact form submissions
- WhatsApp/Facebook message clicks
- Product additions to cart
- Checkout completions
- Phone call clicks

### **E-commerce Metrics**
- Product performance
- Cart abandonment rate
- Revenue tracking (when payment processing is added)
- Customer lifetime value

## 🔧 **Advanced Features to Consider**

### **1. Custom Dimensions**
Track additional data like:
- User type (new vs returning)
- Content category
- Service interest

### **2. Custom Metrics**
Track business-specific metrics:
- Lead quality scores
- Service inquiry types
- Geographic performance

### **3. Automated Reports**
Set up automated email reports:
- Weekly performance summaries
- Monthly conversion reports
- Quarterly business insights

## 📈 **Key Metrics to Monitor**

### **Weekly**
- Total visitors
- Contact form submissions
- WhatsApp/Facebook clicks
- Top performing pages

### **Monthly**
- Conversion rates
- User journey analysis
- Content performance
- Geographic trends

### **Quarterly**
- Business growth trends
- Customer acquisition costs
- ROI analysis
- Competitive benchmarking

## 🚀 **Next Steps**

1. **Replace the Measurement ID** in your code
2. **Test the tracking** using real-time reports
3. **Set up goals** for key conversions
4. **Create custom reports** for your business needs
5. **Set up automated reporting** for regular insights
6. **Train your team** on how to use the data

## 📞 **Support Resources**

- [Google Analytics Help Center](https://support.google.com/analytics/)
- [GA4 Implementation Guide](https://developers.google.com/analytics/devguides/collection/ga4)
- [Google Analytics Academy](https://analytics.google.com/analytics/academy/)

---

**Note**: Replace `GA_MEASUREMENT_ID` in your `index.html` file with your actual Google Analytics Measurement ID before going live!

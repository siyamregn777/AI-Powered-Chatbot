import stringSimilarity from 'string-similarity';
// Knowledge base with 100 questions and answers
const knowledgeBase: { question: string; answer: string }[] = [
  {
    question: 'What is your return policy?',
    answer: 'You can return products within 30 days of purchase. The item must be unused and in its original packaging.',
  },
  {
    question: 'Do you offer free shipping?',
    answer: 'Yes, we offer free shipping on all orders over $50.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You can track your order using the tracking number provided in your confirmation email.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, MasterCard, American Express, PayPal, and Apple Pay.',
  },
  {
    question: 'Can I change my shipping address?',
    answer: 'If your order has not yet been processed, you can change your shipping address by contacting customer support.',
  },
  {
    question: 'How long does it take to process my order?',
    answer: 'Orders are typically processed within 1-2 business days.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide. Shipping fees and times vary based on location.',
  },
  {
    question: 'Can I cancel my order?',
    answer: 'You can cancel your order if it has not been processed yet. Contact customer service as soon as possible.',
  },
  {
    question: 'What should I do if my item is damaged?',
    answer: 'Please contact customer support with photos of the damaged item, and we will assist you with a replacement or refund.',
  },
  {
    question: 'Do you offer gift cards?',
    answer: 'Yes, we offer digital gift cards in various denominations. You can purchase them on our website.',
  },
  {
    question: 'How can I contact customer service?',
    answer: 'You can contact customer service via email at support@example.com or by phone at (123) 456-7890.',
  },
  {
    question: 'What is the warranty on your products?',
    answer: 'Our products come with a 1-year warranty against manufacturing defects.',
  },
  {
    question: 'Do you offer a loyalty program?',
    answer: 'Yes, we have a loyalty program where you earn points for every purchase, which can be redeemed for discounts.',
  },
  {
    question: 'Can I use multiple discount codes on a single order?',
    answer: 'No, only one discount code can be applied per order.',
  },
  {
    question: 'What if I forgot to apply a discount code?',
    answer: 'Unfortunately, we cannot apply the discount after the order has been placed. Make sure to apply codes before checkout.',
  },
  {
    question: 'How can I reset my password?',
    answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.',
  },
  {
    question: 'What should I do if I encounter an error during checkout?',
    answer: 'Please try refreshing the page or clearing your browser cache. If the issue persists, contact customer service.',
  },
  {
    question: 'Do you offer a subscription service?',
    answer: 'Currently, we do not offer a subscription service, but we are working on introducing this in the future.',
  },
  {
    question: 'Can I change the items in my order after it’s been placed?',
    answer: 'Once the order is placed, we cannot change the items. However, you can cancel and reorder.',
  },
  {
    question: 'How do I return an item?',
    answer: 'To return an item, visit our return center on the website and follow the instructions.',
  },
  {
    question: 'What happens if an item is out of stock?',
    answer: 'If an item is out of stock, you will be notified, and you can either wait for restocking or choose a different item.',
  },
  {
    question: 'How do I track a refund?',
    answer: 'Refunds are processed within 5-7 business days. You will receive an email confirmation once your refund is issued.',
  },
  {
    question: 'How can I update my account information?',
    answer: 'You can update your account information by logging into your account and navigating to the "Account Settings" section.',
  },
  {
    question: 'What is your privacy policy?',
    answer: 'You can read our privacy policy at the bottom of our website. It outlines how we protect your personal data.',
  },
  {
    question: 'Can I create a wishlist?',
    answer: 'Yes, you can create a wishlist by logging into your account and adding items to your wishlist.',
  },
  {
    question: 'Can I track the status of my return?',
    answer: 'Yes, once your return is processed, you will receive an email with tracking information.',
  },
  {
    question: 'How do I subscribe to your newsletter?',
    answer: 'You can subscribe to our newsletter by entering your email at the bottom of our homepage.',
  },
  {
    question: 'What if I receive the wrong product?',
    answer: 'If you receive the wrong product, please contact customer support for assistance with returns and exchanges.',
  },
  {
    question: 'Do you offer exchanges?',
    answer: 'Yes, we offer exchanges for items that are defective or incorrect. Please contact customer service for further assistance.',
  },
  {
    question: 'How do I apply for a job at your company?',
    answer: 'Visit the "Careers" page on our website to view current job openings and apply online.',
  },
  {
    question: 'Can I get a receipt for my purchase?',
    answer: 'Yes, you will receive a receipt via email after your purchase.',
  },
  {
    question: 'Do you offer any discounts?',
    answer: 'We offer various promotions throughout the year. Be sure to subscribe to our newsletter to stay updated on discounts and sales.',
  },
  {
    question: 'What is your policy on customer reviews?',
    answer: 'We encourage customers to leave honest reviews. All reviews are moderated to ensure they comply with our guidelines.',
  },
  {
    question: 'How can I apply for a wholesale account?',
    answer: 'To apply for a wholesale account, please contact our sales department via email at sales@example.com.',
  },
  {
    question: 'Can I use your products for commercial purposes?',
    answer: 'Our products are intended for personal use. For commercial use, please contact us to discuss licensing.',
  },
  {
    question: 'Do you have any discounts for students?',
    answer: 'Currently, we do not offer student discounts, but we have special sales throughout the year.',
  },
  {
    question: 'Do you support eco-friendly practices?',
    answer: 'Yes, we are committed to sustainability and use eco-friendly packaging materials where possible.',
  },
  {
    question: 'What is your shipping policy?',
    answer: 'We ship orders within 1-2 business days. Delivery times vary depending on location and shipping method.',
  },
  {
    question: 'Do you offer expedited shipping?',
    answer: 'Yes, we offer expedited shipping options at checkout for faster delivery.',
  },
  {
    question: 'Can I add a message to my gift order?',
    answer: 'Yes, you can add a personalized message during checkout for gift orders.',
  },
  {
    question: 'What is your policy on damaged or defective products?',
    answer: 'We will replace or refund any damaged or defective products. Please contact customer support with details and photos.',
  },
  {
    question: 'Do you have any physical stores?',
    answer: 'At the moment, we operate solely online, but we are working on expanding into physical locations in the future.',
  },
  {
    question: 'Can I purchase an item without creating an account?',
    answer: 'Yes, you can checkout as a guest without creating an account, but creating an account will make future orders faster.',
  },
  {
    question: 'How do I subscribe to notifications about back-in-stock items?',
    answer: 'You can subscribe to notifications by selecting the "Notify Me When Available" option on out-of-stock product pages.',
  },
  {
    question: 'Do you offer a price match policy?',
    answer: 'Yes, we offer a price match policy on identical products from authorized retailers. Contact customer service for more details.',
  },
  {
    question: 'How do I get a tracking number?',
    answer: 'A tracking number will be sent to your email once your order has shipped.',
  },
  {
    question: 'Can I return a sale item?',
    answer: 'Sale items are eligible for return as long as they are unused and in their original packaging.',
  },
  {
    question: 'What if I receive an item that doesn’t fit?',
    answer: 'You can return or exchange items that don’t fit as long as they are in new condition.',
  },
  {
    question: 'How do I report a problem with my order?',
    answer: 'If there is an issue with your order, please contact our customer service team with your order number and details of the problem.',
  },
  {
    question: 'Can I receive updates on the status of my order?',
    answer: 'Yes, you will receive email updates about the status of your order from processing to shipping.',
  },
  {
    question: 'What if I didn’t receive my order?',
    answer: 'If your order is delayed or you haven’t received it, please contact customer service for assistance.',
  },
  {
    question: 'Can I cancel a subscription?',
    answer: 'We do not offer subscriptions at this time, but you can unsubscribe from our newsletter anytime.',
  },
  {
    question: 'How do I add an item to my cart?',
    answer: 'To add an item to your cart, simply click the "Add to Cart" button on the product page.',
  },
  {
    question: 'Can I view past orders?',
    answer: 'Yes, you can view your order history by logging into your account and navigating to the "Order History" section.',
  },
  {
    question: 'How do I redeem my loyalty points?',
    answer: 'You can redeem loyalty points during checkout by selecting the "Redeem Points" option.',
  },
  {
    question: 'Can I order a product that is out of stock?',
    answer: 'Currently, you cannot place an order for out-of-stock items, but you can opt to be notified when they are available again.',
  },
  {
    question: 'Do you offer a return shipping label?',
    answer: 'Yes, we offer return shipping labels for your convenience. The cost will be deducted from your refund.',
  },
  {
    question: 'How can I track my return?',
    answer: 'Once your return is processed, you will receive an email with tracking details.',
  },
  {
    question: 'Can I return an item after 30 days?',
    answer: 'Unfortunately, returns can only be processed within 30 days of purchase. For exceptions, please contact customer service.',
  },
  {
    question: 'How do I get a refund for a returned item?',
    answer: 'Refunds are processed once your return is received and inspected. You will be notified once your refund has been issued.',
  },
  {
    question: 'Can I buy a product in bulk?',
    answer: 'Yes, we offer bulk purchasing. Please contact our sales department for more information.',
  },
  {
    question: 'How do I remove an item from my cart?',
    answer: 'To remove an item from your cart, simply click the "Remove" button next to the product in your cart.',
  },
  {
    question: 'How do I update my email preferences?',
    answer: 'You can update your email preferences by logging into your account and navigating to the "Email Preferences" section.',
  },
  {
    question: 'Do you offer price drops?',
    answer: 'We do offer price drops occasionally. Make sure to sign up for our newsletter to get notified.',
  },
  {
    question: 'How do I know if my order has been shipped?',
    answer: 'You will receive a shipping confirmation email with tracking information once your order has shipped.',
  },
  {
    question: 'Can I add a gift message to my order?',
    answer: 'Yes, during checkout you can add a personalized gift message to your order.',
  },
  {
    question: 'Can I cancel a recurring order?',
    answer: 'We do not offer recurring orders at the moment, but you can manually place orders on our website.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Currently, we do not have a student discount program. Please subscribe to our newsletter for updates on future promotions.',
  },
  {
    question: 'How do I return a gift?',
    answer: 'To return a gift, please contact the person who purchased it for you or contact customer service with your return request.',
  },
  {
    question: 'Hi',
    answer: 'Hi'
  },
  {
    question: 'What are your business hours?',
    answer: 'Our customer service is available Monday through Friday from 9 AM to 5 PM, excluding holidays.',
  },
  {
    question: 'What should I do if I can’t find my order number?',
    answer: 'If you can’t find your order number, please check your email or contact customer service for assistance.',
  },
  {
    question: 'Do you provide invoices?',
    answer: 'Yes, invoices are available in your order history or can be requested from customer service.',
  },
  {
    question: 'How do I stop receiving marketing emails?',
    answer: 'You can unsubscribe from our marketing emails by clicking the "Unsubscribe" link at the bottom of any email.',
  },
  {
    question: 'What do I do if I received a duplicate charge?',
    answer: 'If you notice a duplicate charge, please contact customer service immediately, and we will investigate.',
  },
  {
    question: 'What should I do if I never received an email confirmation?',
    answer: 'If you haven’t received an email confirmation, please check your spam folder or contact customer support for assistance.',
  },
  {
    question: 'Can I upgrade my shipping method after placing an order?',
    answer: 'Unfortunately, we cannot change the shipping method after the order has been placed. However, you can cancel and reorder.',
  },
  {
    question: 'How do I check the status of my gift card?',
    answer: 'You can check your gift card balance by logging into your account or contacting customer support.',
  },
  {
    question: 'Do you offer a price guarantee?',
    answer: 'We do not offer a price guarantee at this time, but we occasionally have sales and price drops.',
  },
  {
    question: 'Can I track my order without an account?',
    answer: 'Yes, you can track your order using the tracking number sent to your email.',
  },
  {
    question: 'How do I know if my order was successfully placed?',
    answer: 'You will receive an order confirmation email immediately after placing your order.',
  },
  {
    question: 'What should I do if my payment didn’t go through?',
    answer: 'If your payment didn’t go through, please check your payment method or contact customer support for assistance.',
  },
  {
    question: 'What is the best way to contact customer service?',
    answer: 'You can contact customer service via email at support@example.com or by calling (123) 456-7890.',
  },
  {
    question: 'How do I know if my order is eligible for free shipping?',
    answer: 'Orders over $50 are eligible for free shipping. You will see the option at checkout.',
  },
  {
    question: 'Can I return an item if I lost the receipt?',
    answer: 'We require proof of purchase for returns. If you lost the receipt, please contact customer service for further assistance.',
  },
  {
    question: 'What is your exchange policy?',
    answer: 'Exchanges are allowed for defective or incorrect items. Please contact customer support for more details.',
  },
  {
    question: 'Can I add multiple addresses for shipping?',
    answer: 'Currently, we can only ship to one address per order. You can create a new order for additional addresses.',
  },
  {
    question: 'How can I track my order with a tracking number?',
    answer: 'To track your order, enter the tracking number on our website or use the carrier’s website directly.',
  },
  {
    question: 'What if my order was shipped to the wrong address?',
    answer: 'Please contact customer service immediately if your order was shipped to the wrong address.',
  },
  {
    question: 'What should I do if I see an error in my order?',
    answer: 'If you notice an error in your order, contact customer service as soon as possible to correct it.',
  },
  {
    question: 'What should I do if I’m not happy with my purchase?',
    answer: 'If you’re not satisfied with your purchase, you can return the item for a refund or exchange.',
  },
  {
    question: 'How do I delete my account?',
    answer: 'If you would like to delete your account, please contact customer support for assistance.',
  },
  {
    question: 'Can I contact the employees?',
    answer: 'If you need help and none of the information above answers your question, please contact the employees at: siyamregnyeshidagna777@gmail.com.',
  },
  {
    question: 'How do I create an account?',
    answer: 'You can create an account by clicking "Sign Up" on our website and filling in your details.',
  },
  {
    question: 'Are my payment details secure?',
    answer: 'Yes, we use SSL encryption to ensure all payment details are secure.',
  },
  {
    question: 'Do you offer cash on delivery?',
    answer: 'Currently, we only accept online payments for all orders.',
  },
  {
    question: 'Can I change my order\'s delivery date?',
    answer: 'Once shipped, delivery dates depend on the carrier. Contact us before shipping for changes.',
  },
  {
    question: 'How do I apply a promo code?',
    answer: 'Enter your promo code at checkout in the "Discount Code" field.',
  },
  {
    question: 'What is your holiday return policy?',
    answer: 'Holiday purchases may have extended return windows. Check our website for details.',
  },
  {
    question: 'Do you offer same-day delivery?',
    answer: 'Same-day delivery is available in select cities. Check your location at checkout.',
  },
  {
    question: 'How do I check my loyalty points balance?',
    answer: 'Log into your account to view your points under "Loyalty Program."',
  },
  {
    question: 'Can I pre-order items?',
    answer: 'Yes, pre-orders are available for select items. The expected release date will be listed.',
  },
  {
    question: 'What is the minimum order amount?',
    answer: 'There is no minimum order amount unless specified for promotions.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes, bulk discounts apply for orders over a certain quantity. Contact sales for details.',
  },
  {
    question: 'How do I know if an item is in stock?',
    answer: 'Stock status is shown on the product page. Sign up for notifications if out of stock.',
  },
  {
    question: 'Can I ship to a PO Box?',
    answer: 'Yes, but some carriers may not deliver to PO Boxes. Check shipping options at checkout.',
  },
  {
    question: 'Do you offer assembly services for furniture?',
    answer: 'Currently, we do not offer assembly services.',
  },
  {
    question: 'What if I miss my delivery?',
    answer: 'The carrier will usually attempt redelivery or hold the package at a local facility.',
  },
  {
    question: 'How do I file a warranty claim?',
    answer: 'Contact customer service with your order number and proof of purchase to start a claim.',
  },
  {
    question: 'Can I return a digital product?',
    answer: 'Digital products are non-refundable unless defective.',
  },
  {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, gift wrapping is available for select items at checkout.',
  },
  {
    question: 'How do I merge two orders?',
    answer: 'Orders cannot be merged after placement, but you can cancel and reorder.',
  },
  {
    question: 'What is your restocking fee?',
    answer: 'We do not charge restocking fees for standard returns.',
  },
  {
    question: 'Can I return a product without the original box?',
    answer: 'The original packaging is required for returns unless the item is defective.',
  },
  {
    question: 'How do I know if my coupon code is valid?',
    answer: 'Invalid codes will display an error at checkout. Check expiry dates and terms.',
  },
  {
    question: 'Do you price adjust if an item goes on sale after I buy it?',
    answer: 'We do not offer price adjustments post-purchase.',
  },
  {
    question: 'Can I pause my subscription?',
    answer: 'Subscriptions can be paused or canceled anytime in your account settings.',
  },
  {
    question: 'How do I report a fraudulent transaction?',
    answer: 'Contact customer service immediately if you suspect fraud on your account.',
  },
  {
    question: 'Do you sell refurbished items?',
    answer: 'Refurbished items are listed separately in our "Outlet" section.',
  },
  {
    question: 'Can I order by phone?',
    answer: 'Yes, call our customer service line to place phone orders.',
  },
  {
    question: 'How do I update my billing address?',
    answer: 'Update your billing address in "Account Settings" or during checkout.',
  },
  {
    question: 'What is your affiliate program policy?',
    answer: 'Learn about our affiliate program and apply on our "Partnerships" page.',
  },
  {
    question: 'Do you offer military discounts?',
    answer: 'Yes, active military personnel receive a 10% discount. Verify via ID.me at checkout.',
  },
  {
    question: 'How do I leave a product review?',
    answer: 'Log into your account, go to "Order History," and click "Write a Review."',
  },
  {
    question: 'Can I return a product bought during a flash sale?',
    answer: 'Flash sale items follow standard return policies unless marked "Final Sale."',
  },
  {
    question: 'Do you have a mobile app?',
    answer: 'Yes! Download our app from the App Store or Google Play for exclusive deals.',
  },
  {
    question: 'How do I check my gift card balance?',
    answer: 'Visit the "Gift Cards" page and enter your card number/PIN.',
  },
  {
    question: 'Can I cancel an order during processing?',
    answer: 'Contact us immediately. If not yet shipped, we may be able to cancel it.',
  },
  {
    question: 'What is your policy on counterfeit products?',
    answer: 'We guarantee 100% authentic products. Report suspicions to legal@example.com.',
  },
  {
    question: 'How do I contact the seller for a marketplace item?',
    answer: 'Use the "Contact Seller" button on the product page.',
  },
  {
    question: 'Do you offer trade-in programs?',
    answer: 'Trade-ins are available for select electronics. See "Trade-In" under "Services."',
  },
  {
    question: 'Can I return a product if I opened it?',
    answer: 'Opened products may be returned if unused and repackaged. Exclusions apply.',
  },
  {
    question: 'How do I change the language on your website?',
    answer: 'Use the language selector at the top-right corner of the site.',
  },
  {
    question: 'What is your policy on backorders?',
    answer: 'Backordered items will ship when restocked. You’ll receive updates via email.',
  },
  {
    question: 'Do you offer virtual consultations?',
    answer: 'Yes! Book a free virtual consultation with our experts via the "Services" page.',
  },
  {
    question: 'Can I return a product after using it?',
    answer: 'Used items are only returnable if defective or under warranty.',
  },
  {
    question: 'How do I share my wishlist?',
    answer: 'Click "Share Wishlist" in your account to generate a link.',
  },
  {
    question: 'What is your policy on lost packages?',
    answer: 'We’ll reship or refund if a package is lost in transit. Contact us after carrier investigation.',
  },
  {
    question: 'Do you offer in-store pickup?',
    answer: 'In-store pickup is available at select retail partner locations.',
  },
  {
    question: 'How do I unsubscribe from SMS alerts?',
    answer: 'Reply STOP to any SMS message or update preferences in your account.',
  },
  {
    question: 'Can I donate part of my purchase to charity?',
    answer: 'Yes! Select a charity at checkout via our "Round Up for Charity" program.',
  },
  {
    question: 'What is your carbon-neutral shipping initiative?',
    answer: 'We offset carbon emissions for all shipments. Learn more in our Sustainability section.',
  },
  {
    question: 'How do I become a vendor for your marketplace?',
    answer: 'Apply to be a vendor via our "Sell With Us" page. Approval takes 7–10 business days.',
  },  
 
    {
      question: 'Can I pay with cryptocurrency?',
      answer: 'Currently, we do not accept cryptocurrency payments. We accept major credit cards and digital wallets.'
    },
    {
      question: 'Can I split my payment across multiple cards?',
      answer: 'No, we only allow one payment method per order.'
    },
    {
      question: 'Do you accept cash on delivery?',
      answer: 'No, we do not offer cash on delivery at this time.'
    },
    {
      question: 'What should I do if my payment is declined?',
      answer: 'Check if your card details are correct, ensure your card has sufficient funds, and try again. If the issue persists, contact your bank.'
    },
    {
      question: 'Can I get an invoice for my order?',
      answer: 'Yes, an invoice will be sent to your email after your purchase.'
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we partner with third-party services to offer installment payment options at checkout.'
    },
    {
      question: 'Why was I charged twice?',
      answer: 'Sometimes, pending authorizations appear as duplicate charges. They usually disappear within a few days. Contact us if the charge remains.'
    },
    {
      question: 'Can I use a prepaid card for payment?',
      answer: 'Yes, we accept prepaid debit and credit cards.'
    },
    {
      question: 'Can I place an order over the phone?',
      answer: 'No, we only accept online orders through our website.'
    },
    {
      question: 'What should I do if I accidentally ordered the wrong item?',
      answer: 'Contact customer support as soon as possible to see if changes can be made before processing begins.'
    },
    {
      question: 'Can I choose my delivery date?',
      answer: 'No, delivery times depend on the shipping method and carrier schedules.'
    },
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Currently, we do not offer same-day delivery. Expedited options are available.'
    },
    {
      question: 'What courier do you use for shipping?',
      answer: 'We use a variety of carriers, including UPS, FedEx, and USPS, depending on your location.'
    },
    {
      question: 'Can I change my shipping method after placing an order?',
      answer: 'No, once an order is processed, the shipping method cannot be changed.'
    },
    {
      question: 'What happens if my package gets lost?',
      answer: 'If your tracking information says delivered but you haven’t received it, contact the carrier and our customer support team.'
    },
    {
      question: 'Do you offer curbside pickup?',
      answer: 'No, we currently do not offer curbside pickup.'
    },
    {
      question: 'What should I do if my package arrives late?',
      answer: 'Check the tracking details. If your order is significantly delayed, contact customer support.'
    },
    {
      question: 'Do you ship to P.O. boxes?',
      answer: 'Yes, we ship to P.O. boxes, but some items may require a street address.'
    },
    {
      question: 'How do I change my delivery preferences?',
      answer: 'You can manage delivery options through your shipping carrier’s website using your tracking number.'
    },
    {
      question: 'Can I pick up my order from your warehouse?',
      answer: 'No, we currently do not offer warehouse pickup.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase. Items must be unused and in their original packaging.'
    },
    {
      question: 'How do I initiate a return?',
      answer: 'Log in to your account, go to order history, and select the return option for your item.'
    },
    {
      question: 'Do you offer free returns?',
      answer: 'We offer free returns on eligible items. Check our return policy for details.'
    },
    {
      question: 'How long does it take to process a refund?',
      answer: 'Refunds are processed within 5-7 business days after we receive the returned item.'
    },
    {
      question: 'Can I exchange an item?',
      answer: 'Yes, exchanges are available for eligible items. Contact our support team to process an exchange.'
    },
    {
      question: 'What if I receive a damaged item?',
      answer: 'Contact us within 48 hours of delivery with photos of the damaged item for assistance.'
    },
    {
      question: 'Can I cancel my order after placing it?',
      answer: 'Orders can only be canceled before they are processed. Once shipped, they must go through the return process.'
    },
    {
      question: 'Do you offer gift cards?',
      answer: 'Yes, we offer digital gift cards in various denominations.'
    },
    {
      question: 'Can I apply multiple discount codes to one order?',
      answer: 'No, only one discount code can be used per order.'
    },
    {
      question: 'Do you have a loyalty program?',
      answer: 'Yes, our rewards program allows you to earn points for every purchase and redeem them for discounts.'
    },
    {
      question: 'How do I track my order?',
      answer: 'You will receive a tracking link via email once your order ships.'
    },
    {
      question: 'Can I change my shipping address after placing an order?',
      answer: 'Once an order is processed, the shipping address cannot be changed.'
    },
    {
      question: 'What should I do if my order is marked as delivered but I didn’t receive it?',
      answer: 'Check with neighbors or your local post office. If you still can’t find it, contact customer support.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to select countries. Shipping costs and times vary by location.'
    },
    {
      question: 'Are your products covered by a warranty?',
      answer: 'Yes, most of our products come with a manufacturer’s warranty. Check product details for coverage information.'
    },
    {
      question: 'Can I sign up for notifications about restocked items?',
      answer: 'Yes, sign up for restock alerts on the product page.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we provide discounts on bulk orders. Contact our sales team for more details.'
    },
    {
      question: 'How do I update my account information?',
      answer: 'Log into your account and go to the account settings page to update your details.'
    },
    {
      question: 'Can I subscribe to receive updates and promotions?',
      answer: 'Yes, sign up for our newsletter to receive exclusive offers and updates.'
    },
    {
      question: 'Do you offer eco-friendly packaging?',
      answer: 'Yes, we use sustainable packaging materials whenever possible.'
    },
    {
      question: 'Can I buy now and pay later?',
      answer: 'Yes, we offer buy now, pay later options through select payment providers.'
    },
    {
      question: 'Do you have a physical store?',
      answer: 'No, we are an online-only store.'
    },
    {
      question: 'Do you offer referral discounts?',
      answer: 'Yes, refer a friend and both of you will receive a discount on your next purchase.'
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can reach us via live chat, email, or our contact form on the website.'
    },
    {
      question: 'Are there seasonal sales or discounts?',
      answer: 'Yes, we offer discounts during major sales events like Black Friday and Cyber Monday.'
    },
    {
      question: 'Can I donate part of my purchase to charity?',
      answer: 'Yes! Select a charity at checkout via our "Round Up for Charity" program.'
    },

      {
        question: 'Can I create an account without placing an order?',
        answer: 'Yes, you can create an account anytime to save your details and track orders.'
      },
      {
        question: 'How do I reset my password?',
        answer: 'Click "Forgot Password" on the login page and follow the instructions to reset it.'
      },
      {
        question: 'Can I check out as a guest?',
        answer: 'Yes, you can place an order without creating an account.'
      },
      {
        question: 'How do I update my billing information?',
        answer: 'Go to your account settings and update your billing details.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Contact customer support to request account deletion.'
      },
      {
        question: 'What should I do if I receive the wrong item?',
        answer: 'Contact customer service with your order number and a photo of the incorrect item.'
      },
      {
        question: 'Can I add items to an existing order?',
        answer: 'No, once an order is placed, items cannot be added. You will need to place a new order.'
      },
      {
        question: 'Do you offer price matching?',
        answer: 'No, we do not currently offer price matching.'
      },
      {
        question: 'Can I customize my order?',
        answer: 'Some products allow customization. Check the product page for options.'
      },
      {
        question: 'Do you offer gift wrapping?',
        answer: 'Yes, gift wrapping is available for an additional charge at checkout.'
      },
      {
        question: 'Can I schedule my delivery for a specific date?',
        answer: 'No, delivery dates depend on carrier schedules and shipping methods.'
      },
      {
        question: 'How do I apply a promo code?',
        answer: 'Enter your promo code at checkout in the designated field.'
      },
      {
        question: 'Why isn’t my discount code working?',
        answer: 'Ensure the code is valid, not expired, and meets any minimum purchase requirements.'
      },
      {
        question: 'Do you offer student discounts?',
        answer: 'Yes, verified students can receive a discount. Check our student discount page for details.'
      },
      {
        question: 'Can I cancel my subscription?',
        answer: 'Yes, you can cancel a subscription anytime from your account settings.'
      },
      {
        question: 'Do you sell refurbished products?',
        answer: 'Yes, we offer certified refurbished products at discounted prices.'
      },
      {
        question: 'Can I return a sale item?',
        answer: 'Sale items may have different return policies. Check the product page for details.'
      },
      {
        question: 'How do I check the status of my refund?',
        answer: 'Log in to your account and check the refund status in the "Orders" section.'
      },
      {
        question: 'Do you offer next-day shipping?',
        answer: 'Yes, next-day shipping is available for select locations at an extra charge.'
      },
      {
        question: 'Can I request a different shipping carrier?',
        answer: 'No, we automatically choose the best carrier based on your location.'
      },
      {
        question: 'How do I return a defective product?',
        answer: 'Contact customer service with details about the defect for assistance.'
      },
      {
        question: 'Do I need a receipt for returns?',
        answer: 'Yes, a receipt or order confirmation is required for all returns.'
      },
      {
        question: 'Can I preorder upcoming products?',
        answer: 'Yes, some products are available for preorder. Check product pages for details.'
      },
      {
        question: 'Do you sell digital products?',
        answer: 'Yes, we offer digital downloads and software licenses.'
      },
      {
        question: 'Are your products ethically sourced?',
        answer: 'Yes, we partner with suppliers who follow ethical and sustainable practices.'
      },
      {
        question: 'Can I request a product that is out of stock?',
        answer: 'Yes, sign up for restock notifications on the product page.'
      },
      {
        question: 'Do you offer military discounts?',
        answer: 'Yes, verified military members can receive a discount.'
      },
      {
        question: 'Can I buy wholesale from your store?',
        answer: 'Yes, we offer wholesale pricing. Contact our sales team for more details.'
      },
      {
        question: 'Do you provide tracking updates via SMS?',
        answer: 'Yes, you can opt-in for SMS tracking notifications at checkout.'
      },
      {
        question: 'What should I do if my order arrives incomplete?',
        answer: 'Check your email for multiple shipments. If an item is missing, contact customer service.'
      },
      {
        question: 'Are your products covered by a satisfaction guarantee?',
        answer: 'Yes, we offer a satisfaction guarantee on select products.'
      },
      {
        question: 'How do I leave a product review?',
        answer: 'Log in to your account and navigate to the product page to leave a review.'
      },
      {
        question: 'Can I refer friends for discounts?',
        answer: 'Yes, refer a friend and both of you will receive a discount on your next purchase.'
      },
      {
        question: 'How do I sign up for exclusive deals?',
        answer: 'Subscribe to our email newsletter for exclusive promotions.'
      },
      {
        question: 'Do you offer installment payments?',
        answer: 'Yes, we partner with third-party services to offer installment plans.'
      },
      {
        question: 'Are your gift cards refundable?',
        answer: 'No, gift cards are non-refundable and cannot be exchanged for cash.'
      },
      {
        question: 'Can I place an order for someone else?',
        answer: 'Yes, enter their shipping details at checkout.'
      },
      {
        question: 'Do you ship to hotels or temporary addresses?',
        answer: 'No, we do not ship to hotels or temporary addresses.'
      },
      {
        question: 'How do I unsubscribe from marketing emails?',
        answer: 'Click the "Unsubscribe" link at the bottom of any promotional email.'
      },
      {
        question: 'Can I return an item without the original packaging?',
        answer: 'No, items must be returned in their original packaging.'
      },
      {
        question: 'Do you charge sales tax?',
        answer: 'Yes, sales tax is applied where required by law.'
      },
      {
        question: 'Can I combine multiple orders into one shipment?',
        answer: 'No, each order is processed separately and cannot be combined.'
      },
      {
        question: 'Do you offer live chat support?',
        answer: 'Yes, live chat is available during business hours on our website.'
      },
      {
        question: 'What should I do if I entered the wrong shipping address?',
        answer: 'Contact customer service immediately. If the order has not shipped, we may be able to update it.'
      },
      {
        question: 'Do you offer store credit instead of refunds?',
        answer: 'Yes, you can choose store credit for your return instead of a refund.'
      },
      {
        question: 'Can I leave a tip for my delivery driver?',
        answer: 'Currently, we do not have an option for tipping delivery drivers.'
      },
      {
        question: 'How do I report a problem with my order?',
        answer: 'Contact customer support with your order number and issue details for assistance.'
      },
      {
        question: 'How do I check if a product has a warranty?',
        answer: 'Warranty information is listed on the product page under "Specifications". If unsure, contact our support team.',
      },
      {
        question: 'What should I do if my discount code isn\'t working?',
        answer: 'Ensure the code is entered correctly, hasn\'t expired, and meets minimum order requirements. If issues persist, contact support.',
      },
      {
        question: 'Do you offer product demonstrations?',
        answer: 'We provide video demonstrations for select products on their pages. Live demos can be arranged for B2B clients.',
      },
      {
        question: 'Can I request a product that\'s not on your website?',
        answer: 'Yes! Submit a product request through our "Contact Us" form. We\'ll notify you if we add it to our inventory.',
      },
      {
        question: 'How do I know if a product is authentic?',
        answer: 'We source directly from manufacturers and authorized distributors. All products come with authenticity guarantees.',
      },
      {
        question: 'What payment plans do you offer?',
        answer: 'We support installment payments via PayPal Credit, Affirm, and Afterpay at checkout for eligible orders.',
      },
      {
        question: 'How can I get a product sample?',
        answer: 'Samples are available for select products. Check the product page for "Order Sample" options or contact sales.',
      },
      {
        question: 'Do you have a clearance section?',
        answer: 'Yes! Visit our "Clearance & Deals" page for discounted items. Inventory changes daily.',
      },
      {
        question: 'Can I schedule a delivery time?',
        answer: 'For premium shipping options, you can select delivery windows during checkout where available.',
      },
      {
        question: 'How do I register my product warranty?',
        answer: 'Most warranties auto-register at purchase. For manual registration, follow instructions included with your product.',
      },
      {
        question: 'What if I receive someone else\'s order?',
        answer: 'Contact us immediately with your order number. We\'ll arrange return shipping and expedite your correct order.',
      },
      {
        question: 'Do you offer white-label or private label services?',
        answer: 'Yes, we provide private labeling for qualifying products. Minimum order quantities apply. Email private-label@example.com.',
      },
      {
        question: 'How do I check if a product is backordered?',
        answer: 'Backorder status appears on the product page. You\'ll receive estimated restock dates after ordering.',
      },
      {
        question: 'Can I get a product sooner if I pay extra?',
        answer: 'Expedited processing may be available for some items. Contact us within 1 hour of ordering to inquire.',
      },
      {
        question: 'What countries do you not ship to?',
        answer: 'Due to trade restrictions, we cannot ship to certain countries. Enter your address at checkout to verify eligibility.',
      },
      {
        question: 'How do I become a product tester?',
        answer: 'Join our testing panel by applying through the "Product Testing Program" link in our website footer.',
      },
      {
        question: 'Can I order parts or accessories separately?',
        answer: 'Replacement parts are available for many products. Search for "[Product Name] parts" or contact support.',
      },
      {
        question: 'Do you offer volume discounts for repeat customers?',
        answer: 'Frequent buyers may qualify for loyalty pricing. Contact your account manager or sales@example.com.',
      },
      {
        question: 'How do I know if a product is energy efficient?',
        answer: 'Look for ENERGY STAR® ratings or efficiency details in the "Tech Specs" section of product pages.',
      },
      {
        question: 'Can I get a product specification sheet?',
        answer: 'Technical spec sheets are available for download on product pages or by request from our support team.',
      },
      {
        question: 'What if my package is damaged in transit?',
        answer: 'Refuse delivery if visible damage occurs. For concealed damage, photograph everything and contact us within 48 hours.',
      },
      {
        question: 'Do you offer product customization?',
        answer: 'Customization is available for select items. Look for "Customize" buttons on product pages or ask our sales team.',
      },
      {
        question: 'How do I check if a product is discontinued?',
        answer: 'Discontinued items are marked as such on their product pages. Sign up for alerts if you\'re seeking alternatives.',
      },
      {
        question: 'Can I get notifications when new products launch?',
        answer: 'Subscribe to our "New Arrivals" newsletter or follow us on social media for product launch announcements.',
      },
      {
        question: 'What if I need my order by a specific date?',
        answer: 'During checkout, use our "Delivery Date Calculator" or contact us before ordering for guaranteed delivery dates.',
      },
      {
        question: 'Do you offer product installation services?',
        answer: 'Professional installation is available in select areas for certain products. Check the "Services" tab on product pages.',
      },
      {
        question: 'How can I verify product compatibility?',
        answer: 'Use our "Compatibility Checker" tool on relevant product pages or consult the product manual\'s specifications.',
      },
      {
        question: 'Can I get a bulk quote without creating an account?',
        answer: 'Yes, use our "Instant Bulk Pricing" tool on product pages or submit a quote request through our contact form.',
      },
      {
        question: 'What if the product I received doesn\'t match the description?',
        answer: 'Contact us immediately with photos of the discrepancy. We\'ll arrange return shipping and send the correct item.',
      },
      {
        question: 'Do you offer product training?',
        answer: 'We provide training resources and live webinars for complex products. Check the "Resources" section on our site.',
      },
      {
        question: 'How do I find products that meet specific certifications?',
        answer: 'Use our "Advanced Filters" to search by certifications like USDA Organic, UL Listed, or Fair Trade.',
      },
      {
        question: 'Can I purchase extended warranties?',
        answer: 'Extended warranty options appear at checkout for eligible products. You can also add them within 30 days of purchase.',
      },
      {
        question: 'What if I need to return an oversized item?',
        answer: 'We arrange pickup for large items. Contact us for return authorization and we\'ll guide you through the process.',
      },
      {
        question: 'Do you offer product leasing options?',
        answer: 'Leasing is available for business customers through our partners. Email leasing@example.com for details.',
      },
      {
        question: 'How do I check if a product is eligible for rebates?',
        answer: 'Rebate information appears on product pages when available. You can also check manufacturer websites for promotions.',
      },
      {
        question: 'Can I get a commercial use license?',
        answer: 'Commercial licenses are required for certain products. Contact licensing@example.com with your intended use case.',
      },
      {
        question: 'What if I need technical support for a product?',
        answer: 'Visit our "Support Center" for troubleshooting guides or contact the manufacturer\'s support line provided with your product.',
      },
      {
        question: 'Do you offer product bundles or kits?',
        answer: 'Yes! Look for "Frequently Bought Together" suggestions or search for "[Product Category] bundles" on our site.',
      },
      {
        question: 'How do I find products made in specific countries?',
        answer: 'Use our "Advanced Search" to filter by country of origin. This information is also listed in product details.',
      },
      {
        question: 'Can I get a certificate of authenticity?',
        answer: 'COAs are provided automatically for authenticated items. For others, request one from support within 14 days of delivery.',
      },
      {
        question: 'What if I need to return a hazardous material?',
        answer: 'Special procedures apply for hazmat returns. Contact us immediately—do not ship without authorization.',
      },
      {
        question: 'Do you offer product rental options?',
        answer: 'Short-term rentals are available for select equipment. Visit our "Rentals" section or call 1-800-RENT-NOW.',
      },
      {
        question: 'How do I check if a product is vegan/cruelty-free?',
        answer: 'These attributes are listed under "Product Ethics" on applicable items. You can also filter by these criteria.',
      },
      {
        question: 'Can I purchase wholesale without a business license?',
        answer: 'We require valid business credentials for wholesale accounts. Retail purchases don\'t need verification.',
      },
      {
        question: 'What if I need to modify an order for customs?',
        answer: 'Contact us immediately with your order number and required documentation changes for international shipments.',
      },
      {
        question: 'Do you offer product liquidation?',
        answer: 'Bulk liquidation lots are available periodically. Join our liquidation mailing list for notifications.',
      },
      {
        question: 'How do I find products with specific safety ratings?',
        answer: 'Safety certifications appear in product specifications. Use our "Safety Standards" filter in advanced search.',
      },
      {
        question: 'Can I get a product in different packaging?',
        answer: 'Special packaging requests may be accommodated for large orders. Contact sales@example.com before purchasing.',
      },
      {
        question: 'What if I need to declare a lower value for customs?',
        answer: 'We cannot falsify customs declarations. All international shipments show actual purchase prices.',
      },
      {
        question: 'Do you offer product buyback programs?',
        answer: 'We have trade-in programs for select electronics and equipment. Check "Trade-In" under "Services" for details.',
      },
      {
        question: 'How do I find products that support specific causes?',
        answer: 'Our "Social Impact" category highlights products where purchases contribute to charitable causes.',
      },
      {
        question: 'Can I get a notarized invoice?',
        answer: 'Notarized documents are available for business orders. Request this service at checkout or contact accounting@example.com.',
      },
      {
        question: 'What if I need to return a product to a different address?',
        answer: 'Return shipments must go to our designated facilities. Contact us for authorization before shipping elsewhere.',
      },
      {
        question: 'How do I check if a product is eligible for international shipping?',
        answer: 'Product pages display international shipping eligibility. You can also filter searches by "Ships Worldwide".',
      },
      {
        question: 'Can I purchase products for resale?',
        answer: 'Yes, we offer wholesale programs for resellers. Apply through our "Bulk Purchasing" portal for resale terms.',
      },
      {
        question: 'What happens if my package is stolen after delivery?',
        answer: 'File a police report and contact us with the case number. We may offer replacement options depending on your location.',
      },
      {
        question: 'Do you offer product insurance?',
        answer: 'Shipping insurance is automatically included on all orders over $200. Lower value items can add it at checkout.',
      },
      {
        question: 'How do I request a product demonstration video?',
        answer: 'Visit the product page and click "Request Demo Video". We\'ll email you a detailed demonstration within 24 hours.',
      },
      {
        question: 'Can I get a product in different colors than shown?',
        answer: 'Available color options are listed on product pages. Contact us if you need custom colors for bulk orders.',
      },
      {
        question: 'What if I need to return an item without the original receipt?',
        answer: 'We can look up orders by email address or credit card number to process returns without physical receipts.',
      },
      {
        question: 'Do you offer corporate gifting services?',
        answer: 'Yes! Our corporate gifting program includes branded packaging and bulk discounts. Email gifts@example.com.',
      },
      {
        question: 'How do I check if a product contains allergens?',
        answer: 'Allergen information is listed under "Product Details". Contact us if you need additional safety data sheets.',
      },
      {
        question: 'Can I get a product without the manufacturer\'s packaging?',
        answer: 'Discreet packaging is available for select items. Note this request in the "Special Instructions" at checkout.',
      },
      {
        question: 'What if I need to change the name on my order?',
        answer: 'Contact customer service immediately with your order number. Name changes are possible before shipment.',
      },
      {
        question: 'Do you offer product customization for weddings?',
        answer: 'Yes! Our wedding customization service includes personalized engraving. Allow 4-6 weeks for these special orders.',
      },
      {
        question: 'How do I check if a product is machine washable?',
        answer: 'Care instructions including washability are listed under "Product Specifications" on each item page.',
      },
      {
        question: 'Can I purchase floor models or display items?',
        answer: 'Display items are occasionally available at discount. Check our "Store Displays" category for current offerings.',
      },
      {
        question: 'What if I receive a product that expires soon?',
        answer: 'We guarantee all products have at least 80% of their shelf life remaining. Contact us if you receive short-dated items.',
      },
      {
        question: 'Do you offer augmented reality product previews?',
        answer: 'Yes! Look for the "View in AR" button on compatible product pages to visualize items in your space.',
      },
      {
        question: 'How do I check if a product is kosher/halal certified?',
        answer: 'Certification badges appear on qualifying product pages. Filter searches by "Kosher" or "Halal" to find compliant items.',
      },
      {
        question: 'Can I purchase products for a school or nonprofit?',
        answer: 'Educational and nonprofit discounts are available. Apply through our "Institutional Purchasing" program.',
      },
      {
        question: 'What if I need to return an item purchased with a gift card?',
        answer: 'Refunds for gift card purchases will be issued as store credit to your account.',
      },
      {
        question: 'Do you offer blind shipping (no company branding)?',
        answer: 'Discreet shipping is available for wholesale orders. Contact sales@example.com to arrange this service.',
      },
      {
        question: 'How do I check if a product is made in the USA?',
        answer: 'Country of origin is listed in product details. Use our "Made in USA" filter to find domestic products.',
      },
      {
        question: 'Can I purchase extended service plans?',
        answer: 'Extended warranties and service plans are offered at checkout for eligible electronics and appliances.',
      },
      {
        question: 'What if I need to return an item to a different country?',
        answer: 'International returns must go to our designated facility in the original shipping country. Contact us for authorization.',
      },
      {
        question: 'Do you offer product assembly instructions online?',
        answer: 'Assembly guides are available for download on product pages. Search by model number if you can\'t find them.',
      },
      {
        question: 'How do I check if a product is compatible with my device?',
        answer: 'Use our "Compatibility Checker" tool or enter your device model in the product questions section.',
      },
      {
        question: 'Can I purchase products for a rental business?',
        answer: 'Commercial use requires a business account. Apply through our "Commercial Licensing" portal for rental permissions.',
      },
      {
        question: 'What if I need to return an item purchased during a promotion?',
        answer: 'Promotional items follow standard return policies unless marked "Final Sale". Discounts may be prorated on returns.',
      },
      {
        question: 'Do you offer product disposal or recycling services?',
        answer: 'We partner with certified e-waste recyclers. Contact sustainability@example.com for disposal instructions.',
      },
      {
        question: 'How do I check if a product is FDA approved?',
        answer: 'FDA clearance status appears in product specifications for applicable health and medical items.',
      },
      {
        question: 'Can I purchase products for a government agency?',
        answer: 'We accept government purchase orders and participate in GSA contracts. Email gov@example.com for setup.',
      },
      {
        question: 'What if I need documentation for customs clearance?',
        answer: 'Commercial invoices and customs documentation are automatically included with international shipments.',
      },
      {
        question: 'Do you offer product demonstrations in-store?',
        answer: 'In-person demos are available at our flagship locations. Schedule appointments through our "Experience Centers" page.',
      },
      {
        question: 'How do I check if a product is eligible for FSA/HSA?',
        answer: 'FSA/HSA eligible products are marked with blue badges. Filter by "FSA Eligible" to find qualifying health items.',
      },
      {
        question: 'Can I purchase products for a hotel or Airbnb?',
        answer: 'Hospitality bulk purchasing programs are available. Contact hospitality@example.com for commercial pricing.',
      },
      {
        question: 'What if I need to return an item that was a gift?',
        answer: 'Gift returns require the original order number. The refund will be issued to the original payment method.',
      },
      {
        question: 'Do you offer blind dropshipping for businesses?',
        answer: 'Our wholesale program supports dropshipping with no branding. Minimum order quantities apply.',
      },
      {
        question: 'How do I check if a product is suitable for commercial kitchens?',
        answer: 'NSF-certified products are marked in specifications. Filter by "Commercial Grade" for restaurant-quality items.',
      },
      {
        question: 'Can I purchase products for a healthcare facility?',
        answer: 'Medical-grade products require facility credentials. Apply through our "Healthcare Professional" portal.',
      },
      {
        question: 'What if I need to return an item that\'s been recalled?',
        answer: 'Recalled items qualify for free return shipping and full refunds. Check our recalls page for current notices.',
      },
      {
        question: 'Do you offer product calibration services?',
        answer: 'Precision instruments can be professionally calibrated. Add calibration service at checkout for eligible items.',
      },
      {
        question: 'How do I check if a product is suitable for outdoor use?',
        answer: 'Weather resistance ratings (IP codes) are listed in technical specifications for outdoor products.',
      },
      {
        question: 'Can I purchase products for a school fundraiser?',
        answer: 'Fundraising programs receive special pricing. Apply through our "Educational Partnerships" department.',
      },
      {
        question: 'What if I need to return an item that was part of a bundle?',
        answer: 'Bundle returns may require returning all items or accepting a prorated refund. Contact us for bundle return options.',
      },
      {
        question: 'Do you offer product engraving services?',
        answer: 'Personalized engraving is available for select items. Look for the "Add Engraving" option at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for sensitive skin?',
        answer: 'Dermatologist-tested and hypoallergenic products are marked with badges in their descriptions.',
      },
      {
        question: 'Can I purchase products for a film or theater production?',
        answer: 'Entertainment industry rentals and purchases qualify for special terms. Email production@example.com.',
      },
      {
        question: 'What if I need to return an item purchased with Bitcoin?',
        answer: 'Cryptocurrency purchases are refunded in store credit or to the original wallet address, minus transaction fees.',
      },
      {
        question: 'Do you offer product sterilization services?',
        answer: 'Medical equipment can be professionally sterilized before shipping. Add this service at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for high altitudes?',
        answer: 'Altitude specifications are listed in technical details for affected electronics and outdoor gear.',
      },
      {
        question: 'Can I purchase products for a research institution?',
        answer: 'Academic and research discounts are available. Apply through our "Scientific Purchasing" program.',
      },
      {
        question: 'What if I need to return an item that was custom made?',
        answer: 'Custom products may only be returned if defective. See individual product pages for custom item return policies.',
      },
      {
        question: 'Do you offer product testing certifications?',
        answer: 'Certificates of Analysis and testing documentation are available for qualifying products. Contact quality@example.com.',
      },
      {
        question: 'How do I check if a product is suitable for people with disabilities?',
        answer: 'ADA-compliant and accessible products are marked with universal design badges in their descriptions.',
      },
      {
        question: 'Can I purchase products for a government surplus sale?',
        answer: 'Surplus purchases require government credentials. Contact surplus@example.com for available lots.',
      },
      {
        question: 'What if I need to return an item purchased with rewards points?',
        answer: 'Returns using points will be refunded as points to your loyalty account.',
      },
      {
        question: 'Do you offer product embossing services?',
        answer: 'Custom embossing is available for leather goods and stationery. Look for personalization options at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for commercial vehicles?',
        answer: 'DOT-certified and commercial vehicle products are marked in their specifications.',
      },
      {
        question: 'Can I purchase products for a museum collection?',
        answer: 'Cultural institution purchases qualify for special terms. Email collections@example.com for curator pricing.',
      },
      {
        question: 'What if I need to return an item that was part of a subscription?',
        answer: 'Subscription returns may affect future shipments. Contact us before returning to adjust your subscription.',
      },
      {
        question: 'Do you offer product authentication services?',
        answer: 'Luxury items include certificates of authenticity. Third-party authentication can be added at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for industrial use?',
        answer: 'Industrial-grade products are marked with safety ratings in their technical specifications.',
      },
      {
        question: 'Can I purchase products for a film prop department?',
        answer: 'Prop masters receive special pricing. Apply through our "Entertainment Industry" purchasing portal.',
      },
      {
        question: 'What if I need to return an item purchased with a payment plan?',
        answer: 'Payment plan returns will adjust remaining payments. The refund amount depends on payments already made.',
      },
      {
        question: 'Do you offer product monogramming services?',
        answer: 'Monogramming is available for select apparel and linens. Add personalization at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for marine environments?',
        answer: 'Marine-grade products are marked with corrosion resistance ratings in their specifications.',
      },
      {
        question: 'Can I purchase products for a theater production?',
        answer: 'Performing arts organizations qualify for special pricing. Email productions@example.com for details.',
      },
      {
        question: 'What if I need to return an item that was part of a loyalty reward?',
        answer: 'Reward item returns may affect your points balance. Contact us for specific return policies on reward items.',
      },
      {
        question: 'Do you offer product waterproofing services?',
        answer: 'Waterproofing treatments can be added to select items at checkout. Look for "Weatherproofing" options.',
      },
      {
        question: 'How do I check if a product is suitable for food contact?',
        answer: 'FDA food contact compliance is listed in specifications for kitchen and food service products.',
      },
      {
        question: 'Can I purchase products for a university lab?',
        answer: 'Academic lab purchases qualify for educational pricing. Apply through our "Scientific Equipment" portal.',
      },
      {
        question: 'What if I need to return an item that was part of a gift set?',
        answer: 'Gift set returns may require returning all components. Contact us for set-specific return instructions.',
      },
      {
        question: 'Do you offer product laser engraving services?',
        answer: 'Precision laser engraving is available for metal and wood items. Add personalization at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for medical use?',
        answer: 'FDA-cleared medical devices are marked with their classification in product specifications.',
      },
      {
        question: 'Can I purchase products for a government research facility?',
        answer: 'Federal research purchases require facility credentials. Email research@example.com for government terms.',
      },
      {
        question: 'What if I need to return an item that was part of a limited edition?',
        answer: 'Limited edition items may have different return policies. Check the product page or contact us for details.',
      },
      {
        question: 'Do you offer product weatherproofing services?',
        answer: 'Weatherproofing treatments can be added to outdoor items. Look for "Weather Protection" at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for commercial cleaning?',
        answer: 'Commercial janitorial products are marked with usage ratings in their specifications.',
      },
      {
        question: 'Can I purchase products for a hospital system?',
        answer: 'Healthcare system purchasing requires facility credentials. Apply through our "Medical Procurement" portal.',
      },
      {
        question: 'What if I need to return an item that was personalized?',
        answer: 'Personalized items may only be returned if defective. See product pages for customization return policies.',
      },
      {
        question: 'Do you offer product powder coating services?',
        answer: 'Custom powder coating is available for select metal items. Contact sales@example.com for color options.',
      },
      {
        question: 'How do I check if a product is suitable for childcare facilities?',
        answer: 'Child-safe products are marked with age recommendations and safety certifications in their details.',
      },
      {
        question: 'Can I purchase products for a military base?',
        answer: 'Military procurement requires base credentials. Apply through our "Government Purchasing" system.',
      },
      {
        question: 'What if I need to return an item that was part of a VIP promotion?',
        answer: 'VIP items follow standard return policies unless otherwise noted in the promotion terms.',
      },
      {
        question: 'Do you offer product anodizing services?',
        answer: 'Metal anodizing is available for select components. Contact sales@example.com for custom finish options.',
      },
      {
        question: 'How do I check if a product is suitable for commercial gyms?',
        answer: 'Commercial fitness equipment is rated by usage cycles in product specifications.',
      },
      {
        question: 'Can I purchase products for a university bookstore?',
        answer: 'Campus store purchasing programs are available. Email bookstore@example.com for resale terms.',
      },
      {
        question: 'What if I need to return an item that was part of a product test?',
        answer: 'Product test returns have unique policies outlined in your testing agreement.',
      },
      {
        question: 'Do you offer product plating services?',
        answer: 'Metal plating (gold, nickel, etc.) is available for select items. Contact sales@example.com for options.',
      },
      {
        question: 'How do I check if a product is suitable for food service?',
        answer: 'NSF-certified food service products are marked in their descriptions and specifications.',
      },
      {
        question: 'Can I purchase products for a government auction?',
        answer: 'Auction purchases require government credentials. Contact surplus@example.com for available lots.',
      },
      {
        question: 'What if I need to return an item that was part of a product launch?',
        answer: 'Launch items follow standard return policies unless specified in the launch terms.',
      },
      {
        question: 'Do you offer product ceramic coating services?',
        answer: 'Ceramic coatings are available for select automotive and industrial items. Add at checkout.',
      },
      {
        question: 'How do I check if a product is suitable for dental offices?',
        answer: 'Dental-grade products are marked with relevant certifications in their specifications.',
      },
      {
        question: 'Can I purchase products for a school district?',
        answer: 'District-wide purchasing programs are available. Email education@example.com for volume pricing.',
      },
      {
        question: 'What if I need to return an item that was part of a beta test?',
        answer: 'Beta product returns follow the policies outlined in your testing agreement.',
      },
      {
        question: 'Do you offer product heat treating services?',
        answer: 'Metal heat treatment is available for select industrial components. Contact sales@example.com.',
      },
      {
        question: 'How do I check if a product is suitable for veterinary use?',
        answer: 'Veterinary-grade products are marked with animal safety certifications in their details.',
      },
      {
        question: 'Can I purchase products for a government surplus auction?',
        answer: 'Surplus auction purchases require government credentials. Contact gsa@example.com for available lots.',
      },
      {
        question: 'What if I need to return an item that was part of an influencer collaboration?',
        answer: 'Collaboration items follow standard return policies unless noted in the promotion terms.',
      },
      {
        question: 'Do you offer product sandblasting services?',
        answer: 'Custom sandblasting is available for select metal items. Contact sales@example.com for finish options.',
      },
      {
        question: 'How do I check if a product is suitable for pharmaceutical use?',
        answer: 'Pharmaceutical-grade products are marked with USP or other relevant certifications.',
      },
      {
        question: 'Can I purchase products for a university research lab?',
        answer: 'Academic research purchases qualify for special pricing. Apply through our "Lab Equipment" portal.',
      },
      {
        question: 'What if I need to return an item that was part of a product recall?',
        answer: 'Recalled items qualify for free returns and full refunds. Check our recalls page for current notices.',
      },    
      
        {
          question: 'How can I track my order?',
          answer: 'You can track your order by logging into your account or using the tracking link in your confirmation email.'
        },
        {
          question: 'Do you offer gift receipts?',
          answer: 'Yes, you can select a gift receipt option at checkout.'
        },
        {
          question: 'Can I change my shipping address after placing an order?',
          answer: 'If your order has not been processed, contact customer support immediately to update the address.'
        },
        {
          question: 'What happens if my package is lost in transit?',
          answer: 'If your package is lost, contact customer support, and we will assist with a replacement or refund.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to select international locations. Check our shipping policy for more details.'
        },
        {
          question: 'How long does it take to process a refund?',
          answer: 'Refunds are typically processed within 5-7 business days after we receive your return.'
        },
        {
          question: 'Can I cancel my order after it has shipped?',
          answer: 'No, once an order has shipped, it cannot be canceled. You may initiate a return once you receive it.'
        },
        {
          question: 'Do you offer free shipping?',
          answer: 'Yes, we offer free standard shipping on orders over a certain amount.'
        },
        {
          question: 'Can I pick up my order in-store?',
          answer: 'Currently, we do not offer in-store pickup. All orders are shipped directly to you.'
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach customer support via email, phone, or live chat during business hours.'
        },
        {
          question: 'Are all products covered under warranty?',
          answer: 'Warranty coverage varies by product. Check the product page for specific warranty details.'
        },
        {
          question: 'What should I do if I receive a damaged package?',
          answer: 'Take photos of the damaged package and contact customer support immediately for assistance.'
        },
        {
          question: 'Can I request a sample before purchasing?',
          answer: 'We do not offer samples for all products, but some may have sample options available.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept credit cards, PayPal, Apple Pay, Google Pay, and other secure payment methods.'
        },
        {
          question: 'Do you have a physical store?',
          answer: 'No, we are an online-only store and do not have a physical location.'
        },
        {
          question: 'How do I find my order history?',
          answer: 'Log into your account and navigate to the "Orders" section to view your order history.'
        },
        {
          question: 'Can I return an item if I no longer want it?',
          answer: 'Yes, we accept returns within our specified return period as long as the item is unused and in its original packaging.'
        },
        {
          question: 'How do I update my email address on my account?',
          answer: 'Go to your account settings and update your email under the profile section.'
        },
        {
          question: 'Do you offer store credit for returns?',
          answer: 'Yes, you can choose store credit instead of a refund when returning an item.'
        },
        {
          question: 'Can I buy a product as a gift for someone else?',
          answer: 'Yes, you can specify a different shipping address and include a gift message during checkout.'
        },
        {
          question: 'How do I redeem a discount code?',
          answer: 'Enter the discount code at checkout in the "Promo Code" field to apply it to your order.'
        },
        {
          question: 'Do you offer price matching?',
          answer: 'We do not currently offer price matching, but you can check our ongoing sales and promotions for discounts.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No, we offer full transparency on pricing, including shipping and taxes, before checkout.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button on our homepage and fill out the registration form to create your account.'
        },
        {
          question: 'Can I change or add items to my order after it’s been placed?',
          answer: 'Once an order is confirmed, we cannot modify it. However, you can cancel the order and place a new one.'
        },
        {
          question: 'Can I use multiple discount codes on one order?',
          answer: 'No, only one discount code can be applied per order.'
        },
        {
          question: 'How do I reset my password?',
          answer: 'Click on the "Forgot Password" link on the login page and follow the instructions to reset it.'
        },
        {
          question: 'Can I use my credit card in another country?',
          answer: 'Yes, as long as your credit card is internationally accepted, you can use it for international orders.'
        },
        {
          question: 'Do you offer a price guarantee?',
          answer: 'We guarantee the lowest prices available on our site. If you find a lower price elsewhere, contact us.'
        },
        {
          question: 'What happens if I forget to apply a discount code?',
          answer: 'Unfortunately, you cannot apply a discount code after the order has been placed.'
        },
        {
          question: 'What is your policy on backorders?',
          answer: 'If an item is out of stock, you can choose to be notified when it’s back in stock or get a full refund.'
        },
        {
          question: 'Do you offer a loyalty program?',
          answer: 'Yes, we offer a loyalty program where you can earn points with every purchase and redeem them for discounts.'
        },
        {
          question: 'How can I cancel my subscription?',
          answer: 'You can cancel your subscription by logging into your account and managing your subscription preferences.'
        },
        {
          question: 'How do I subscribe to your newsletter?',
          answer: 'You can subscribe by entering your email at the bottom of our homepage or during checkout.'
        },
        {
          question: 'Do you offer bulk discounts?',
          answer: 'Yes, we offer bulk discounts for large orders. Contact our customer support team for more details.'
        },
        {
          question: 'What is your return policy?',
          answer: 'We accept returns within 30 days of purchase, as long as the product is unused and in its original packaging.'
        },
        {
          question: 'How do I report an issue with my order?',
          answer: 'Contact our customer support team with your order number and details of the issue, and we’ll assist you.'
        },
        {
          question: 'Do you accept gift cards?',
          answer: 'Yes, we accept gift cards as a payment method during checkout.'
        },
        {
          question: 'Can I pre-order a product?',
          answer: 'Yes, you can pre-order select items on our website, and we’ll notify you when they’re available.'
        },
        {
          question: 'Do you offer free returns?',
          answer: 'We offer free returns on certain items. Check our return policy for more details.'
        },
        {
          question: 'How do I leave a review for a product?',
          answer: 'You can leave a review on the product page by clicking the “Write a Review” button.'
        },
        {
          question: 'What should I do if I received the wrong item?',
          answer: 'Contact customer support, and we will send you the correct item at no extra charge.'
        },
        {
          question: 'How can I update my shipping information?',
          answer: 'Log into your account and update your shipping address in the "Address" section.'
        },
        {
          question: 'What if I have an allergic reaction to a product?',
          answer: 'If you experience an allergic reaction, discontinue use immediately and contact a healthcare provider. Report the issue to customer support.'
        },
        {
          question: 'Can I gift wrap my order?',
          answer: 'Yes, you can select gift wrapping during checkout for an additional fee.'
        },
        {
          question: 'Do you charge sales tax?',
          answer: 'Sales tax is calculated based on your shipping address and local tax laws.'
        },
        {
          question: 'Can I purchase items without creating an account?',
          answer: 'Yes, you can check out as a guest without creating an account.'
        },
        {
          question: 'Do you offer express shipping?',
          answer: 'Yes, we offer expedited shipping options at checkout for faster delivery.'
        },
        {
          question: 'What is your privacy policy?',
          answer: 'Your privacy is important to us. Please refer to our privacy policy for information on how we handle your data.'
        },
        {
          question: 'What happens if my payment is declined?',
          answer: 'If your payment is declined, please check your payment details and try again. If the issue persists, contact your payment provider.'
        },
        {
          question: 'Can I apply a discount to my subscription?',
          answer: 'Currently, discounts cannot be applied to subscriptions.'
        },
        {
          question: 'Can I request a refund without returning the product?',
          answer: 'Refunds are typically processed once we receive the returned product. Contact customer support for specific situations.'
        },
        {
          question: 'How do I know if an item is in stock?',
          answer: 'Product availability is listed on the product page. If it’s out of stock, you can sign up for restock notifications.'
        },
        {
          question: 'Do you have a price drop alert?',
          answer: 'Yes, you can set a price drop alert on the product page to be notified when the price changes.'
        },
        {
          question: 'How long will my return take to process?',
          answer: 'Returns are processed within 5-7 business days after we receive the returned item.'
        },
        {
          question: 'Can I exchange an item for a different size or color?',
          answer: 'Yes, exchanges are accepted based on availability. Please contact customer support to initiate an exchange.'
        },
        {
          question: 'Do you offer seasonal discounts?',
          answer: 'Yes, we offer seasonal discounts and promotions. Keep an eye on our website or subscribe to our newsletter for updates.'
        },
        {
          question: 'What is your policy on damaged goods?',
          answer: 'If your item arrives damaged, please contact customer support within 48 hours for a resolution.'
        },
        {
          question: 'How do I unsubscribe from your emails?',
          answer: 'You can unsubscribe from our emails by clicking the "unsubscribe" link at the bottom of any email.'
        },
        {
          question: 'Are your products authentic?',
          answer: 'Yes, all products sold on our website are 100% authentic and sourced from authorized manufacturers.'
        },
        {
          question: 'How do I cancel my order?',
          answer: 'To cancel your order, contact customer support immediately after placing the order. Cancellations can only be made before shipping.'
        },
        {
          question: 'Do you offer a satisfaction guarantee?',
          answer: 'Yes, we offer a satisfaction guarantee. If you are not satisfied with your purchase, please contact us for a return or exchange.'
        },
        {
          question: 'What should I do if I receive an incomplete order?',
          answer: 'If you receive an incomplete order, contact customer support immediately with your order number for assistance.'
        }
 
        
];


const stringSimilarityThreshold = 0.6; // 60% similarity

// Function to find the best match using string similarity
export function findBestMatch(userQuestion: string): string | null {
  const questions = knowledgeBase.map((entry) => entry.question);
  const matches = stringSimilarity.findBestMatch(userQuestion, questions);

  const bestMatch = matches.bestMatch;
  if (bestMatch.rating >= stringSimilarityThreshold) {
    const matchedQuestion = knowledgeBase.find((entry) => entry.question === bestMatch.target);
    return matchedQuestion ? matchedQuestion.answer : null;
  }

  return null;
}
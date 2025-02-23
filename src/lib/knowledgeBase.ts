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
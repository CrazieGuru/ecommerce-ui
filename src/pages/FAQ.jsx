import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      category: "Shopping",
      questions: [
        { q: "How do I place an order?", a: "Browse our products, add them to your cart, and proceed to checkout. You'll need to create an account or login to complete your purchase." },
        { q: "What payment methods do you accept?", a: "We accept credit cards (Visa, MasterCard, Amex), PayPal, Apple Pay, and Google Pay." },
        { q: "Can I modify my order after placing it?", a: "If your order hasn't been shipped yet, contact us within 1 hour and we can modify it for you." },
        { q: "Do you offer bulk discounts?", a: "Yes! Orders of 10+ items get 15% discount. Contact us for larger orders." },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        { q: "How long does shipping take?", a: "Standard shipping: 5-7 business days. Express: 2-3 business days. Free shipping on orders over $100." },
        { q: "Do you ship internationally?", a: "Yes, we ship to 150+ countries. International shipping times vary from 7-21 business days." },
        { q: "Can I track my order?", a: "Yes! You'll receive a tracking number via email once your order ships. Track it on our website anytime." },
        { q: "What if my package gets damaged?", a: "Report damage within 48 hours of delivery. We'll send a replacement or issue a full refund." },
      ],
    },
    {
      category: "Returns & Refunds",
      questions: [
        { q: "What's your return policy?", a: "30-day returns on all items. Products must be in original condition with packaging." },
        { q: "How do I start a return?", a: "Go to your order history, select the item, and click 'Return'. Print the label and ship it back." },
        { q: "When will I get my refund?", a: "Once we receive and inspect your return, refunds are processed within 5-7 business days." },
        { q: "Do you accept exchanges?", a: "Yes! If you want a different size or color, we can exchange it free of charge." },
      ],
    },
    {
      category: "Products & Warranty",
      questions: [
        { q: "Are all products authentic?", a: "100% authentic! We only buy from authorized distributors and official manufacturers." },
        { q: "Do products come with warranty?", a: "Yes, all electronics come with manufacturer's warranty. Details included with your order." },
        { q: "Can I return opened products?", a: "Yes, as long as they're in original condition and within 30 days of purchase." },
        { q: "How do I know which product to buy?", a: "Check detailed specs, reviews, and comparison tools on each product page." },
      ],
    },
    {
      category: "Account & Security",
      questions: [
        { q: "Is my information secure?", a: "Yes! We use 256-bit SSL encryption and PCI compliance. Your data is never shared with third parties." },
        { q: "How do I reset my password?", a: "Click 'Forgot Password' on the login page, enter your email, and follow the reset link." },
        { q: "Can I delete my account?", a: "Yes, contact support and we can delete your account and all associated data." },
        { q: "Why was my order cancelled?", a: "Common reasons: payment issue, address verification, or stock unavailable. Check your email for details." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">❓ Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions about shopping at TechHub</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                activeIndex === idx
                  ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-teal-600"
              }`}
            >
              {faq.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs[activeIndex].questions.map((item, idx) => (
            <details
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-md transition group cursor-pointer"
            >
              <summary className="flex items-center justify-between px-6 py-4 font-semibold text-gray-900 hover:text-teal-600 transition list-none">
                <span>{item.q}</span>
                <span className="text-2xl group-open:rotate-180 transition">▼</span>
              </summary>
              <div className="px-6 pb-4 text-gray-600 border-t border-gray-200">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">Can't find what you're looking for? Our support team is here to help!</p>
          <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition">
            Contact Support 📧
          </button>
        </div>
      </div>
    </div>
  );
}

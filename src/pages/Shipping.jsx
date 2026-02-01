export default function Shipping() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Information</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🚚 Shipping Methods</h2>
            <div className="space-y-4 mt-4">
              <div className="border-l-4 border-teal-600 pl-4">
                <h3 className="font-bold text-gray-900">Standard Shipping (5-7 business days)</h3>
                <p>Ground delivery for most items across the US</p>
                <p className="text-teal-600 font-bold mt-1">FREE on orders over $100</p>
              </div>
              <div className="border-l-4 border-cyan-600 pl-4">
                <h3 className="font-bold text-gray-900">Express Shipping (2-3 business days)</h3>
                <p>Faster delivery for time-sensitive orders</p>
                <p className="text-cyan-600 font-bold mt-1">$15.99</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold text-gray-900">Overnight Shipping (1 business day)</h3>
                <p>Guaranteed next-day delivery before 10:30 AM</p>
                <p className="text-blue-600 font-bold mt-1">$29.99</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="font-bold text-gray-900">International Shipping (7-21 business days)</h3>
                <p>Worldwide delivery available to 150+ countries</p>
                <p className="text-orange-600 font-bold mt-1">Calculated at checkout</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">📍 Coverage Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">🇺🇸 United States</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>All 50 states covered</li>
                  <li>Alaska/Hawaii: 2-3 extra days</li>
                  <li>No extra charge</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">🌍 International</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>150+ countries</li>
                  <li>Customs handled</li>
                  <li>Tracking provided</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">📦 Order Processing</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-2xl">1️⃣</span>
                <div>
                  <h3 className="font-bold text-gray-900">Order Placed</h3>
                  <p className="text-sm text-gray-600">Confirmation email sent immediately</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">2️⃣</span>
                <div>
                  <h3 className="font-bold text-gray-900">Processing (24-48 hours)</h3>
                  <p className="text-sm text-gray-600">We prepare and quality-check your items</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">3️⃣</span>
                <div>
                  <h3 className="font-bold text-gray-900">Shipped</h3>
                  <p className="text-sm text-gray-600">Tracking number sent via email</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">4️⃣</span>
                <div>
                  <h3 className="font-bold text-gray-900">In Transit</h3>
                  <p className="text-sm text-gray-600">Real-time tracking available</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl">5️⃣</span>
                <div>
                  <h3 className="font-bold text-gray-900">Delivered</h3>
                  <p className="text-sm text-gray-600">Delivery confirmation email sent</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🎯 Shipping Guarantees</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All packages include tracking number</li>
              <li>Free insurance on all orders over $100</li>
              <li>Signature required on high-value items</li>
              <li>Fully insured against loss or damage</li>
              <li>Eco-friendly, recyclable packaging</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">❓ Shipping FAQs</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900">Q: When will my order arrive?</p>
                <p className="text-gray-600 mt-1">
                  A: Delivery time depends on your shipping method and location. Standard shipping takes 5-7 business
                  days. You'll receive tracking information once shipped.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: Can I change my shipping address?</p>
                <p className="text-gray-600 mt-1">
                  A: Yes! If your order hasn't shipped yet, contact us within 1 hour to change the address.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: Do you offer PO Box delivery?</p>
                <p className="text-gray-600 mt-1">
                  A: No, we only ship to physical street addresses for security reasons.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: What if my package is lost or damaged?</p>
                <p className="text-gray-600 mt-1">
                  A: We fully insure all packages. Report any issues within 48 hours and we'll send a replacement.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: Do you ship on weekends?</p>
                <p className="text-gray-600 mt-1">
                  A: No, we ship Monday-Friday. Orders placed on weekends process on Monday.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: How do I track my order?</p>
                <p className="text-gray-600 mt-1">
                  A: You'll receive a tracking number via email. Visit our Track Order page to monitor delivery in
                  real-time.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🛡️ Shipping Protection</h2>
            <p>
              All TechHub orders are fully insured and protected. If your package doesn't arrive within the expected
              delivery window, we'll investigate and either redeliver or issue a full refund. Your satisfaction is
              guaranteed!
            </p>
          </section>

          <p className="text-gray-600 text-sm mt-8">Last updated: February 1, 2025</p>
        </div>
      </div>
    </div>
  );
}

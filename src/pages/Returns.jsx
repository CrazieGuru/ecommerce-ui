export default function Returns() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns & Exchange Policy</h1>
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">📋 Our Returns Policy</h2>
            <p>
              We want you to be completely satisfied with your TechHub purchase. If you're not happy with your order,
              you can return it within 30 days of delivery for a full refund or exchange.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">✅ What Can Be Returned?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Electronics and gadgets (unopened or in original condition)</li>
              <li>Accessories (with original packaging)</li>
              <li>Items purchased within the last 30 days</li>
              <li>Items with receipt or order confirmation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">❌ What Cannot Be Returned?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Items purchased more than 30 days ago</li>
              <li>Items without original packaging or manuals</li>
              <li>Damaged items (unless damage is our fault)</li>
              <li>Items purchased as "Final Sale"</li>
              <li>Custom or personalized items</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">📦 Return Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Log in to your account and go to "My Orders"</li>
              <li>Find the order you want to return</li>
              <li>Click "Return Item" and select the reason</li>
              <li>Print the prepaid shipping label</li>
              <li>Pack the item securely with the label</li>
              <li>Drop off at any shipping location</li>
              <li>Receive refund within 5-7 business days after we receive it</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">💱 Exchange Process</h2>
            <p>
              If you want to exchange an item for a different size, color, or model, the exchange is completely free!
              Simply start a return and select "Exchange" instead of "Refund". We'll send the new item while processing
              your return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">💰 Refund Timeline</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Initiate return: Within 30 days of delivery</li>
              <li>Ship item back: We'll give you 2 weeks</li>
              <li>We receive item: Processing begins</li>
              <li>Item inspection: 2-3 business days</li>
              <li>Refund issued: 5-7 business days after approval</li>
              <li>Total time: Usually 2-3 weeks from start to finish</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">🚚 Shipping & Handling</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Free return shipping on all returns</li>
              <li>We provide a prepaid shipping label</li>
              <li>Ship via FedEx, UPS, or USPS</li>
              <li>Track your return with the provided number</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">❓ Common Questions</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900">Q: Can I return opened items?</p>
                <p className="text-gray-600 mt-1">
                  A: Yes, as long as the item works properly and is in original condition with all packaging and
                  manuals.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: What if I don't have the original packaging?</p>
                <p className="text-gray-600 mt-1">
                  A: You may still return the item, but we might deduct a restocking fee from your refund.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: Can I get store credit instead of a refund?</p>
                <p className="text-gray-600 mt-1">
                  A: Yes! Store credit receives refunds faster (2-3 business days) and is often preferred.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Q: What about defective items?</p>
                <p className="text-gray-600 mt-1">
                  A: Defective items can be returned anytime within the manufacturer's warranty period for free
                  replacement or refund.
                </p>
              </div>
            </div>
          </section>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
            <p className="text-blue-700">
              💡 <strong>Pro Tip:</strong> Keep your order confirmation email and take photos of the item before
              returning it. This helps us process your return faster!
            </p>
          </div>

          <p className="text-gray-600 text-sm mt-8">Last updated: February 1, 2025</p>
        </div>
      </div>
    </div>
  );
}

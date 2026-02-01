import { useState } from "react";

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [order, setOrder] = useState(null);
  const [searched, setSearched] = useState(false);

  const mockOrders = {
    "ORD-2025-001": {
      id: "ORD-2025-001",
      date: "Jan 28, 2025",
      total: 449.99,
      status: "delivered",
      items: [
        { name: "Premium Wireless Headphones", price: 199, qty: 1 },
        { name: "USB-C Hub Multiport", price: 59, qty: 2 },
      ],
      timeline: [
        { status: "Order Placed", date: "Jan 28, 2025", icon: "📦", completed: true },
        { status: "Processing", date: "Jan 28, 2025", icon: "⚙️", completed: true },
        { status: "Shipped", date: "Jan 29, 2025", icon: "📤", completed: true },
        { status: "In Transit", date: "Jan 30-31, 2025", icon: "🚚", completed: true },
        { status: "Delivered", date: "Feb 1, 2025", icon: "✓", completed: true },
      ],
      carrier: "FedEx",
      carrierTracking: "794617927649",
    },
    "ORD-2025-002": {
      id: "ORD-2025-002",
      date: "Jan 30, 2025",
      total: 298.99,
      status: "in-transit",
      items: [
        { name: "Smart Watch Pro", price: 299, qty: 1 },
      ],
      timeline: [
        { status: "Order Placed", date: "Jan 30, 2025", icon: "📦", completed: true },
        { status: "Processing", date: "Jan 30, 2025", icon: "⚙️", completed: true },
        { status: "Shipped", date: "Jan 31, 2025", icon: "📤", completed: true },
        { status: "In Transit", date: "Feb 1-3, 2025", icon: "🚚", completed: true },
        { status: "Delivered", date: "Coming Feb 4, 2025", icon: "✓", completed: false },
      ],
      carrier: "UPS",
      carrierTracking: "1Z999AA10123456784",
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const found = mockOrders[trackingNumber];
    if (found) {
      setOrder(found);
    } else {
      setOrder(null);
    }
    setSearched(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "text-green-600";
      case "in-transit":
        return "text-blue-600";
      case "processing":
        return "text-yellow-600";
      case "cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100";
      case "in-transit":
        return "bg-blue-100";
      case "processing":
        return "bg-yellow-100";
      case "cancelled":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">📦 Track Your Order</h1>
          <p className="text-gray-600 mt-2">Enter your tracking number to see the status</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value.toUpperCase())}
              placeholder="Enter tracking number (e.g., ORD-2025-001)"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
            >
              Search
            </button>
          </form>
          <div className="mt-4 text-sm text-gray-600">
            Demo tracking numbers: <span className="font-mono font-bold">ORD-2025-001</span> (Delivered) or{" "}
            <span className="font-mono font-bold">ORD-2025-002</span> (In Transit)
          </div>
        </div>

        {/* Results */}
        {searched && !order && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">❌</div>
            <h2 className="text-xl font-bold text-red-700 mb-2">Order not found</h2>
            <p className="text-red-600">Please check your tracking number and try again</p>
          </div>
        )}

        {order && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Order {order.id}</h2>
                  <p className="text-gray-600">Placed on {order.date}</p>
                </div>
                <div className={`text-center p-4 rounded-lg ${getStatusBg(order.status)}`}>
                  <p className={`text-sm font-bold uppercase ${getStatusColor(order.status)}`}>
                    {order.status === "delivered"
                      ? "Delivered"
                      : order.status === "in-transit"
                      ? "In Transit"
                      : order.status === "processing"
                      ? "Processing"
                      : "Cancelled"}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="font-bold text-gray-900 mb-4">Items</h3>
                <div className="space-y-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.name} (×{item.qty})</span>
                      <span className="font-semibold text-gray-900">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span className="text-teal-600">${order.total.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-3">Shipping Info</h3>
                <div className="flex gap-8">
                  <div>
                    <p className="text-sm text-gray-600">Carrier</p>
                    <p className="font-semibold text-gray-900">{order.carrier}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tracking Number</p>
                    <p className="font-mono font-semibold text-gray-900">{order.carrierTracking}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Delivery Timeline</h3>
              <div className="space-y-6">
                {order.timeline.map((event, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                          event.completed
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {event.icon}
                      </div>
                      {idx < order.timeline.length - 1 && (
                        <div
                          className={`w-1 h-12 ${
                            event.completed ? "bg-green-300" : "bg-gray-300"
                          }`}
                        ></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h4
                        className={`text-lg font-bold ${
                          event.completed ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {event.status}
                      </h4>
                      <p
                        className={`text-sm ${
                          event.completed ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                ❓ Contact Support
              </button>
              <button className="py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                🔄 Return Order
              </button>
              <button className="py-3 border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition">
                📧 Email Details
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

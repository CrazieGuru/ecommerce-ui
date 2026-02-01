import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Carousel from "../components/Carousel";

export default function Dashboard() {
  const { user, openLoginModal } = useAuth();
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  // Categories with 10 products each
  const categoriesData = [
    {
      name: "Audio",
      icon: "🎧",
      products: [
        { id: 101, name: "Premium Wireless Headphones", price: 199, icon: "🎧", rating: 4.8 },
        { id: 102, name: "Bluetooth Speaker Mini", price: 49, icon: "🔊", rating: 4.6 },
        { id: 103, name: "Noise Canceling Earbuds", price: 129, icon: "🎧", rating: 4.9 },
        { id: 104, name: "Studio Monitor Speakers", price: 299, icon: "📻", rating: 4.7 },
        { id: 105, name: "Wireless Earbuds Pro", price: 179, icon: "🎧", rating: 4.8 },
        { id: 106, name: "Portable Audio System", price: 399, icon: "🔊", rating: 4.9 },
        { id: 107, name: "Gaming Headset RGB", price: 149, icon: "🎧", rating: 4.7 },
        { id: 108, name: "Vintage Vinyl Player", price: 89, icon: "📀", rating: 4.5 },
        { id: 109, name: "Microphone USB Pro", price: 159, icon: "🎤", rating: 4.8 },
        { id: 110, name: "Audio Interface Studio", price: 249, icon: "🎙️", rating: 4.9 },
      ],
    },
    {
      name: "Wearables",
      icon: "⌚",
      products: [
        { id: 201, name: "Smart Watch Pro", price: 299, icon: "⌚", rating: 4.9 },
        { id: 202, name: "Fitness Tracker Band", price: 79, icon: "⌚", rating: 4.7 },
        { id: 203, name: "Smart Ring Health", price: 199, icon: "💍", rating: 4.8 },
        { id: 204, name: "GPS Sports Watch", price: 249, icon: "⌚", rating: 4.6 },
        { id: 205, name: "Smart Glasses AR", price: 399, icon: "👓", rating: 4.9 },
        { id: 206, name: "Activity Monitor Band", price: 99, icon: "⌚", rating: 4.5 },
        { id: 207, name: "Digital Wrist Pedometer", price: 59, icon: "⌚", rating: 4.4 },
        { id: 208, name: "Sleep Tracker Band", price: 129, icon: "⌚", rating: 4.8 },
        { id: 209, name: "Heart Rate Monitor Pro", path: 149, icon: "❤️", rating: 4.7 },
        { id: 210, name: "Smart Bracelet Lite", price: 89, icon: "⌚", rating: 4.6 },
      ],
    },
    {
      name: "Accessories",
      icon: "🔌",
      products: [
        { id: 301, name: "USB-C Hub Multiport", price: 59, icon: "🔌", rating: 4.8 },
        { id: 302, name: "Phone Mount Desk", price: 29, icon: "📱", rating: 4.6 },
        { id: 303, name: "Charging Cable Set", price: 39, icon: "⚡", rating: 4.9 },
        { id: 304, name: "Power Bank 20000mAh", price: 49, icon: "🔋", rating: 4.7 },
        { id: 305, name: "USB Splitter Hub", price: 44, icon: "🔌", rating: 4.5 },
        { id: 306, name: "HDMI Cable 4K", price: 19, icon: "🎬", rating: 4.8 },
        { id: 307, name: "Docking Station Pro", price: 89, icon: "🖥️", rating: 4.9 },
        { id: 308, name: "Wireless Charger Pad", price: 34, icon: "⚡", rating: 4.7 },
        { id: 309, name: "Phone Screen Protector", price: 12, icon: "🛡️", rating: 4.6 },
        { id: 310, name: "Adapter Converter Kit", price: 25, icon: "🔌", rating: 4.8 },
      ],
    },
    {
      name: "Storage",
      icon: "💾",
      products: [
        { id: 401, name: "Portable SSD 1TB", price: 129, icon: "💾", rating: 4.9 },
        { id: 402, name: "External HDD 4TB", price: 79, icon: "💿", rating: 4.7 },
        { id: 403, name: "Flash Drive USB 128GB", price: 24, icon: "📀", rating: 4.8 },
        { id: 404, name: "Memory Card SD 256GB", price: 54, icon: "🎞️", rating: 4.6 },
        { id: 405, name: "SSD M.2 2TB NVMe", price: 179, icon: "💾", rating: 4.9 },
        { id: 406, name: "Cloud Storage 100GB", price: 99, icon: "☁️", rating: 4.8 },
        { id: 407, name: "Hard Drive Desktop 8TB", price: 139, icon: "💿", rating: 4.5 },
        { id: 408, name: "Portable SSD 2TB", price: 249, icon: "💾", rating: 4.9 },
        { id: 409, name: "Micro SD Card 512GB", price: 64, icon: "🎞️", rating: 4.7 },
        { id: 410, name: "USB 3.0 Flash Drive 64GB", price: 19, icon: "📀", rating: 4.8 },
      ],
    },
    {
      name: "Peripherals",
      icon: "⌨️",
      products: [
        { id: 501, name: "Mechanical Keyboard RGB", price: 149, icon: "⌨️", rating: 4.8 },
        { id: 502, name: "Wireless Mouse Ultra", price: 39, icon: "🖱️", rating: 4.9 },
        { id: 503, name: "Gaming Mouse Pad", price: 29, icon: "🖱️", rating: 4.7 },
        { id: 504, name: "Keyboard Switch Tester", price: 44, icon: "⌨️", rating: 4.6 },
        { id: 505, name: "Ergonomic Keyboard Pro", price: 119, icon: "⌨️", rating: 4.8 },
        { id: 506, name: "Vertical Mouse Ergonomic", price: 59, icon: "🖱️", rating: 4.7 },
        { id: 507, name: "XXL Mouse Pad Extended", price: 34, icon: "🖱️", rating: 4.9 },
        { id: 508, name: "Touchpad Laptop", price: 79, icon: "🖐️", rating: 4.5 },
        { id: 509, name: "Gaming Keyboard Mechanical", price: 169, icon: "⌨️", rating: 4.9 },
        { id: 510, name: "Wireless Keyboard Silent", price: 49, icon: "⌨️", rating: 4.8 },
      ],
    },
    {
      name: "Camera",
      icon: "📷",
      products: [
        { id: 601, name: "4K Webcam Pro", price: 159, icon: "📷", rating: 4.9 },
        { id: 602, name: "USB Camera 2K HD", price: 79, icon: "📷", rating: 4.7 },
        { id: 603, name: "Action Camera 8K", price: 399, icon: "📹", rating: 4.9 },
        { id: 604, name: "Night Vision Camera", price: 199, icon: "🌙", rating: 4.8 },
        { id: 605, name: "Ring Light LED Pro", price: 89, icon: "💡", rating: 4.6 },
        { id: 606, name: "Tripod Camera Stand", price: 44, icon: "📸", rating: 4.8 },
        { id: 607, name: "Camera Bag Pro", price: 64, icon: "🎒", rating: 4.7 },
        { id: 608, name: "Gimbal Stabilizer 3D", price: 299, icon: "🎬", rating: 4.9 },
        { id: 609, name: "Lens Cleaning Kit", price: 24, icon: "🧹", rating: 4.5 },
        { id: 610, name: "360 Degree Camera", price: 249, icon: "📷", rating: 4.8 },
      ],
    },
    {
      name: "Lighting",
      icon: "💡",
      products: [
        { id: 701, name: "Smart RGB Light Bulb", price: 29, icon: "💡", rating: 4.8 },
        { id: 702, name: "LED Desk Lamp Pro", price: 59, icon: "🔦", rating: 4.7 },
        { id: 703, name: "Motion Sensor Light", price: 44, icon: "💡", rating: 4.6 },
        { id: 704, name: "Neon Light Sign", price: 89, icon: "🌈", rating: 4.9 },
        { id: 705, name: "Smart Light Strips", price: 49, icon: "✨", rating: 4.8 },
        { id: 706, name: "Solar Outdoor Light", price: 34, icon: "☀️", rating: 4.5 },
        { id: 707, name: "Hanging String Lights", price: 24, icon: "✨", rating: 4.7 },
        { id: 708, name: "Night Light USB", price: 19, icon: "🌙", rating: 4.8 },
        { id: 709, name: "Flood Light LED", price: 79, icon: "🔆", rating: 4.9 },
        { id: 710, name: "Ambient Light Projection", price: 69, icon: "🎆", rating: 4.8 },
      ],
    },
  ];

  // Helper function to add product to cart
  const handleAddToCart = (product) => {
    if (!user) {
      openLoginModal(`Please login to add "${product.name}" to your cart!`);
    } else {
      addToCart({ id: product.id, name: product.name, price: product.price });
      setAddedProductId(product.id);
      setTimeout(() => setAddedProductId(null), 2000);
    }
  };

  // Product Card Component
  const ProductCard = ({ product }) => (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 text-center">
        <div className="text-5xl mb-3">{product.icon}</div>
        <h3 className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
        <div className="flex items-center justify-center gap-1 mb-3">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>
        <p className="text-2xl font-bold text-teal-600 mb-3">${product.price}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className={`w-full text-white py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm ${
            addedProductId === product.id
              ? "bg-gradient-to-r from-green-600 to-green-600"
              : "bg-gradient-to-r from-teal-600 to-cyan-600"
          }`}
        >
          {addedProductId === product.id ? "✓ Added" : "Add to Cart"}
        </button>
      </div>
    </div>
  );

  // Testimonials
  const testimonials = [
    { name: "John Doe", rating: 5, text: "Excellent products and fast shipping!", image: "👨" },
    { name: "Sarah Smith", rating: 5, text: "Best quality items at competitive prices", image: "👩" },
    { name: "Mike Johnson", rating: 5, text: "Great customer service and support!", image: "👨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">Welcome to TechHub! 🌟</h1>
          {user && <p className="text-cyan-100 mt-2">Hi {user?.email?.split("@")[0]}, ready to discover amazing tech?</p>}
          {!user && <p className="text-cyan-100 mt-2">Discover cutting-edge technology and exclusive deals today</p>}
        </div>
      </div>

      {/* Carousel Banner */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Carousel />
      </div>

      {/* Quick Stats Banner */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-teal-600">50K+</div>
            <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-cyan-600">10K+</div>
            <p className="text-sm text-gray-600 mt-1">Products</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <p className="text-sm text-gray-600 mt-1">Uptime</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-teal-50 border border-indigo-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-indigo-600">24/7</div>
            <p className="text-sm text-gray-600 mt-1">Support</p>
          </div>
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-2xl font-bold mb-2">Free Shipping</h3>
            <p className="text-teal-100">On orders above $100</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">↩️</div>
            <h3 className="text-2xl font-bold mb-2">Easy Returns</h3>
            <p className="text-cyan-100">30-day return policy</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-2">Secure Payment</h3>
            <p className="text-blue-100">100% safe transactions</p>
          </div>
        </div>
      </div>

      {/* Categories with 10 Products Each */}
      {categoriesData.map((category) => (
        <div key={category.name} className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{category.icon} {category.name}</h2>
              <p className="text-gray-600 mt-2">Explore our collection of {category.name.toLowerCase()}</p>
            </div>
            <Link
              to={`/search?category=${category.name}`}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {category.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}

      {/* Limited Time Offer Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-12 px-6 my-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2">⏰ Limited Time Offer</p>
          <h2 className="text-4xl font-bold mb-4">Flash Sale: 48 Hours Only!</h2>
          <p className="text-xl text-yellow-50 mb-6">Use code FLASH50 for extra 10% discount on everything</p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-yellow-50 transition shadow-lg hover:shadow-xl"
          >
            Browse Sale Items →
          </Link>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💬 What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{testimonial.image}</div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-12 px-6 my-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">📧 Subscribe to Our Newsletter</h2>
          <p className="text-teal-100 mb-6">Get exclusive deals, new arrivals, and special offers delivered to your inbox</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button className="px-8 py-3 bg-white text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">✨ Why Choose TechHub?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Ship in 24 hours</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Best Price</h3>
            <p className="text-gray-600">Competitive pricing</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600">24/7 assistance</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">100% authentic products</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shop?</h2>
          <p className="text-gray-300 text-lg mb-8">Explore thousands of products with amazing deals</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
            >
              Start Shopping 🛍️
            </Link>
            <Link
              to="/products"
              className="px-8 py-3 border-2 border-teal-400 text-teal-400 font-bold rounded-lg hover:bg-teal-400 hover:text-gray-900 transition"
            >
              View Products →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../auth/AuthContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, openLoginModal } = useAuth();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  // Sample product data with multiple images
  const products = {
    101: {
      id: 101,
      name: "Premium Wireless Headphones",
      price: 199,
      originalPrice: 249,
      category: "Audio",
      icon: "🎧",
      rating: 4.8,
      reviews: 324,
      stock: 15,
      description: "Experience crystal-clear sound with advanced noise cancellation. Perfect for music lovers and professionals.",
      images: ["🎧", "🔊", "🎵", "🎤"], // Multiple image slides
      specifications: {
        "Audio Quality": "Hi-Res 32-bit/384kHz",
        "Noise Cancellation": "Active ANC with 40dB reduction",
        "Battery Life": "Up to 60 hours",
        "Connectivity": "Bluetooth 5.3",
        "Driver Size": "40mm Dynamic Drivers",
        "Weight": "250g",
      },
      features: [
        "Active Noise Cancellation",
        "40-hour battery life",
        "Bluetooth 5.3 connectivity",
        "Comfortable over-ear design",
        "Foldable carry case included",
        "3.5mm headphone jack backup",
      ],
    },
    102: {
      id: 102,
      name: "Smart Watch Pro",
      price: 299,
      originalPrice: 349,
      category: "Wearables",
      icon: "⌚",
      rating: 4.9,
      reviews: 567,
      stock: 8,
      description: "Advanced fitness tracking with heart rate monitor, GPS, and 5-day battery life.",
      images: ["⌚", "❤️", "🏃", "📊"],
      specifications: {
        "Display": "AMOLED 1.4 inch Retina",
        "Water Resistance": "50M (5 ATM)",
        "Battery": "5 days battery life",
        "Connectivity": "GPS + Bluetooth",
        "Health Sensors": "Heart Rate, SpO2, ECG",
      },
      features: [
        "Always-on AMOLED display",
        "Built-in GPS tracking",
        "Heart rate and blood oxygen monitoring",
        "100+ workout modes",
        "50m water resistance",
      ],
    },
    103: {
      id: 103,
      name: "USB-C Hub Multiport",
      price: 59,
      originalPrice: 79,
      category: "Accessories",
      icon: "🔌",
      rating: 4.6,
      reviews: 198,
      stock: 45,
      description: "7-in-1 USB-C hub with multiple ports for enhanced connectivity.",
      images: ["🔌", "📱", "🖥️", "⚡"],
      specifications: {
        "Ports": "USB 3.0 x2, HDMI, SD Card Reader, USB-C PD",
        "Power": "100W USB-C Power Delivery",
        "Data Speed": "5Gbps USB 3.0",
        "Material": "Aluminum alloy",
        "Compatibility": "Mac, Windows, Chrome OS",
      },
      features: [
        "7-in-1 multiport connectivity",
        "100W Power Delivery",
        "4K HDMI output",
        "SD card reader",
        "Compact design",
      ],
    },
  };

  const product = products[id] || products[101];

  // Sample reviews
  const productReviews = [
    {
      id: 1,
      author: "John Doe",
      rating: 5,
      date: "Jan 28, 2025",
      title: "Excellent Quality!",
      text: "Best purchase I've made in a long time. The sound quality is amazing and the noise cancellation works perfectly.",
      helpful: 245,
    },
    {
      id: 2,
      author: "Sarah Smith",
      rating: 4,
      date: "Jan 15, 2025",
      title: "Very Good Product",
      text: "Great product overall. Battery life is as advertised. Only minor issue with the fit for larger heads.",
      helpful: 128,
    },
    {
      id: 3,
      author: "Mike Johnson",
      rating: 5,
      date: "Jan 5, 2025",
      title: "Perfect for Travel",
      text: "Perfect for flights and commuting. Noise cancellation is incredible. Highly recommend!",
      helpful: 356,
    },
  ];

  const handleAddToCart = () => {
    if (!user) {
      openLoginModal("Please login to add items to your cart!");
      return;
    }
    addToCart({ id: product.id, name: product.name, price: product.price, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-teal-600 hover:text-teal-700 font-medium transition"
          >
            ← Back to Home
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Carousel Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl overflow-hidden aspect-square flex items-center justify-center group">
              <div className="text-9xl">{product.images[selectedImage]}</div>

              {/* Image Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                ❯
              </button>

              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                  -{discount}%
                </div>
              )}

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
                {selectedImage + 1} / {product.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg flex items-center justify-center text-4xl transition-all border-2 ${
                    selectedImage === idx
                      ? "border-teal-600 bg-teal-50"
                      : "border-gray-200 bg-gray-50 hover:border-teal-300"
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                {product.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Rating Section */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">{product.rating}</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{product.reviews}</span> customer reviews
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-8">
              <div className="flex items-baseline gap-3">
                <p className="text-4xl font-bold text-teal-600">${product.price}</p>
                {product.originalPrice > product.price && (
                  <p className="text-xl text-gray-400 line-through">${product.originalPrice}</p>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-2">Free shipping on orders over $100</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-lg font-semibold text-sm ${
                  product.stock > 10
                    ? "bg-green-100 text-green-700"
                    : product.stock > 0
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock > 0 ? `✓ ${product.stock} in stock` : "Out of stock"}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                >
                  −
                </button>
                <span className="flex-1 text-center font-semibold text-gray-900 text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-3 px-6 rounded-lg font-bold text-white text-lg transition-all flex items-center justify-center gap-2 ${
                  addedToCart
                    ? "bg-green-500"
                    : product.stock === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-teal-600 to-cyan-600 hover:shadow-lg hover:from-teal-700 hover:to-cyan-700"
                }`}
              >
                {addedToCart ? "✓ Added to Cart" : "🛒 Add to Cart"}
              </button>
            </div>

            {/* Product Description */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">About This Product</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Key Features & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Key Features */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Specifications</h3>
            <div className="space-y-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start pb-4 border-b border-gray-100 last:border-0">
                  <p className="text-sm font-semibold text-gray-600 uppercase">{key}</p>
                  <p className="text-sm text-gray-900 text-right">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 md:p-12 mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
            >
              Write a Review
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className={`text-3xl transition ${
                        star <= reviewRating ? "text-yellow-400" : "text-gray-300 hover:text-yellow-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Review</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share your experience with this product..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition resize-none"
                  rows="4"
                />
              </div>
              <button
                onClick={() => {
                  setShowReviewForm(false);
                  setReviewText("");
                  setReviewRating(5);
                }}
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition"
              >
                Submit Review
              </button>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {productReviews.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-900">{review.title}</h4>
                  </div>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>

                {/* Review Author */}
                <p className="text-sm text-gray-600 mb-3">by <span className="font-semibold">{review.author}</span></p>

                {/* Review Text */}
                <p className="text-gray-700 mb-3">{review.text}</p>

                {/* Helpful Button */}
                <button className="text-sm text-teal-600 hover:text-teal-700 font-medium transition">
                  👍 Helpful ({review.helpful})
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[101, 102, 103, 103].map((p, idx) => (
              <div
                key={idx}
                onClick={() => navigate(`/products/${p}`)}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all cursor-pointer"
              >
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {p === 101 ? "🎧" : p === 102 ? "⌚" : "🔌"}
                </div>
                <div className="p-4">
                  <p className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                    {p === 101 ? "Premium Wireless Headphones" : p === 102 ? "Smart Watch Pro" : "USB-C Hub Multiport"}
                  </p>
                  <p className="text-teal-600 font-bold">${p === 101 ? 199 : p === 102 ? 299 : 59}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

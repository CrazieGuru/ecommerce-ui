import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { useCart } from "../context/CartContext";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useState } from "react";
import CurrentLocation from "./CurrentLocation";

export default function Navbar() {
  const navigate = useNavigate();
  const {
    user,
    logout,
    showLoginModal,
    setShowLoginModal,
    loginMessage,
    closeLoginModal,
  } = useAuth();
  const { getTotalItems } = useCart();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const cartCount = getTotalItems();

  const userInitials = user?.email
    ? user.email.split("@")[0].split("").slice(0, 2).join("").toUpperCase()
    : "U";

  // All products database
  const allProducts = [
    // Audio
    {
      id: 101,
      name: "Premium Wireless Headphones",
      price: 199,
      icon: "🎧",
      category: "Audio",
    },
    {
      id: 102,
      name: "Bluetooth Speaker Mini",
      price: 49,
      icon: "🔊",
      category: "Audio",
    },
    {
      id: 103,
      name: "Noise Canceling Earbuds",
      price: 129,
      icon: "🎧",
      category: "Audio",
    },
    {
      id: 104,
      name: "Studio Monitor Speakers",
      price: 299,
      icon: "📻",
      category: "Audio",
    },
    {
      id: 105,
      name: "Wireless Earbuds Pro",
      price: 179,
      icon: "🎧",
      category: "Audio",
    },
    {
      id: 106,
      name: "Portable Audio System",
      price: 399,
      icon: "🔊",
      category: "Audio",
    },
    {
      id: 107,
      name: "Gaming Headset RGB",
      price: 149,
      icon: "🎧",
      category: "Audio",
    },
    {
      id: 108,
      name: "Vintage Vinyl Player",
      price: 89,
      icon: "📀",
      category: "Audio",
    },
    {
      id: 109,
      name: "Microphone USB Pro",
      price: 159,
      icon: "🎤",
      category: "Audio",
    },
    {
      id: 110,
      name: "Audio Interface Studio",
      price: 249,
      icon: "🎙️",
      category: "Audio",
    },
    // Wearables
    {
      id: 201,
      name: "Smart Watch Pro",
      price: 299,
      icon: "⌚",
      category: "Wearables",
    },
    {
      id: 202,
      name: "Fitness Tracker Band",
      price: 79,
      icon: "⌚",
      category: "Wearables",
    },
    {
      id: 203,
      name: "Smart Ring Health",
      price: 199,
      icon: "💍",
      category: "Wearables",
    },
    {
      id: 204,
      name: "GPS Sports Watch",
      price: 249,
      icon: "⌚",
      category: "Wearables",
    },
    {
      id: 205,
      name: "Smart Glasses AR",
      price: 399,
      icon: "👓",
      category: "Wearables",
    },
    // Accessories
    {
      id: 301,
      name: "USB-C Hub Multiport",
      price: 59,
      icon: "🔌",
      category: "Accessories",
    },
    {
      id: 302,
      name: "Phone Mount Desk",
      price: 29,
      icon: "📱",
      category: "Accessories",
    },
    {
      id: 303,
      name: "Charging Cable Set",
      price: 39,
      icon: "⚡",
      category: "Accessories",
    },
    {
      id: 304,
      name: "Power Bank 20000mAh",
      price: 49,
      icon: "🔋",
      category: "Accessories",
    },
    {
      id: 305,
      name: "USB Splitter Hub",
      price: 44,
      icon: "🔌",
      category: "Accessories",
    },
    // Storage
    {
      id: 401,
      name: "Portable SSD 1TB",
      price: 129,
      icon: "💾",
      category: "Storage",
    },
    {
      id: 402,
      name: "External HDD 4TB",
      price: 79,
      icon: "💿",
      category: "Storage",
    },
    {
      id: 403,
      name: "Flash Drive USB 128GB",
      price: 24,
      icon: "📀",
      category: "Storage",
    },
    {
      id: 404,
      name: "Memory Card SD 256GB",
      price: 54,
      icon: "🎞️",
      category: "Storage",
    },
    {
      id: 405,
      name: "SSD M.2 2TB NVMe",
      price: 179,
      icon: "💾",
      category: "Storage",
    },
    // Peripherals
    {
      id: 501,
      name: "Mechanical Keyboard RGB",
      price: 149,
      icon: "⌨️",
      category: "Peripherals",
    },
    {
      id: 502,
      name: "Wireless Mouse Ultra",
      price: 39,
      icon: "🖱️",
      category: "Peripherals",
    },
    {
      id: 503,
      name: "Gaming Mouse Pad",
      price: 29,
      icon: "🖱️",
      category: "Peripherals",
    },
    {
      id: 504,
      name: "Keyboard Switch Tester",
      price: 44,
      icon: "⌨️",
      category: "Peripherals",
    },
    {
      id: 505,
      name: "Ergonomic Keyboard Pro",
      price: 119,
      icon: "⌨️",
      category: "Peripherals",
    },
    // Camera
    {
      id: 601,
      name: "4K Webcam Pro",
      price: 159,
      icon: "📷",
      category: "Camera",
    },
    {
      id: 602,
      name: "USB Camera 2K HD",
      price: 79,
      icon: "📷",
      category: "Camera",
    },
    {
      id: 603,
      name: "Action Camera 8K",
      price: 399,
      icon: "📹",
      category: "Camera",
    },
    {
      id: 604,
      name: "Night Vision Camera",
      price: 199,
      icon: "🌙",
      category: "Camera",
    },
    {
      id: 605,
      name: "Ring Light LED Pro",
      price: 89,
      icon: "💡",
      category: "Camera",
    },
    // Lighting
    {
      id: 701,
      name: "Smart RGB Light Bulb",
      price: 29,
      icon: "💡",
      category: "Lighting",
    },
    {
      id: 702,
      name: "LED Desk Lamp Pro",
      price: 59,
      icon: "🔦",
      category: "Lighting",
    },
    {
      id: 703,
      name: "Motion Sensor Light",
      price: 44,
      icon: "💡",
      category: "Lighting",
    },
    {
      id: 704,
      name: "Neon Light Sign",
      price: 89,
      icon: "🌈",
      category: "Lighting",
    },
    {
      id: 705,
      name: "Smart Light Strips",
      price: 49,
      icon: "✨",
      category: "Lighting",
    },
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSearchResults(value.length > 0);
  };

  // Filter products based on search query
  const getRecommendedProducts = () => {
    if (searchQuery.length === 0) return [];

    const query = searchQuery.toLowerCase();
    return allProducts
      .filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query),
      )
      .slice(0, 8); // Limit to 8 results
  };

  // Handle product selection
  const handleProductClick = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
    setSearchQuery("");
    setShowSearchResults(false);
  };

  // Handle View All search
  const handleViewAllSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setShowSearchResults(false);
  };

  const recommendedProducts = getRecommendedProducts();

  return (
    <>
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT: Brand + Location */}
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-3 hover:opacity-80 transition"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-cyan-600 text-white font-bold text-lg">
                  🛒
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  TechHub
                </span>
              </Link>
              <div className="hidden md:block w-50">
                <CurrentLocation />
              </div>
            </div>

            {/* CENTER: Search */}
            <div className="hidden md:flex flex-1 justify-center px-5">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-5 pr-4 text-sm
                             focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                />

                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    {recommendedProducts.length > 0 ? (
                      <>
                        {/* Recommended Products */}
                        <div className="p-3">
                          <p className="text-xs font-semibold text-gray-500 px-3 py-2 mb-2">
                            🔍 RECOMMENDED
                          </p>
                          {recommendedProducts.map((product) => (
                            <button
                              key={product.id}
                              onClick={() => handleProductClick(product)}
                              className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-teal-50 rounded-lg transition border-b border-gray-100 last:border-b-0"
                            >
                              <span className="text-2xl">{product.icon}</span>
                              <div className="flex-1 text-left">
                                <p className="text-sm font-medium text-gray-900 line-clamp-1">
                                  {product.name}
                                </p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-500">
                                    {product.category}
                                  </span>
                                  <span className="text-sm font-bold text-teal-600">
                                    ${product.price}
                                  </span>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>

                        {/* View All Button */}
                        <button
                          onClick={handleViewAllSearch}
                          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-teal-50 to-cyan-50 text-teal-600 font-semibold hover:from-teal-100 hover:to-cyan-100 transition border-t border-gray-200"
                        >
                          View All Results →
                        </button>
                      </>
                    ) : (
                      <div className="p-8 text-center">
                        <p className="text-gray-500 text-sm">
                          😔 No products found
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Try searching for different keywords
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <nav className="flex items-center gap-3 md:gap-4 px-4">
              <Link
                to="/"
                className="hidden sm:block text-sm font-medium text-gray-700 hover:text-teal-600 transition duration-200"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hidden sm:block text-sm font-medium text-gray-700 hover:text-teal-600 transition duration-200"
              >
                Products
              </Link>
            </nav>

            {/* RIGHT: Navigation */}
            {user ? (
              /* Authenticated User Navigation */
              <nav className="flex items-center gap-3 md:gap-4 px-4">
                <Link
                  to="/wishlist"
                  className="text-lg hover:text-teal-600 transition duration-200 hover:bg-gray-100 p-2 rounded-full"
                  title="Wishlist"
                >
                  ❤️
                </Link>

                {/* Shopping Cart */}
                <Link
                  to="/cart"
                  className="relative p-2 rounded-full hover:bg-gray-100 transition duration-200"
                  title="Shopping Cart"
                >
                  <span className="text-lg">🛒</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full text-xs text-white flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* More Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowMoreMenu(!showMoreMenu)}
                    className="text-lg w-10 hover:text-teal-600 transition hover:bg-gray-100 p-2 "
                    title="More"
                  >
                    ⋮
                  </button>
                  {showMoreMenu && (
                    <div className="absolute right-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden z-50">
                      <Link
                        to="/track-order"
                        onClick={() => setShowMoreMenu(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        📦 Track Order
                      </Link>
                      <Link
                        to="/faq"
                        onClick={() => setShowMoreMenu(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        ❓ FAQ
                      </Link>
                      <Link
                        to="/about"
                        onClick={() => setShowMoreMenu(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        ℹ️ About
                      </Link>
                      <Link
                        to="/contact"
                        onClick={() => setShowMoreMenu(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        📞 Contact
                      </Link>
                    </div>
                  )}
                </div>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full hover:shadow-lg transition duration-200 font-medium"
                    title={user?.email}
                  >
                    <span className="w-6 h-6 rounded-full bg-white text-teal-600 flex items-center justify-center text-xs font-bold">
                      {userInitials}
                    </span>
                    <span className="text-sm hidden sm:inline">
                      {user?.email?.split("@")[0]}
                    </span>
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-3 w-48 rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden z-50">
                      <Link
                        to="/profile"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        👤 My Profile
                      </Link>
                      <Link
                        to="/profile"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        📦 My Orders
                      </Link>
                      <Link
                        to="/wishlist"
                        onClick={() => setShowUserMenu(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition border-b border-gray-100"
                      >
                        ❤️ Wishlist
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition"
                      >
                        🚪 Logout
                      </button>
                    </div>
                  )}
                </div>
              </nav>
            ) : (
              /* Guest User Navigation */
              <nav className="flex items-center gap-4">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-1.5 text-sm font-medium text-white hover:shadow-lg transition duration-200"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="rounded-full border-2 border-teal-600 px-4 py-1.5 text-sm font-medium text-teal-600 hover:bg-teal-50 transition duration-200"
                >
                  Sign Up
                </button>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={closeLoginModal}
        message={loginMessage}
        onSwitchToRegister={() => {
          closeLoginModal();
          setIsRegisterModalOpen(true);
        }}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterModalOpen(false);
          setShowLoginModal(true);
        }}
      />
    </>
  );
}

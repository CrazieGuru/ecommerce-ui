import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../auth/AuthContext";
import { Link } from "react-router-dom";

export default function Products() {
  const { addToCart } = useCart();
  const { user, openLoginModal } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedProductId, setAddedProductId] = useState(null);

  // Sample product data
  const allProducts = [
    { id: 1, name: "Premium Wireless Headphones", price: 199, category: "audio", icon: "🎧", rating: 4.8, reviews: 324, stock: 15 },
    { id: 2, name: "Smart Watch Pro", price: 299, category: "wearables", icon: "⌚", rating: 4.9, reviews: 567, stock: 8 },
    { id: 3, name: "USB-C Hub Multiport", price: 59, category: "accessories", icon: "🔌", rating: 4.6, reviews: 198, stock: 45 },
    { id: 4, name: "Ergonomic Laptop Stand", price: 49, category: "accessories", icon: "🖥️", rating: 4.7, reviews: 276, stock: 32 },
    { id: 5, name: "Portable SSD 1TB", price: 129, category: "storage", icon: "💾", rating: 4.9, reviews: 412, stock: 18 },
    { id: 6, name: "Wireless Mouse Ultra", price: 39, category: "peripherals", icon: "🖱️", rating: 4.5, reviews: 189, stock: 52 },
    { id: 7, name: "Mechanical Keyboard RGB", price: 149, category: "peripherals", icon: "⌨️", rating: 4.8, reviews: 534, stock: 11 },
    { id: 8, name: "4K Webcam Pro", price: 159, category: "camera", icon: "📷", rating: 4.7, reviews: 245, stock: 19 },
    { id: 9, name: "Noise Cancelling Earbuds", price: 179, category: "audio", icon: "🎵", rating: 4.9, reviews: 678, stock: 25 },
    { id: 10, name: "Phone Stand Adjustable", price: 19, category: "accessories", icon: "📱", rating: 4.4, reviews: 112, stock: 89 },
    { id: 11, name: "LED Ring Light", price: 49, category: "lighting", icon: "💡", rating: 4.6, reviews: 203, stock: 28 },
    { id: 12, name: "Monitor Arm Mount", price: 79, category: "accessories", icon: "📺", rating: 4.7, reviews: 156, stock: 22 },
  ];

  const categories = ["all", "audio", "wearables", "accessories", "storage", "peripherals", "camera", "lighting"];

  // Filter and search products
  let filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">🛍️ Explore Products</h1>
          <p className="text-indigo-100">Discover amazing gadgets and accessories</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">Search</label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">Categories</label>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition ${
                        selectedCategory === cat
                          ? "bg-indigo-600 text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredProducts.length} products
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200 hover:border-indigo-300"
                >
                  {/* Product Image Area */}
                  <div className="relative h-48 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </span>
                    {product.stock < 5 && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        Low Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition text-sm line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price & Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <span className="text-lg font-bold text-indigo-600">${product.price}</span>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          if (!user) {
                            openLoginModal(`Please login to add "${product.name}" to your cart!`);
                          } else {
                            addToCart(product);
                            setAddedProductId(product.id);
                            setTimeout(() => setAddedProductId(null), 2000);
                          }
                        }}
                        className={`px-3 py-1.5 text-white text-xs font-semibold rounded-lg transition ${
                          addedProductId === product.id
                            ? "bg-green-600 hover:bg-green-700"
                            : "bg-indigo-600 hover:bg-indigo-700"
                        }`}
                      >
                        {addedProductId === product.id ? "✓ Added" : "🛒 Add"}
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

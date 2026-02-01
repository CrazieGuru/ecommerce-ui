import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const allProducts = [
    { id: 101, name: "Premium Wireless Headphones", price: 199, icon: "🎧", category: "Audio", rating: 4.8 },
    { id: 102, name: "Bluetooth Speaker Mini", price: 49, icon: "🔊", category: "Audio", rating: 4.6 },
    { id: 103, name: "Noise Canceling Earbuds", price: 129, icon: "🎧", category: "Audio", rating: 4.9 },
    { id: 104, name: "Studio Monitor Speakers", price: 299, icon: "📻", category: "Audio", rating: 4.7 },
    { id: 105, name: "Wireless Earbuds Pro", price: 179, icon: "🎧", category: "Audio", rating: 4.8 },
    { id: 201, name: "Smart Watch Pro", price: 299, icon: "⌚", category: "Wearables", rating: 4.9 },
    { id: 202, name: "Fitness Tracker Band", price: 79, icon: "⌚", category: "Wearables", rating: 4.7 },
    { id: 203, name: "Smart Ring Health", price: 199, icon: "💍", category: "Wearables", rating: 4.8 },
    { id: 301, name: "USB-C Hub Multiport", price: 59, icon: "🔌", category: "Accessories", rating: 4.8 },
    { id: 302, name: "Phone Mount Desk", price: 29, icon: "📱", category: "Accessories", rating: 4.6 },
    { id: 303, name: "Charging Cable Set", price: 39, icon: "⚡", category: "Accessories", rating: 4.9 },
    { id: 304, name: "Power Bank 20000mAh", price: 49, icon: "🔋", category: "Accessories", rating: 4.7 },
    { id: 401, name: "Portable SSD 1TB", price: 129, icon: "💾", category: "Storage", rating: 4.9 },
    { id: 402, name: "External HDD 4TB", price: 79, icon: "💿", category: "Storage", rating: 4.7 },
    { id: 403, name: "Flash Drive USB 128GB", price: 24, icon: "📀", category: "Storage", rating: 4.8 },
    { id: 501, name: "Mechanical Keyboard RGB", price: 149, icon: "⌨️", category: "Peripherals", rating: 4.8 },
    { id: 502, name: "Wireless Mouse Ultra", price: 39, icon: "🖱️", category: "Peripherals", rating: 4.9 },
    { id: 503, name: "Gaming Mouse Pad", price: 29, icon: "🖱️", category: "Peripherals", rating: 4.7 },
    { id: 601, name: "4K Webcam Pro", price: 159, icon: "📷", category: "Camera", rating: 4.9 },
    { id: 602, name: "USB Camera 2K HD", price: 79, icon: "📷", category: "Camera", rating: 4.7 },
    { id: 603, name: "Ring Light LED Pro", price: 89, icon: "💡", category: "Camera", rating: 4.6 },
    { id: 701, name: "Smart RGB Light Bulb", price: 29, icon: "💡", category: "Lighting", rating: 4.8 },
    { id: 702, name: "LED Desk Lamp Pro", price: 59, icon: "🔦", category: "Lighting", rating: 4.7 },
    { id: 703, name: "Motion Sensor Light", price: 44, icon: "💡", category: "Lighting", rating: 4.6 },
  ];

  const [filters, setFilters] = useState({ category: "all", priceRange: "all", sort: "relevance" });
  const [viewType, setViewType] = useState("grid");

  const results = allProducts
    .filter((p) => {
      const matchesQuery =
        query === "" ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = filters.category === "all" || p.category === filters.category;
      const matchesPrice =
        filters.priceRange === "all" ||
        (filters.priceRange === "0-50" && p.price <= 50) ||
        (filters.priceRange === "50-150" && p.price > 50 && p.price <= 150) ||
        (filters.priceRange === "150+" && p.price > 150);
      return matchesQuery && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (filters.sort === "price-low") return a.price - b.price;
      if (filters.sort === "price-high") return b.price - a.price;
      return 0;
    });

  // Product Card Component
  const ProductCard = ({ product }) => (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image Area */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center min-h-40">
        <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
      </div>

      {/* Product Info */}
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-teal-600 transition">
          {product.name}
        </h3>
        
        {/* Category & Rating */}
        <div className="flex items-center justify-between mt-2 mb-3">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{product.category}</span>
          <div className="flex items-center gap-0.5">
            <span className="text-yellow-400 text-xs">⭐</span>
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 border-t border-gray-100">
          <p className="text-lg font-bold text-teal-600">${product.price}</p>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                🔍 Search Results
              </h1>
              {query && (
                <p className="text-gray-600 mt-2">
                  Results for <span className="font-semibold text-teal-600">"{query}"</span>
                </p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Found <span className="font-semibold text-gray-900">{results.length}</span> products
              </p>
            </div>
            {results.length > 0 && (
              <div className="flex gap-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2.5 rounded-lg border transition-all duration-200 ${
                    viewType === "grid"
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-teal-300"
                  }`}
                  title="Grid View"
                >
                  ⊞
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2.5 rounded-lg border transition-all duration-200 ${
                    viewType === "list"
                      ? "bg-teal-600 text-white border-teal-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-teal-300"
                  }`}
                  title="List View"
                >
                  ≡
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 p-6 sticky top-6 space-y-6">
              {/* Filter Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Filters</h3>
                {(filters.category !== "all" || filters.priceRange !== "all" || filters.sort !== "relevance") && (
                  <button
                    onClick={() =>
                      setFilters({ category: "all", priceRange: "all", sort: "relevance" })
                    }
                    className="text-xs text-teal-600 font-semibold hover:text-teal-700 transition"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-900 uppercase tracking-wide block mb-3">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition"
                >
                  <option value="all">All Categories</option>
                  <option value="Audio">🎧 Audio</option>
                  <option value="Wearables">⌚ Wearables</option>
                  <option value="Accessories">🔌 Accessories</option>
                  <option value="Storage">💾 Storage</option>
                  <option value="Peripherals">⌨️ Peripherals</option>
                  <option value="Camera">📷 Camera</option>
                  <option value="Lighting">💡 Lighting</option>
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-900 uppercase tracking-wide block mb-3">
                  Price Range
                </label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition"
                >
                  <option value="all">All Prices</option>
                  <option value="0-50">Under $50</option>
                  <option value="50-150">$50 - $150</option>
                  <option value="150+">$150+</option>
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="text-xs font-semibold text-gray-900 uppercase tracking-wide block mb-3">
                  Sort By
                </label>
                <select
                  value={filters.sort}
                  onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg text-gray-900 focus:border-teal-500 focus:ring-1 focus:ring-teal-200 transition"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-3">
            {results.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-100 p-12 text-center">
                <div className="text-6xl mb-4 opacity-80">🔍</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">No products found</h2>
                <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  ← Back to Home
                </Link>
              </div>
            ) : (
              <>
                {/* Product Results */}
                {viewType === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {results.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {results.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md hover:border-teal-200 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 text-5xl">{product.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-teal-600 transition line-clamp-1">
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-xs font-medium text-gray-500 uppercase">{product.category}</span>
                            <div className="flex items-center gap-0.5">
                              <span className="text-yellow-400 text-xs">⭐</span>
                              <span className="text-xs text-gray-600">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 text-right">
                          <p className="text-lg font-bold text-teal-600">${product.price}</p>
                          <p className="text-xs text-gray-500 mt-1">View Details →</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: "$199",
      rating: "4.8",
      icon: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149",
      rating: "4.7",
      icon: "⌚",
    },
    {
      id: 3,
      name: "Wireless Speaker",
      price: "$89",
      rating: "4.6",
      icon: "🔊",
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: "$59",
      rating: "4.9",
      icon: "🔌",
    },
  ];

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 text-sm mt-1">Curated for you this week</p>
        </div>
        <a
          href="/products"
          className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition"
        >
          View All →
        </a>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group rounded-xl bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition duration-300 overflow-hidden"
          >
            {/* Product Icon */}
            <div className="h-40 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center group-hover:from-indigo-100 group-hover:to-purple-100 transition text-5xl">
              {product.icon}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-1">
                {product.name}
              </h3>

              {/* Price & Rating */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-indigo-600">
                  {product.price}
                </span>
                <span className="text-xs font-semibold text-gray-600">
                  ⭐ {product.rating}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full py-2 px-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-xs rounded-lg hover:shadow-md transition duration-200">
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

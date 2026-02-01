import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");
    if (saved) setWishlist(JSON.parse(saved));
  }, []);

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter((p) => p.id !== productId);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900">❤️ My Wishlist</h1>
          <p className="text-gray-600 mt-2">{wishlist.length} items saved</p>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">Save items to purchase later</p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
            >
              Start Shopping 🛍️
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 text-center">
                  <div className="text-6xl mb-4">{product.icon}</div>
                  <h3 className="text-gray-900 font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-teal-600 mb-4">${product.price}</p>

                  <div className="space-y-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
                    >
                      Add to Cart 🛒
                    </button>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="w-full py-2 border border-red-300 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition"
                    >
                      Remove ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

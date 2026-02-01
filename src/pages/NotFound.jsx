import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="text-9xl font-bold text-gray-200 mb-4">404</div>

        {/* Icon */}
        <div className="text-7xl mb-6">🔍</div>

        {/* Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off like a lost tech gadget.
        </p>

        {/* Suggestions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">🏠</div>
            <p className="text-gray-600 font-medium">Go to Homepage</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">🛍️</div>
            <p className="text-gray-600 font-medium">Browse Products</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">📞</div>
            <p className="text-gray-600 font-medium">Contact Support</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="px-8 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-lg hover:bg-teal-50 transition"
          >
            Browse Products
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <input
            type="text"
            placeholder="Try searching here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
          <button className="w-full mt-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition">
            Search 🔍
          </button>
        </div>

        {/* Footer Message */}
        <p className="mt-12 text-gray-500 text-sm">
          If you believe this is a mistake, please{" "}
          <Link to="/contact" className="text-teal-600 hover:text-teal-700 font-semibold">
            contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}

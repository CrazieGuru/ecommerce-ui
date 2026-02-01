import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold">
                🛒
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                TechHub
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your one-stop shop for premium tech gadgets and accessories.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition"
                title="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition"
                title="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition"
                title="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-teal-600 rounded-lg flex items-center justify-center transition"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-teal-400 transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:text-teal-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/track-order" className="hover:text-teal-400 transition">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-teal-400 transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-teal-400 transition">
                  Shipping Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-teal-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-teal-400 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-teal-400 transition">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-teal-400 transition">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-700 text-white placeholder-gray-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>
              © {currentYear} TechHub. All rights reserved. | Designed with ❤️ for better shopping experience
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">We accept:</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs font-bold">
                💳
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                Visa
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                MC
              </div>
              <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center text-xs">
                Amex
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Contact Bar */}
      <div className="border-t border-gray-700 bg-gray-900 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📞</span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">📧</span>
            <span>support@techhub.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-lg">🕒</span>
            <span>Mon-Fri: 9AM-9PM EST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
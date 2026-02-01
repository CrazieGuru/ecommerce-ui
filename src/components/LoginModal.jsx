import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToRegister,
  message = "",
}) {
  const { login } = useAuth();
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      await login(email, password);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setEmail("");
        setPassword("");
        setSuccess(false);
      }, 1500);
    } catch (err) {
      setError(err.detail || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/60 backdrop-blur-sm py-8">
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-xl border border-gray-100 transform transition-all">
        {/* Close Button */}
        <button
          onClick={() => {
            onClose();
            setError("");
            setEmail("");
            setPassword("");
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-2xl"
          aria-label="Close login modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gray-100 px-6 py-5 rounded-t-2xl">
          <h2 className="text-xl font-semibold text-gray-800">Sign in to your account</h2>
          <p className="text-gray-500 text-xs mt-1">Access your dashboard and orders</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLoginSubmit} className="p-5 space-y-3">
          {/* Custom Message from Context */}
          {message && (
            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs">
              ℹ️ {message}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs">
              ✅ Login successful! Redirecting...
            </div>
          )}

          {/* Info Message */}
          <div className="p-3 bg-gray-50 border border-gray-200 text-gray-600 rounded-lg text-xs">
            💡 Demo: test@example.com / password
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
              ❌ {error}
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50"
              required
              disabled={isLoading}
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                className="w-3 h-3 rounded border-gray-300 text-blue-500 focus:ring-blue-400"
              />
              <span className="text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Signing in...
              </>
            ) : (
              <>
                🔓 Sign In
              </>
            )}
          </button>

          {/* Sign Up Link */}
          <div className="text-center text-xs">
            <span className="text-gray-600">Don't have an account? </span>
            <button
              type="button"
              onClick={onSwitchToRegister}
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Create one
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 rounded-b-2xl text-center text-xs text-gray-400">
          🔒 Your login is secure and encrypted
        </div>
      </div>
    </div>
  );
}

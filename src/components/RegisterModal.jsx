import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function RegisterModal({
  isOpen,
  onClose,
  onSwitchToLogin,
}) {
  const { register } = useAuth();
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!fullname.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!email.includes("@")) {
      setError("Valid email is required");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (!agreeTerms) {
      setError("Please accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);
    console.log({ fullname, email, password });

    try {
      await register(fullname, email, password);
      onClose();
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    } catch (err) {
      setError(err.detail || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm py-8 overflow-y-auto">
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl transform transition-all my-8">
        {/* Close Button */}
        <button
          onClick={() => {
            onClose();
            setError("");
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setAgreeTerms(false);
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-2xl z-10"
        >
          ✕
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-5 text-white">
          <h2 className="text-xl font-bold">Join Us Today! 🚀</h2>
          <p className="text-green-100 text-xs mt-1">Create your account to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegisterSubmit} className="p-5 space-y-2">
          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs">
              ❌ {error}
            </div>
          )}

          {/* Full Name Input */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
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
              placeholder="Min. 6 characters"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repeat password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              required
              disabled={isLoading}
            />
          </div>

          {/* Terms Checkbox */}
          <label className="flex items-start gap-2 cursor-pointer pt-1">
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 mt-0.5"
              disabled={isLoading}
            />
            <span className="text-xs text-gray-600">
              I agree to the <a href="#" className="text-green-600 hover:text-green-700 font-medium">Terms & Conditions</a>
            </span>
          </label>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold text-sm rounded-lg hover:shadow-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-3"
          >
            {isLoading ? (
              <>
                <span className="animate-spin">⏳</span>
                Creating account...
              </>
            ) : (
              <>
                ✓ Create Account
              </>
            )}
          </button>

          {/* Sign In Link */}
          <div className="text-center text-xs pt-2">
            <span className="text-gray-600">Already have an account? </span>
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-3 bg-gray-50 rounded-b-2xl text-center text-xs text-gray-500">
          🛡️ Your data is safe and secure
        </div>
      </div>
    </div>
  );
}

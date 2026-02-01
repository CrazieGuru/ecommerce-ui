import { useSearchParams, Link } from "react-router-dom";
import { verifyEmail } from "../api/auth.api";
import { useEffect, useState } from "react";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (token) {
      verifyEmail(token)
        .then(() => {
          setSuccess(true);
        })
        .catch((err) => {
          setError(
            err.response?.data?.message ||
              "Verification failed. The link may be invalid or expired."
          );
        })
        .finally(() => setLoading(false));
    } else {
      setError("No verification token provided.");
      setLoading(false);
    }
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Verify Your Email</h1>
        {loading && (
          <div className="text-blue-600 flex items-center justify-center gap-2">
            <span className="animate-spin">⏳</span> Verifying your email...
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm mb-4">
            🎉 Your email has been verified! You can now <Link to="/login" className="text-blue-600 hover:underline font-semibold">sign in</Link>.
          </div>
        )}
        {!loading && !success && (
          <Link to="/" className="text-blue-600 hover:underline font-semibold">Go to Home</Link>
        )}
      </div>
    </div>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import { CartProvider } from "./context/CartContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import AppLayout from "./layouts/AppLayout";

// Authentication Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";

// Main Pages
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";

// Feature Pages
import Wishlist from "./pages/Wishlist";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import SearchResults from "./pages/SearchResults";
import OrderTracking from "./pages/OrderTracking";

// Policy Pages
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";

// Error Pages
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* ===== Authentication Routes ===== */}
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}
            <Route path="/verify-email" element={<VerifyEmail />} />

            {/* ===== Public Pages ===== */}
            <Route
              path="/"
              element={
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              }
            />

            <Route
              path="/products"
              element={
                <AppLayout>
                  <Products />
                </AppLayout>
              }
            />

            <Route
              path="/products/:id"
              element={
                <AppLayout>
                  <ProductDetail />
                </AppLayout>
              }
            />

            <Route
              path="/search"
              element={
                <AppLayout>
                  <SearchResults />
                </AppLayout>
              }
            />

            <Route
              path="/about"
              element={
                <AppLayout>
                  <AboutUs />
                </AppLayout>
              }
            />

            <Route
              path="/contact"
              element={
                <AppLayout>
                  <ContactUs />
                </AppLayout>
              }
            />

            <Route
              path="/faq"
              element={
                <AppLayout>
                  <FAQ />
                </AppLayout>
              }
            />

            <Route
              path="/track-order"
              element={
                <AppLayout>
                  <OrderTracking />
                </AppLayout>
              }
            />

            {/* ===== Policy Pages ===== */}
            <Route
              path="/terms"
              element={
                <AppLayout>
                  <Terms />
                </AppLayout>
              }
            />

            <Route
              path="/privacy"
              element={
                <AppLayout>
                  <Privacy />
                </AppLayout>
              }
            />

            <Route
              path="/returns"
              element={
                <AppLayout>
                  <Returns />
                </AppLayout>
              }
            />

            <Route
              path="/shipping"
              element={
                <AppLayout>
                  <Shipping />
                </AppLayout>
              }
            />

            {/* ===== Protected Routes (Login Required) ===== */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Cart />
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Checkout />
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Profile />
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <AppLayout>
                    <Wishlist />
                  </AppLayout>
                </ProtectedRoute>
              }
            />

            {/* ===== 404 Not Found Route ===== */}
            <Route
              path="*"
              element={
                <AppLayout>
                  <NotFound />
                </AppLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

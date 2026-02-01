import { useState } from "react";
import { useAuth } from "../auth/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("info");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: user?.email || "",
    phone: "+1 (555) 123-4567",
    dob: "1990-01-15",
    bio: "Tech enthusiast and early adopter",
    memberSince: "2024-01-15",
    totalSpent: 1233.98,
    totalOrders: 4,
    loyaltyPoints: 1233
  });

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "home",
      name: "Home Address",
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
      isDefault: true
    },
    {
      id: 2,
      type: "work",
      name: "Work Address",
      street: "456 Business Ave",
      city: "San Francisco",
      state: "CA",
      zip: "94102",
      country: "USA",
      isDefault: false
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: "ORD-001",
      date: "2026-01-28",
      items: 3,
      total: 459.99,
      status: "delivered",
      products: ["Premium Wireless Headphones", "Smart Watch Pro", "USB-C Hub"]
    },
    {
      id: "ORD-002",
      date: "2026-01-20",
      items: 2,
      total: 288.00,
      status: "delivered",
      products: ["Portable SSD 1TB", "4K Webcam Pro"]
    },
    {
      id: "ORD-003",
      date: "2026-01-15",
      items: 1,
      total: 149.99,
      status: "delivered",
      products: ["Mechanical Keyboard RGB"]
    },
    {
      id: "ORD-004",
      date: "2026-01-10",
      items: 4,
      total: 336.00,
      status: "delivered",
      products: ["Wireless Mouse", "Phone Stand", "LED Ring Light", "Monitor Arm Mount"]
    }
  ]);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    type: "home",
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "USA",
    isDefault: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setSaveSuccess(false);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (editingAddress) {
      setAddresses(addresses.map(addr => 
        addr.id === editingAddress.id ? { ...newAddress, id: editingAddress.id } : addr
      ));
    } else {
      setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    }
    setShowAddressForm(false);
    setNewAddress({ type: "home", name: "", street: "", city: "", state: "", zip: "", country: "USA", isDefault: false });
    setEditingAddress(null);
  };

  const deleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const setDefaultAddress = (id) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "delivered": return "bg-green-100 text-green-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "shipped": return "bg-orange-100 text-orange-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-white text-indigo-600 rounded-full flex items-center justify-center text-5xl font-bold shadow-lg">
              {formData.firstName.charAt(0)}{formData.lastName.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold">{formData.firstName} {formData.lastName}</h1>
              <p className="text-indigo-100 text-lg mt-1">💎 Premium Member</p>
              <p className="text-indigo-200 text-sm mt-1">Member since {formData.memberSince}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-indigo-100 text-sm">Total Orders</p>
              <p className="text-2xl font-bold">{formData.totalOrders}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-indigo-100 text-sm">Total Spent</p>
              <p className="text-2xl font-bold">${formData.totalSpent}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-indigo-100 text-sm">Loyalty Points</p>
              <p className="text-2xl font-bold">{formData.loyaltyPoints}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-indigo-100 text-sm">Account Status</p>
              <p className="text-2xl font-bold">✅ Active</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setActiveTab("info")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "info"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            👤 Profile Info
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "addresses"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            📍 Addresses
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "orders"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            📦 Orders
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              activeTab === "settings"
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            ⚙️ Settings
          </button>
        </div>

        {/* Success Message */}
        {saveSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-2">
            <span className="text-2xl">✅</span>
            <span>Changes saved successfully!</span>
          </div>
        )}
        {activeTab === "info" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <form onSubmit={handleSaveProfile} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Saved Addresses</h2>
              <button
                onClick={() => {
                  setShowAddressForm(!showAddressForm);
                  setEditingAddress(null);
                  setNewAddress({ type: "home", name: "", street: "", city: "", state: "", zip: "", country: "USA", isDefault: false });
                }}
                className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                + Add Address
              </button>
            </div>

            {showAddressForm && (
              <form onSubmit={handleAddressSubmit} className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <h3 className="text-lg font-semibold mb-4">{editingAddress ? "Edit Address" : "New Address"}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address Name</label>
                    <input
                      type="text"
                      value={newAddress.name}
                      onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                      placeholder="e.g., Home, Office"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                    <select
                      value={newAddress.type}
                      onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="home">Home</option>
                      <option value="work">Work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      value={newAddress.street}
                      onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      value={newAddress.city}
                      onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input
                      type="text"
                      value={newAddress.state}
                      onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                    <input
                      type="text"
                      value={newAddress.zip}
                      onChange={(e) => setNewAddress({ ...newAddress, zip: e.target.value })}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={newAddress.isDefault}
                    onChange={(e) => setNewAddress({ ...newAddress, isDefault: e.target.checked })}
                    className="w-4 h-4 text-indigo-600"
                  />
                  <label className="ml-2 text-sm text-gray-700">Set as default address</label>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
                  >
                    Save Address
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddressForm(false);
                      setEditingAddress(null);
                    }}
                    className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((address) => (
                <div key={address.id} className="border border-gray-300 rounded-lg p-4 relative">
                  {address.isDefault && (
                    <span className="absolute -top-3 -right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Default
                    </span>
                  )}
                  <h4 className="font-semibold text-gray-900 mb-2">{address.name}</h4>
                  <p className="text-sm text-gray-600 mb-1">{address.street}</p>
                  <p className="text-sm text-gray-600 mb-3">{address.city}, {address.state} {address.zip}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingAddress(address);
                        setNewAddress(address);
                        setShowAddressForm(true);
                      }}
                      className="flex-1 px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded hover:bg-indigo-200 transition"
                    >
                      Edit
                    </button>
                    {!address.isDefault && (
                      <button
                        onClick={() => setDefaultAddress(address.id)}
                        className="flex-1 px-3 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded hover:bg-gray-200 transition"
                      >
                        Set Default
                      </button>
                    )}
                    <button
                      onClick={() => deleteAddress(address.id)}
                      className="flex-1 px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded hover:bg-red-200 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Order History</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{order.id}</h3>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2"><strong>Items:</strong> {order.items}</p>
                    <div className="flex flex-wrap gap-2">
                      {order.products.map((product, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-gray-900">${order.total.toFixed(2)}</p>
                    <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <div className="space-y-6">
              {/* Notification Settings */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📧 Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    <span className="text-gray-700">Receive order updates via email</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    <span className="text-gray-700">Receive promotional offers</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
                    <span className="text-gray-700">Receive SMS notifications</span>
                  </label>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔒 Privacy</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    <span className="text-gray-700">Make my profile private</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-indigo-600 rounded" />
                    <span className="text-gray-700">Allow order history viewing</span>
                  </label>
                </div>
              </div>

              {/* Security Settings */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🛡️ Security</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                    <span className="text-gray-700">Change Password</span>
                    <span className="text-gray-400">→</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                    <span className="text-gray-700">Two-Factor Authentication</span>
                    <span className="text-green-600 font-semibold">Enabled</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex justify-between items-center">
                    <span className="text-gray-700">Active Sessions</span>
                    <span className="text-gray-400">→</span>
                  </button>
                </div>
              </div>

              {/* Account Actions */}
              <div className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Danger Zone</h3>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-orange-50 hover:bg-orange-100 text-orange-600 font-semibold rounded-lg transition">
                    📥 Download My Data
                  </button>
                  <button className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 font-semibold rounded-lg transition">
                    🗑️ Delete Account (Permanent)
                  </button>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={() => {
                  setSaveSuccess(true);
                  setTimeout(() => setSaveSuccess(false), 3000);
                }}
                className="px-8 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
              >
                Save Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

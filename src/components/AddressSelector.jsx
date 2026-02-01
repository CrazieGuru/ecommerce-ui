import { useEffect, useState } from "react";

// Demo addresses for selection (in real app, fetch from user profile API)
const storedAddresses = [
  {
    id: 1,
    label: "Home",
    address: "123 Main St, Downtown, Springfield, USA",
  },
  {
    id: 2,
    label: "Work",
    address: "456 Office Park, Midtown, Springfield, USA",
  },
];

export default function AddressSelector({ onSelect }) {
  const [selectedId, setSelectedId] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [autoLocation, setAutoLocation] = useState(null);
  const [autoLoading, setAutoLoading] = useState(false);
  const [autoError, setAutoError] = useState("");

  // Auto-detect location
  const handleDetectLocation = () => {
    setAutoLoading(true);
    setAutoError("");
    if (!navigator.geolocation) {
      setAutoError("Geolocation not supported");
      setAutoLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          const address = [
            data.address.road,
            data.address.suburb,
            data.address.city || data.address.town || data.address.village,
            data.address.state,
            data.address.country,
          ]
            .filter(Boolean)
            .join(", ");
          setAutoLocation(address);
          setNewAddress(address);
        } catch {
          setAutoError("Failed to fetch location");
        } finally {
          setAutoLoading(false);
        }
      },
      () => {
        setAutoError("Location permission denied");
        setAutoLoading(false);
      }
    );
  };

  // Handle address selection
  const handleSelect = (id) => {
    setSelectedId(id);
    setShowAdd(false);
    setAutoLocation(null);
    setNewAddress("");
    if (onSelect) {
      const addr = storedAddresses.find((a) => a.id === id);
      if (addr) onSelect(addr.address);
    }
  };

  // Handle new address add
  const handleAdd = () => {
    if (newAddress.trim() && onSelect) {
      onSelect(newAddress.trim());
      setShowAdd(false);
      setNewAddress("");
      setAutoLocation(null);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-2">
        {storedAddresses.map((addr) => (
          <button
            key={addr.id}
            className={`w-full text-left px-4 py-2 rounded-lg border ${selectedId === addr.id ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} hover:border-blue-400 transition`}
            onClick={() => handleSelect(addr.id)}
          >
            <span className="font-semibold mr-2">{addr.label}:</span> {addr.address}
          </button>
        ))}
      </div>
      <button
        className="w-full px-4 py-2 rounded-lg border border-dashed border-gray-300 text-blue-600 hover:bg-blue-50 transition"
        onClick={() => {
          setShowAdd((v) => !v);
          setSelectedId(null);
        }}
      >
        + Add New Address
      </button>
      {showAdd && (
        <div className="space-y-2 mt-2">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-gray-50"
            rows={2}
            placeholder="Enter new address..."
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
          <div className="flex gap-2">
            <button
              type="button"
              className="px-3 py-1.5 rounded bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition"
              onClick={handleAdd}
              disabled={!newAddress.trim()}
            >
              Save Address
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300 transition"
              onClick={() => {
                setShowAdd(false);
                setNewAddress("");
                setAutoLocation(null);
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-3 py-1.5 rounded bg-green-600 text-white text-xs font-semibold hover:bg-green-700 transition"
              onClick={handleDetectLocation}
              disabled={autoLoading}
            >
              {autoLoading ? "Detecting..." : "Auto Detect Location"}
            </button>
          </div>
          {autoLocation && (
            <div className="text-xs text-green-700 bg-green-50 border border-green-200 rounded px-2 py-1 mt-1">
              📍 {autoLocation}
            </div>
          )}
          {autoError && (
            <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded px-2 py-1 mt-1">
              {autoError}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

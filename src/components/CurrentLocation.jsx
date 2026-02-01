import { useEffect, useState } from "react";

// Uses browser geolocation API to get user's current city (if allowed)
export default function CurrentLocation() {
  const [location, setLocation] = useState({ city: "", region: "", country: "", loading: true, error: "" ,area: ""});

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({ ...prev, loading: false, error: "Geolocation not supported" }));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          // Use a free geocoding API (e.g., Open-Meteo, Nominatim, or ip-api)
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
          const data = await res.json();
          setLocation({
            city: data.address.city || data.address.town || data.address.village || "",
            area: data.address.suburb || data.address.neighbourhood || "",
            region: data.address.state || "",
            country: data.address.country || "",
            loading: false,
            error: "",
          });
        } catch {
          setLocation((prev) => ({ ...prev, loading: false, error: "Failed to fetch location" }));
        }
      },
      (err) => {
        setLocation((prev) => ({ ...prev, loading: false, error: "Location permission denied" }));
      }
    );
  }, []);

  if (location.loading) return (
    <span className="text-xs text-gray-400 flex items-center gap-1">📍 Detecting...</span>
  );
  if (location.error) return (
    <span className="text-xs text-gray-400 flex items-center gap-1">📍 {location.error}</span>
  );
  if (!location.city && !location.country) return null;
  console.log(location);
  return (
    <span className="text-xs text-gray-600 flex items-center gap-1">
      📍 {location.city ? `${location.city}, ` : ""}{location.area ? `${location.area}` : ""}
    </span>
  );
}

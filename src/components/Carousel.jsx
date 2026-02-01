import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const banners = [
    {
      id: 1,
      title: "Summer Collection 2026",
      subtitle: "Up to 60% OFF on Electronics",
      color: "from-blue-500 to-cyan-500",
      emoji: "☀️",
      icon: "📱",
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "Tech Gadgets Sale",
      subtitle: "Premium wireless devices at unbeatable prices",
      color: "from-purple-500 to-pink-500",
      emoji: "⚡",
      icon: "🎧",
      cta: "Explore"
    },
    {
      id: 3,
      title: "Flash Deal: 48 Hours",
      subtitle: "Use code FLASH50 for extra 10% discount",
      color: "from-orange-400 to-red-500",
      emoji: "🔥",
      icon: "💰",
      cta: "Grab Deal"
    },
    {
      id: 4,
      title: "Free Shipping Event",
      subtitle: "On all orders above $100 - Limited time only",
      color: "from-green-500 to-emerald-500",
      emoji: "🚀",
      icon: "📦",
      cta: "Shop"
    },
    {
      id: 5,
      title: "New Year Specials",
      subtitle: "Exclusive deals on top brands",
      color: "from-indigo-600 to-purple-600",
      emoji: "🎉",
      icon: "🎁",
      cta: "View"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, banners.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div className="relative w-full h-96 md:h-96 overflow-hidden rounded-lg shadow-2xl">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`w-full h-full bg-gradient-to-r ${banner.color} flex items-center justify-between px-8 md:px-16`}>
            {/* Left Content */}
            <div className="flex-1 text-white">
              <div className="text-6xl md:text-7xl mb-4 inline-block">{banner.emoji}</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">{banner.title}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-6">{banner.subtitle}</p>
              <Link
                to="/products"
                className="inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
              >
                {banner.cta} →
              </Link>
            </div>

            {/* Right Icon */}
            <div className="hidden md:block text-8xl animate-bounce opacity-80">{banner.icon}</div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition shadow-lg"
        title="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-900 rounded-full p-3 transition shadow-lg"
        title="Next slide"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold z-20">
        {currentSlide + 1} / {banners.length}
      </div>
    </div>
  );
}

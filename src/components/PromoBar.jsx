export default function PromoBar() {
  return (
    <section className="px-6 py-8 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Content */}
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            🎉 Special Offer
          </h3>
          <p className="text-orange-50 text-sm md:text-base">
            Get 20% off on your first purchase
          </p>
        </div>

        {/* Middle - Code */}
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-3 rounded-lg">
          <p className="text-xs text-orange-50 mb-1">Use Code:</p>
          <p className="text-xl md:text-2xl font-bold tracking-widest">WELCOME20</p>
        </div>

        {/* Right - Button */}
        <button className="px-6 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-orange-50 transition duration-200 whitespace-nowrap shadow-lg hover:shadow-xl">
          Claim Offer 🎁
        </button>
      </div>
    </section>
  );
}

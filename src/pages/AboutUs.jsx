import { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");

  const teamMembers = [
    { name: "Sarah Chen", role: "Founder & CEO", image: "👩‍💼", bio: "Tech innovator with 15+ years experience" },
    { name: "Michael Rodriguez", role: "CTO", image: "👨‍💻", bio: "Leading our tech infrastructure" },
    { name: "Emily Watson", role: "Head of Operations", image: "👩‍🔬", bio: "Ensuring customer satisfaction" },
    { name: "David Kim", role: "Lead Designer", image: "🎨", bio: "Creating beautiful user experiences" },
  ];

  const achievements = [
    { number: "50K+", label: "Happy Customers", icon: "😊" },
    { number: "10K+", label: "Products", icon: "📦" },
    { number: "150+", label: "Countries", icon: "🌍" },
    { number: "4.8★", label: "Average Rating", icon: "⭐" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About TechHub 🚀</h1>
          <p className="text-xl text-teal-100">
            Your one-stop destination for premium tech products and gadgets
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-12 border-b border-gray-200">
          {["mission", "team", "achievements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold border-b-2 transition ${
                activeTab === tab
                  ? "border-teal-600 text-teal-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab === "mission" && "Our Mission"}
              {tab === "team" && "Team"}
              {tab === "achievements" && "Achievements"}
            </button>
          ))}
        </div>

        {/* Mission Tab */}
        {activeTab === "mission" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">💡 Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At TechHub, we're passionate about bringing cutting-edge technology to everyone. Founded in 2020,
                we've grown to become a trusted name in the online tech retail space.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to make quality tech products accessible, affordable, and available to customers
                worldwide. We believe technology should enhance people's lives and make everyday tasks easier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🎯", title: "Quality", desc: "Authentic products with warranty" },
                { icon: "🚀", title: "Innovation", desc: "Latest tech trends and gadgets" },
                { icon: "💚", title: "Sustainability", desc: "Eco-friendly packaging" },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">👥 Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🏆 Our Achievements</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{achievement.number}</div>
                  <p className="text-gray-600 font-semibold">{achievement.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white rounded-lg p-12 text-center">
              <h3 className="text-2xl font-bold mb-4">🎯 Milestones</h3>
              <ul className="text-lg space-y-2">
                <li>✓ 2020: Founded TechHub</li>
                <li>✓ 2021: Reached 10K customers</li>
                <li>✓ 2022: Expanded to 50+ countries</li>
                <li>✓ 2023: Hit 50K+ customer milestone</li>
                <li>✓ 2024: Launched premium membership</li>
                <li>✓ 2025: Expanded product catalog</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Shop?</h2>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition"
          >
            Browse Products 🛍️
          </Link>
        </div>
      </div>
    </div>
  );
}

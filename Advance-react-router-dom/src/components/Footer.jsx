import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-gray-400 px-8 py-14  border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            CodeBattle
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-500">
            Compete in real-time coding battles.
            <br />
            Climb ranks. Build dominance.
          </p>

          <div className="mt-6 text-sm text-blue-400 font-semibold">
            🔥 12,842 Battles Fought
          </div>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">
            Platform
          </h3>
          <ul className="space-y-3 text-sm">
            <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
            <li><NavLink to="/arena" className="hover:text-blue-400 transition">Arena</NavLink></li>
            <li><NavLink to="/leaderboard" className="hover:text-blue-400 transition">Leaderboard</NavLink></li>
            <li><NavLink to="/practice" className="hover:text-blue-400 transition">Practice</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">
            Resources
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-400 transition cursor-pointer">Blog</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Docs</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Privacy</li>
            <li className="hover:text-blue-400 transition cursor-pointer">Terms</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-sm">
            Connect
          </h3>

          <div className="flex gap-5 text-xl">
            <span className="hover:text-blue-400 transition cursor-pointer">🐦</span>
            <span className="hover:text-blue-400 transition cursor-pointer">💼</span>
            <span className="hover:text-blue-400 transition cursor-pointer">📧</span>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            support@codebattle.dev
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-gray-800 text-center text-xs text-gray-600 tracking-wide">
        © {new Date().getFullYear()} CodeBattle. Built for competitive coders.
      </div>
    </footer>
  );
};

export default Footer;
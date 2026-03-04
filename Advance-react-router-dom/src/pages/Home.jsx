import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "animejs";
import BattleSimulation from "../components/BattleSimulation";

const Home = () => {
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateY: [-60, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: subtitleRef.current,
      translateY: [-30, 0],
      opacity: [0, 1],
      delay: 400,
      duration: 1000,
      easing: "easeOutExpo",
    });

    anime({
      targets: buttonRef.current,
      scale: [1, 1.05],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 1800,
    });

    anime({
      targets: glowRef.current,
      scale: [1, 1.15],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 5000,
    });
  }, []);

  return (
    
    <div className="pt-24 bg-black text-white min-h-screen relative overflow-hidden">

      {/* Glow Background */}
      <div
        ref={glowRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600 opacity-20 blur-[150px] rounded-full pointer-events-none"
      />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-left">

            <p className="uppercase tracking-widest text-sm text-blue-400 mb-6  ">
              Enter The Arena
            </p>

            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl font-extrabold leading-tight opacity-0"
            >
              The Ultimate <br />
              <span className="text-blue-500">Coding Battlefield</span>
            </h1>

            <p
              ref={subtitleRef}
              className="mt-8 text-gray-400 text-lg opacity-0"
            >
              Face real opponents. Solve under pressure.
              Earn rating. Climb ranks.
              Only the sharpest coders survive.
            </p>

            <div className="mt-10 flex gap-6 flex-wrap">
              <button
                ref={buttonRef}
                onClick={() => navigate("/arena")}
                className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition px-8 py-4 rounded-lg font-semibold text-lg shadow-lg shadow-blue-500/20"
              >
                    ⚔️ Enter Arena
              </button>

              <button
                onClick={() => navigate("/leaderboard")}
                className="border border-gray-600 hover:border-white transition px-8 py-4 rounded-lg text-lg active:scale-95"
              >
                🏆 View Rankings
              </button>
            </div>

            <div className="mt-10 text-sm text-gray-500 tracking-wider">
              🔥 27 Live Battles • 8,421 Online Coders
            </div>

          </div>

          {/* RIGHT SIDE — SIMULATION */}
          <div>
            <BattleSimulation />
          </div>

        </div>
      </section>

    {/* PLATFORM HIGHLIGHTS */}
<section className="border-t border-gray-800 py-24 px-8 relative z-10 bg-black">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Built for Competitive Coders
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-20">
      CodeBattle is designed to sharpen problem-solving skills through
      real-time competition and performance tracking.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* Feature 1 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">
        <h3 className="text-xl font-semibold mb-4 text-blue-400">
          Real-Time Coding Engine
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Experience live coding battles with instant evaluation,
          synchronized timers, and competitive execution.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">
        <h3 className="text-xl font-semibold mb-4 text-purple-400">
          Rating & Ranking System
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Earn rating points based on performance. Track progress,
          maintain streaks, and climb the global leaderboard.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          Structured DSA Challenges
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Carefully curated data structure and algorithm problems
          designed to simulate real interview pressure.
        </p>
      </div>

    </div>
  </div>
</section>

    
     {/* HOW THE BATTLE WORKS */}
<section className="border-t border-gray-800 py-28 px-8 relative z-10 bg-black">

  <div className="max-w-7xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      How The Battle Works
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto mb-20">
      Compete in real-time coding battles where speed, accuracy,
      and strategy decide your ranking.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10">

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 font-bold text-lg mb-6">
          01
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Smart Matchmaking
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Get instantly paired with a coder of similar rating and skill level.
          Our system ensures fair, competitive, and balanced battles every time.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10">

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 font-bold text-lg mb-6">
          02
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Solve Under Pressure
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Both players receive the same problem and race against time.
          Efficient logic and faster execution determine who wins the duel.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="bg-gray-900/60 backdrop-blur-md border border-gray-800 rounded-2xl p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10">

        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 font-bold text-lg mb-6">
          03
        </div>

        <h3 className="text-xl font-semibold mb-4">
          Earn Rating & Climb
        </h3>

        <p className="text-gray-400 leading-relaxed">
          Winners gain rating points and move up the leaderboard.
          Track performance, maintain streaks, and dominate the rankings.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* FINAL CTA */}
      <section className="border-t border-gray-800 py-24 text-center relative z-10">
        <h2 className="text-3xl font-bold">
          Are You Ready To Compete?
        </h2>

        <button
          onClick={() => navigate("/arena")}
          className="mt-10 bg-blue-600 hover:bg-blue-700  active:scale-95 transition px-10 py-5 rounded-xl text-xl font-semibold shadow-xl shadow-blue-500/30"
        >
          Start Your First Battle
        </button>
      </section>

    </div>
  );
};

export default Home;
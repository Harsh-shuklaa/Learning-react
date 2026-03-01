import React, { useEffect, useState } from "react";

const fullCode = `function maxSubarray(nums) {
  let maxSum = nums[0];
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    maxSum = Math.max(maxSum, current);
  }
  return maxSum;
}`;

const BattleSimulation = () => {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [indexA, setIndexA] = useState(0);
  const [indexB, setIndexB] = useState(0);
  const [time, setTime] = useState(20);
  const [winner, setWinner] = useState(null);

  // Player A typing (faster)
  useEffect(() => {
    if (winner || indexA >= fullCode.length) return;

    const t = setTimeout(() => {
      setTextA((prev) => prev + fullCode[indexA]);
      setIndexA((prev) => prev + 1);
    }, 25);

    return () => clearTimeout(t);
  }, [indexA, winner]);

  // Player B typing (slower)
  useEffect(() => {
    if (winner || indexB >= fullCode.length) return;

    const t = setTimeout(() => {
      setTextB((prev) => prev + fullCode[indexB]);
      setIndexB((prev) => prev + 1);
    }, 40);

    return () => clearTimeout(t);
  }, [indexB, winner]);

  // 🏁 Finish Detection (Who completes first)
  useEffect(() => {
    if (winner) return;

    if (indexA === fullCode.length) {
      setWinner("Player A");
    } else if (indexB === fullCode.length) {
      setWinner("Player B");
    }
  }, [indexA, indexB, winner]);

  // ⏳ Countdown (Fallback winner logic)
  useEffect(() => {
    if (winner) return;

    if (time === 0) {
      if (indexA === indexB) setWinner("Draw");
      else if (indexA > indexB) setWinner("Player A");
      else setWinner("Player B");
      return;
    }

    const interval = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, winner, indexA, indexB]);

  // 🔄 Reset after result
  useEffect(() => {
    if (!winner) return;

    const reset = setTimeout(() => {
      setTextA("");
      setTextB("");
      setIndexA(0);
      setIndexB(0);
      setTime(20);
      setWinner(null);
    }, 4000);

    return () => clearTimeout(reset);
  }, [winner]);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="relative bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <div className="flex gap-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="text-xs text-gray-400">live-battle.js</div>
          <div className="text-xs text-gray-500">
            {winner ? "Completed" : "Running"}
          </div>
        </div>

        {/* Code Area */}
        <div className="grid grid-cols-2 divide-x divide-gray-800">

          {/* Player A */}
          <div className="p-4 font-mono text-sm text-gray-300 min-h-[220px]">
            <div className="text-xs text-blue-400 mb-3">
              Player A • 1420
            </div>
            <pre className="whitespace-pre-wrap leading-6">
              {textA}
              {!winner && <span className="animate-pulse text-gray-500">|</span>}
            </pre>
          </div>

          {/* Player B */}
          <div className="p-4 font-mono text-sm text-gray-300 min-h-[220px]">
            <div className="text-xs text-purple-400 mb-3">
              Player B • 1395
            </div>
            <pre className="whitespace-pre-wrap leading-6">
              {textB}
              {!winner && <span className="animate-pulse text-gray-500">|</span>}
            </pre>
          </div>
        </div>

        {/* Progress Bar */}
        {!winner && (
          <div className="h-1 bg-gray-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-1000"
              style={{ width: `${(time / 20) * 100}%` }}
            />
          </div>
        )}

        {/* Winner Overlay */}
        {winner && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center">
            <div className="px-8 py-5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg shadow-2xl animate-pulse">
              {winner === "Draw"
                ? "It's a Draw"
                : `${winner} Wins • +32 Rating`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleSimulation;
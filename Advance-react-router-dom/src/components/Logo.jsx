import React from 'react'

const Logo = () => {
  return (
    <div>
          <h1
  onClick={() => navigate("/")}
  className="flex items-center gap-2 text-2xl font-extrabold tracking-wide cursor-pointer group"
>
  <span className="text-white text-2xl">&lt;/&gt;</span>
  <span className="text-white group-hover:text-blue-400 transition">
    Code<span className="text-blue-500">Battle</span>
  </span>
</h1>
    </div>
  )
}

export default Logo

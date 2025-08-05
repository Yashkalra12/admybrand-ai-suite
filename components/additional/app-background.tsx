"use client"

import type React from "react"

interface AppBackgroundProps {
  children: React.ReactNode
}

export function AppBackground({ children }: AppBackgroundProps) {
  return (
    <div className="min-h-screen relative">
      {/* Consistent, full-screen background with static elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Static grain texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='6' seed='5' stitchTiles='stitch'/%3E%3CfeColorMatrix in='turbulence' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Subtle radial gradients for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.06) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, hsl(var(--secondary) / 0.06) 0%, transparent 50%)`,
          }}
        />

        {/* Glass-like blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[0.5px] bg-gradient-to-br from-slate-900/10 via-transparent to-slate-800/10" />

        {/* Premium background orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-slate-400/6 rounded-full blur-2xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 section-container">{children}</div>
    </div>
  )
}

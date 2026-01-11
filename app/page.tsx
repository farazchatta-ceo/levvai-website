"use client"

import Container from "@/components/Container"
import {
  Sparkles,
  FileText,
  Target,
  Layers,
  UserCheck,
  CreditCard,
  Gauge,
  ShieldCheck,
} from "lucide-react"



function AIOrb({ label }: { label: string }) {
  return (
    <div
      className="rounded-full border border-[#778da9]/40 bg-white px-6 py-3 text-sm text-[#01161e]
                 shadow-[0_8px_30px_rgba(13,27,42,0.12)]
                 transition-all duration-300
                 hover:-translate-y-1
                 hover:shadow-[0_12px_40px_rgba(13,27,42,0.22)]"
    >
      {label}
    </div>
  )
}




export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 pt-16">
      {/* HERO */}
      <section
        id="hero"
        className="scroll-mt-24 pt-32 pb-24 bg-[#021116] text-white"

      >

        <Container>
          <div className="grid gap-16 md:grid-cols-2 items-center">
            {/* LEFT: COPY */}
            <div className="max-w-xl">
              <p className="mb-4 text-sm font-medium tracking-wide text-[#778da9]">
                AI EXTERNAL WORKFORCE MANAGEMENT SOLUTION
              </p>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight">
                Bring intelligence and control to how external workers get managed
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-[#e0e1dd]">
                Levv AI is the first AI-enabled external workforce management
                solution redefining how vendors and contingent labor are
                managed - bringing speed, consistency, and governance to an area
                long defined by friction, complexity, and overhead.
              </p>

              <div className="mt-8 flex gap-4">
    
                
              </div>
            </div>

        {/* RIGHT: LEVV AI CONTROL MODEL */}
<div className="relative hidden md:block group">

  <div className="relative h-[420px] w-[420px] mx-auto">

    {/* SINGLE CONTROL RING */}
   <div className="absolute inset-0 rounded-full border border-white/12 pointer-events-none
                transition-colors duration-300
                group-hover:border-white/20" />



    {/* CENTER — LEVV AI */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2">


      <div className="relative z-10 rounded-2xl border border-white/40 bg-white/10 px-10 py-6 text-center backdrop-blur-md shadow-lg
                transition-all duration-300 ease-out
                md:hover:scale-[1.04]
                md:hover:bg-white/15
                md:hover:border-white/60
                md:hover:shadow-xl
                group-hover:border-white/55">

        <p className="text-sm font-semibold text-white">
          Levv AI
        </p>
        <p className="mt-1 text-xs text-white/80">
          AI-Enabled Intelligence
  
        </p>
        <p className="mt-2 text-xs text-white/40">
          Governance · Compliance · Control
  
        </p>


      </div>
    </div>

    {/* RIGHT-SIDE CLOCKWISE FLOW */}
    {/* RIGHT-SIDE ARC ITEMS */}
{[
  { label: "Intent Simplification", icon: Sparkles, top: "4%", right: "-11%" },
  { label: "Frictionless Request Formation", icon: FileText, top: "20%", right: "-50%" },
  { label: "Targeted Sourcing", icon: Target, top: "40%", right: "-60%" },
  { label: "Structured Engagement Definition", icon: Layers, top: "58%", right: "-60%" },
  { label: "Frictionless Onboarding", icon: UserCheck, top: "78%", right: "-50%" },
  { label: "Settlement & Pay", icon: CreditCard, top: "96%", right: "-11%" },
]

.map(({ label, icon: Icon, top, right }) => (
  <div
    key={label}
  className="absolute -translate-x-1/2 -translate-y-1/2 w-[260px] flex items-center gap-3 pl-10 pr-4 py-2 rounded-lg border border-white/30 bg-white/10 text-xs text-white/85 backdrop-blur-sm shadow-sm
           transition-all duration-300 ease-out
           md:hover:scale-[1.03]
           md:hover:bg-white/15
           md:hover:border-white/50
           md:hover:shadow-lg
           group-hover:bg-white/12"




    style={{ top, right }}
  >
    <Icon className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/60" />

    {label}
  </div>
))}

  </div>
</div>

          </div>
        </Container>
      </section>

      {/* VALUE PILLARS */}
      <section className="border-t border-neutral-200 bg-[#e0e1dd] py-32">


       <Container>
       <div className="mb-16 text-center">
  <h2 className="text-3xl font-semibold tracking-tight text-[#01161e]">
    Built around what enterprises actually need
   </h2>
</div>

  <div className="grid gap-16 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-400/100">

    <div className="px-6">
      <div className="flex items-center gap-3">
        <Gauge className="h-5 w-5 text-neutral-700" />
        <h3 className="text-lg font-semibold tracking-tight text-[#01161e]">
          Operational Clarity
        </h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#01161e]">
        Bring structure to external workforce requests without slowing
        teams down - so work starts with shared understanding, not
        follow-ups.
      </p>
    </div>

    <div className="px-6">
      <div className="flex items-center gap-3">
        <ShieldCheck className="h-5 w-5 text-neutral-700" />
        <h3 className="text-lg font-semibold tracking-tight text-[#01161e]">
          Governance by Default
        </h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#01161e]">
        Ensure workforce decisions align with policy, financial
        guardrails, and supplier strategy - without manual enforcement.
      </p>
    </div>

    <div className="px-6">
      <div className="flex items-center gap-3">
        <Layers className="h-5 w-5 text-neutral-700" />
        <h3 className="text-lg font-semibold tracking-tight text-[#01161e]">
          Single Source of Truth
        </h3>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-[#01161e]">
        Maintain a unified view of external work - from engagement through
        payment - so HR, finance, and procurement always know what’s
        happening and why.
      </p>
    </div>

  </div>
</Container>

      </section>

      {/* EXTERNAL WORK LIFECYCLE */}
      <section
  id="workflow"
  className="scroll-mt-24 py-32 bg-[#22333b]"
>


        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#e0e1dd]">
            Designed around how external work actually operates
          </h2>

          <p className="mt-4 max-w-3xl text-[#e0e1dd]">
            Levv AI models external workforce management as a connected
            system - reinforcing clarity, alignment, and consistency as work moves
            from request through execution and settlement.
          </p>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-accent/20 md:block" />

            <div className="relative grid gap-8 md:grid-cols-5">

              {[
                ["Request Formation", "Clarity is established before work begins, so downstream execution doesn’t rely on interpretation."],
                ["Decision Alignment", "Workforce decisions reflect policy, context, and intent, without becoming a bottleneck."],
                ["Supplier Engagement", "External partners are engaged with consistency and intent, not ad hoc exceptions."],
                ["Work Definition", "External work is governed by clear, consistent artifacts, so expectations don’t drift over time."],
                ["Execution & Settlement", "Time and payment reflect work performed - cleanly, predictably, and with minimal correction."],
              ].map(([title, desc]) => (
               <div
  key={title}
  className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-5 shadow-lg

             transition-all duration-300 ease-out
             hover:bg-white/25
             hover:border-white/50
             hover:shadow-xl"
>

                  <p className="text-sm font-medium text-white">{title}</p>

                  <p className="mt-2 text-sm text-white/85">{desc}</p>

                </div>
              ))}
            </div>
          </div>

          
        </Container>
      </section>

      {/* AI IN THE WORKFLOW */}
      <section className="border-t border-neutral-200  bg-[#ffffff] py-32 ">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#01161e]">
  Offload the busywork to Agentic AI.
</h2>
<p className="text-3xl font-semibold tracking-tight text-[#01161e]">
  While you focus on decisions.
</p>
            <p className="mt-4 text-neutral-600">
              Levv AI embeds intelligence directly into the external workforce
              lifecycle - improving efficiency, consistency, and execution quality
              without exposing teams to unnecessary complexity.
            </p>
          </div>

          <div className="relative mt-24 flex items-center justify-center h-[420px]">
{/* Neural Network Lines */}
<svg
  className="absolute inset-0 w-full h-full pointer-events-none z-0"

  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <defs>
    <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" stopColor="#0d1b2a" stopOpacity="0.25" />
  <stop offset="50%" stopColor="#0d1b2a" stopOpacity="0.7" />
  <stop offset="100%" stopColor="#0d1b2a" stopOpacity="0.25" />
</linearGradient>

  </defs>

  {/* Top */}
  <path
    d="M50 10 Q50 30 50 50"
   stroke="#0d1b2a"
strokeWidth="0.5"
strokeDasharray="1"
opacity="0.15"

    fill="none"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="0"
      to="20"
      dur="8s"
      repeatCount="indefinite"
    />
  </path>

  {/* Right */}
  <path
    d="M85 50 Q65 50 50 50"
    stroke="#0d1b2a"
strokeWidth="0.5"
strokeDasharray="0.5"
opacity="0.15"


    fill="none"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="0"
      to="20"
      dur="8s"
      repeatCount="indefinite"
    />
  </path>

  {/* Bottom */}
  <path
    d="M50 90 Q50 70 50 50"
    stroke="#0d1b2a"
strokeWidth="0.5"
strokeDasharray="1"
opacity="0.15"


    fill="none"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="0"
      to="20"
      dur="8s"
      repeatCount="indefinite"
    />
  </path>

  {/* Left */}
  <path
    d="M15 50 Q35 50 50 50"
   stroke="#0d1b2a"
strokeWidth="0.5"
strokeDasharray="0.5"
opacity="0.15"


    fill="none"
  >
    <animate
      attributeName="stroke-dashoffset"
      from="0"
      to="20"
      dur="8s"
      repeatCount="indefinite"
    />
  </path>

  {/* Center micro-nodes */}
{[
  { cx: 50, cy: 42 }, // top
  { cx: 58, cy: 50 }, // right
  { cx: 50, cy: 58 }, // bottom
  { cx: 42, cy: 50 }, // left
].map(({ cx, cy }, i) => (
  <circle
    key={i}
    cx={cx}
    cy={cy}
    r="2.0"
    fill="#0d1b2a"
    opacity="0.6"
  >
    <animate
      attributeName="opacity"
      values="0.3;0.7;0.3"
      dur="4s"
      begin={`${i * 0.6}s`}
      repeatCount="indefinite"
    />
  </circle>
))}

</svg>

  {/* Center */}
  <div className="relative z-10 rounded-full border border-[#778da9]/40 bg-white px-10 py-8 text-center
                shadow-[0_20px_60px_rgba(13,27,42,0.15)]
                transition-all duration-300 hover:shadow-[0_25px_80px_rgba(13,27,42,0.25)]
                before:absolute before:inset-[-40px] before:rounded-full
before:bg-[radial-gradient(circle,rgba(13,27,42,0.08),transparent_65%)]
before:content-['']
">

    <p className="text-sm font-semibold text-[#01161e]">Levv AI</p>
    <p className="mt-1 text-xs text-[#01161e]">Embedded Intelligence</p>
  </div>

  {/* Top */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2">
    <AIOrb label="Request Quality" />
  </div>

  {/* Right */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    <AIOrb label="Decision Support" />
  </div>

  {/* Left */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2">
    <AIOrb label="Engagement Consistency" />
  </div>

  {/* Bottom */}
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
    <AIOrb label="Time & Pay Integrity" />
  </div>
</div>


          <p className="mt-10 max-w-3xl text-sm text-neutral-500">
            AI embedded intelligence layer, augmenting workflows
            while keeping human judgment and governance firmly in control.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-neutral-900 text-white py-32">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Finally, a system built for HR, Procurement, and Finance. Working in sync.
            
          </h2>

          
          <div className="mt-8">
            <button
                onClick={() => {
                  window.dispatchEvent(new Event("open-demo-modal"))
                }}
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
                Request a demo
              </button>

          </div>
        </Container>
      </section>
    </main>
  )
}

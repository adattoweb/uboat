"use client"

import { XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useMemo, useRef, useState } from "react"

import gsap from "gsap"

export function DepthMeter() {
   const container = useRef<HTMLDivElement | null>(null)
   const [isOpen, setIsOpen] = useState(true)
   const [depth, setDepth] = useState(0)
   const maxDepth = 250

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY
         const docHeight = document.documentElement.scrollHeight - window.innerHeight

         const progress = docHeight > 0 ? scrollTop / docHeight : 0
         const mappedDepth = Math.min(Math.round(progress * maxDepth), maxDepth)

         setDepth(mappedDepth)
      }

      handleScroll()
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   const status = useMemo(() => {
      if (depth <= 50) {
         return {
            text: "SAFE",
            color: "#4dffb8",
         }
      }

      if (depth <= 175) {
         return {
            text: "NORMAL",
            color: "#c8ff5c",
         }
      }

      return {
         text: "CRITICAL",
         color: "#ff4d4d",
      }
   }, [depth])

   const radius = 75
   const progress = depth / maxDepth
   const circleLength = 2 * Math.PI * radius
   const dashOffset = circleLength - progress * circleLength

   const handleClose = () => {
      gsap.to(container.current, {
         opacity: 0,
         y: 25,
         duration: 0.3,
         ease: "power2.out",
         onComplete: () => {
            setIsOpen(false)
         },
      })
   }

   if (!isOpen) return

   return (
      <div
         ref={container}
         className="fixed bottom-4 left-4 z-50 min-w-68 rounded-3xl border border-white/10 backdrop-blur-xl flex items-center gap-2 pl-4 pr-6 py-2"
         style={{
            background: `radial-gradient(circle at top left, ${status.color}25, transparent 45%),
        linear-gradient(135deg, rgba(10,15,18,0.95), rgba(5,8,12,0.92))`,
            boxShadow: `0 0 40px ${status.color}20`,
         }}
      >
         <XMarkIcon
            className="absolute w-5 -left-2 -top-2 bg-[#2f2f2f] stroke-white rounded-full box-content p-1 cursor-pointer z-1"
            onClick={handleClose}
         />
         <div
            className="absolute inset-0 opacity-30"
            style={{
               background: `radial-gradient(circle at center, ${status.color}40 0%, transparent 70%)`,
            }}
         />

         <div className="relative w-36 h-36">
            <svg className="rotate-[-125deg]" width="144" height="144" viewBox="0 0 200 200">
               <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circleLength}
               />

               <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  fill="transparent"
                  stroke={status.color}
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={circleLength}
                  strokeDashoffset={dashOffset}
                  style={{
                     transition: "stroke-dashoffset 0.2s linear, stroke 0.3s ease",
                     filter: `drop-shadow(0 0 10px ${status.color})`,
                  }}
               />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
               <p
                  className="p-1 text-[13px] font-bold tracking-widest rounded-md border select-none"
                  style={{
                     color: status.color,
                     borderColor: `${status.color}55`,
                     background: `${status.color}10`,
                     boxShadow: `0 0 20px ${status.color}20`,
                  }}
               >
                  {status.text}
               </p>
            </div>
         </div>

         <div>
            <div
               className="text-5xl leading-none font-black tracking-tighter select-none"
               style={{
                  color: "#f3f3f3",
                  textShadow: `0 0 20px ${status.color}35`,
               }}
            >
               {depth}
            </div>

            <p
               className="w-full text-2xl font-bold tracking-[0.45em] -mt-2 select-none"
               style={{ color: status.color }}
            >
               M
            </p>
         </div>
      </div>
   )
}

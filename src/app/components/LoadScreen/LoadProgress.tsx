"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

interface ProgressProps {
   setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export function LoadProgress({ setIsLoading }: ProgressProps) {
   const container = useRef<HTMLDivElement | null>(null)
   const percentRef = useRef<HTMLParagraphElement | null>(null)
   const progressRef = useRef<HTMLDivElement | null>(null)
   useGSAP(() => {
      const tl = gsap.timeline({
         defaults: {
            ease: "power1.inOut",
            onUpdate: () => {
               const percent = gsap.getProperty(progressRef.current, "width") as number
               percentRef.current!.textContent = `${Math.round(percent).toString().padStart(3, "0")}%`
            },
         },
      })

      tl.to(progressRef.current, {
         width: "80%",
         duration: 1,
      })
      tl.to(
         progressRef.current,
         {
            width: "95%",
            duration: 1,
         },
         "+=0.5",
      )
      tl.to(
         progressRef.current,
         {
            width: "100%",
            duration: 0.5,
         },
         "+=1",
      )
      tl.to(
         container.current,
         {
            scale: 0.7,
            filter: "blur(6px)",
            opacity: 0,
            duration: 1,
            onComplete: () => {
               setIsLoading(false)
            },
         },
         "+=0.5",
      )
   })
   return (
      <div ref={container}>
         <p ref={percentRef} className="text-white text-9xl font-extrabold">
            000%
         </p>
         <div className="w-full h-1 rounded-sm bg-[#ffffff20] mt-2">
            <div ref={progressRef} className="w-0 h-full bg-[rgb(var(--accent-stroke-color))] rounded-sm"></div>
         </div>
      </div>
   )
}

"use client"

import Button from "@/UI/Button/Button"
import "./LoadScreen.css"
import gsap from "gsap"
import { useRef, useState } from "react"

export function LoadScreen() {
   const [isEnded, setIsEnded] = useState(false)
   const topRef = useRef<HTMLDivElement | null>(null)
   const bottomRef = useRef<HTMLDivElement | null>(null)
   const buttonRef = useRef<HTMLDivElement | null>(null)

   const handleClick = () => {
      const audio = new Audio("/sounds/whale.mp3")
      audio.volume = 0.4
      audio.play()
      const tl = gsap.timeline()
      tl.to(buttonRef.current, { opacity: 0, duration: 0.1 })
         .to(topRef.current, { y: "-100%", duration: 1 }, "+=0.5")
         .to(bottomRef.current, { y: "100%", duration: 1, onComplete: () => setIsEnded(true) }, "<")
   }

   if (isEnded) return null

   return (
      <div className="absolute inset-0 z-1">
         <div ref={topRef} className="tech-grid h-1/2" />

         <Button ref={buttonRef} onClick={handleClick} className="absolute">
            <Button.Text>Start</Button.Text>
         </Button>

         <div ref={bottomRef} className="tech-grid h-1/2" />
      </div>
   )
}

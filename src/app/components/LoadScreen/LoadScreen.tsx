"use client"

import Button from "@/UI/Button/Button"
import "./LoadScreen.css"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"
import { LoadProgress } from "./LoadProgress"
import { useGSAP } from "@gsap/react"

export function LoadScreen() {
   const [isEnded, setIsEnded] = useState(true) // default value: false
   const [isLoading, setIsLoading] = useState(true) // default value: true
   const topRef = useRef<HTMLDivElement | null>(null)
   const bottomRef = useRef<HTMLDivElement | null>(null)
   const buttonRef = useRef<HTMLDivElement | null>(null)

   const handleClick = () => {
      const tl = gsap.timeline({
         defaults: {
            ease: "back.in(1.2)",
         },
      })
      tl.to(buttonRef.current, { display: "none", duration: 0 })
         .to(topRef.current, { y: "-100%", duration: 1 }, "+=0.25")
         .to(bottomRef.current, { y: "100%", duration: 1, onComplete: () => setIsEnded(true) }, "<")
   }

   useEffect(() => {
      if (isEnded) {
         document.body.style.overflow = "auto"
      }

      return () => {
         document.body.style.overflow = "auto"
      }
   }, [isEnded])

   useGSAP(() => {
      if (isLoading) return
      if (!buttonRef.current) return

      gsap.fromTo(
         buttonRef.current,
         {
            scale: 0.8,
         },
         {
            scale: 1,
            duration: 0.5,
            ease: "elastic.out",
         },
      )
   }, [isLoading])

   if (isEnded) return null

   return (
      <div className="loadscreen absolute inset-0 z-10">
         <div ref={topRef} className="tech-grid h-1/2" />
         <div className="center">
            {isLoading && <LoadProgress setIsLoading={setIsLoading} />}
            {!isLoading && (
               <Button ref={buttonRef} onClick={handleClick} className="scale-80">
                  <Button.Text>Start</Button.Text>
               </Button>
            )}
         </div>
         <div ref={bottomRef} className="tech-grid h-1/2" />
      </div>
   )
}

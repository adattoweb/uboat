"use client"

import Button from "@/UI/Button/Button"
import { scrollTo } from "@/utils/scrollTo"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

export function Intro() {
   const container = useRef<HTMLDivElement | null>(null)
   useGSAP(
      () => {
         const textTl = gsap.timeline()
         const tl = gsap.timeline()
         textTl.to(".text", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.3,
         })

         tl.add(textTl).to(".button", {
            opacity: 1,
         })
      },
      { scope: container },
   )
   return (
      <section
         ref={container}
         className="w-screen h-screen bg-[radial-gradient(circle_at_center,transparent,var(--background-color)_150%),url('/images/intro_background.png')] bg-cover bg-center flex"
      >
         <div className="w-[var(--content-width)] h-full mx-auto flex">
            <div className="mt-auto max-w-175 xl:max-w-200 mb-80 text-center flex flex-col items-center md:items-start md:text-start">
               <h4 className="text move-in text-base sm:text-lg xl:text-xl text-light-gray font-normal mb-2">
                  SILENT. INVISIBLE. DEADLY
               </h4>
               <h2 className="text move-in text-4xl sm:text-6xl xl:text-8xl text-white font-semibold mb-4">
                  THE LEGEND BENEATH
               </h2>
               <p className="text move-in text-base sm:text-lg xl:text-xl text-light-gray font-normal mb-6">
                  Explore the engineering, history and wartime legacy of Germany`s U-boats that changed the course of
                  naval warfare forever
               </p>
               <Button className="button fade-in" onClick={() => scrollTo("#start")}>
                  <Button.Text>EXPLORE THE DEPTHS</Button.Text>
               </Button>
            </div>
         </div>
      </section>
   )
}

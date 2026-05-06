"use client"

import Button from "@/UI/Button/Button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export function Intro() {
   useGSAP(() => {
      const textTl = gsap.timeline()
      const tl = gsap.timeline()
      textTl.to(".intro-text", {
         opacity: 1,
         y: 0,
         duration: 0.8,
         stagger: 0.3,
      })

      tl.add(textTl).to(
         ".intro-button",
         {
            opacity: 1,
         },
         "+=2",
      )
   })
   return (
      <section className="w-screen h-screen bg-[radial-gradient(circle_at_center,transparent,var(--background-color)_150%),url('/images/intro_background.png')] bg-cover bg-center flex">
         <div className="w-[var(--content-width)] h-full mx-auto flex flex-col">
            <div className="mt-auto max-w-200 mb-80">
               <h4 className="intro-text move-in text-xl text-light-gray font-normal mb-2">
                  SILENT. INVISIBLE. DEADLY
               </h4>
               <h2 className="intro-text move-in text-8xl text-white font-semibold mb-4">THE LEGEND BENEATH</h2>
               <p className="intro-text move-in text-xl text-light-gray font-normal mb-6">
                  Explore the engineering, history and wartime legacy of Germany`s U-boats that changed the course of
                  naval warfare forever
               </p>
               <Button className="intro-button fade-in">
                  <Button.Text>EXPLORE THE DEPTHS</Button.Text>
               </Button>
            </div>
         </div>
      </section>
   )
}

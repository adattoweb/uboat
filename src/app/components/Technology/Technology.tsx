"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Button from "@/UI/Button/Button"

import submarine from "@/assets/images/submarine.png"
import Image from "next/image"
import { useRef } from "react"

export function Technology() {
   const container = useRef<HTMLDivElement | null>(null)
   const button = useRef<HTMLButtonElement | null>(null)
   const image = useRef<HTMLImageElement | null>(null)
   useGSAP(
      () => {
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: container.current,
               start: "top 90%",
               end: "bottom 5%",
               scrub: 0.4,
            },
            defaults: {
               ease: "none",
            },
         })

         tl.to(container.current, {
            opacity: 1,
            duration: 0.2,
         })

         tl.fromTo(
            ".tech-gsap",
            {
               y: 30,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               stagger: 0.15,
               duration: 0.3,
            },
         )
         tl.fromTo(
            image.current,
            {
               y: 20,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               duration: 0.25,
            },
            "<0.1",
         )

         tl.to(button.current, {
            opacity: 1,
            duration: 0.25,
         })

         tl.to(container.current, {
            opacity: 0,
            y: -30,
            duration: 0.5,
         })
      },
      { scope: container },
   )
   return (
      <section
         ref={container}
         id="technology"
         className="opacity-0 w-[var(--content-width)] flex flex-col xl:flex-row border border-[var(--stroke-color)] py-12 xl:py-16 px-8 xl:px-12 gap-10 xl:gap-14 h-max items-center"
      >
         <div className="mt-auto xl:max-w-100 4xl:max-w-150 flex flex-col items-center text-center md:items-start md:text-start mr-auto">
            <h4 className="tech-gsap opacity-0 text-base sm:text-lg xl:text-xl text-light-gray font-normal mb-2">
               AN ICON OF WARFARE
            </h4>
            <h2 className="tech-gsap opacity-0 text-4xl md:text-6xl 4xl:text-7xl! font-semibold mb-4 flex flex-col">
               <span className="text-gray-gradient">UBOAT</span>
               <span className="text-gray-gradient">TECHNOLOGY</span>
            </h2>
            <p className="tech-gsap opacity-0 text-base md:text-lg 4xl:text-xl text-light-gray font-normal mb-6">
               German U-boats were a result of engineering precision, innovation and ruthless efficiency.
            </p>
            <Button ref={button} className="opacity-0">
               <Button.Text>VIEW IN DETAIL</Button.Text>
            </Button>
         </div>
         <Image
            ref={image}
            width={1660}
            height={550}
            src={submarine}
            alt="submarine"
            className="pl-4 flex-1 min-w-0 w-full min-h-0 h-auto object-cover opacity-0 hidden sm:block max-w-300"
            draggable={false}
         />
      </section>
   )
}

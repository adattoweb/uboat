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
               trigger: ".tech-gsap",
               start: "top 80%",
            },
            defaults: {
               ease: "power1.out",
            },
         })
         tl.to(container.current, {
            opacity: 1,
            duration: 0.5,
         })
            .fromTo(
               ".tech-gsap",
               {
                  y: 25,
                  opacity: 0,
               },
               {
                  y: 0,
                  opacity: 1,
                  stagger: 0.25,
                  duration: 0.75,
               },
            )
            .to(
               button.current,
               {
                  opacity: 1,
                  duration: 0.5,
               },
               "-=0.5",
            )
            .fromTo(
               image.current,
               {
                  y: 75,
               },
               {
                  y: 0,
                  delay: 0.25,
                  duration: 1,
                  opacity: 1,
               },
            )
      },
      { scope: container },
   )
   return (
      <section
         ref={container}
         id="technology"
         className="opacity-0 w-[var(--content-width)] flex border border-[var(--stroke-color)] py-16 px-12 gap-14 h-max items-center"
      >
         <div className="mt-auto max-w-200">
            <h4 className="tech-gsap opacity-0 text-xl text-light-gray font-normal mb-2">AN ICON OF WARFARE</h4>
            <h2 className="tech-gsap opacity-0 text-8xl font-semibold mb-4 flex flex-col">
               <span className="text-gray-gradient">UBOAT</span>
               <span className="text-gray-gradient">TECHNOLOGY</span>
            </h2>
            <p className="tech-gsap opacity-0 text-xl text-light-gray font-normal mb-6">
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
            className="max-w-full h-max! block opacity-0"
            draggable={false}
         />
      </section>
   )
}

"use client"

import Button from "@/UI/Button/Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ROUTES } from "@/constants/routes"

export default function Page() {
   const container = useRef<HTMLDivElement | null>(null)
   const header = useRef<HTMLHeadingElement | null>(null)
   const text = useRef<HTMLParagraphElement | null>(null)
   const button = useRef<HTMLButtonElement | null>(null)
   useGSAP(() => {
      const tl = gsap.timeline({
         defaults: {
            ease: "power3.out",
            duration: 0.5,
         },
      })
      tl.to(header.current, {
         y: 0,
         opacity: 1,
      })
         .to(
            text.current,
            {
               y: 0,
               opacity: 1,
            },
            "-=0.25",
         )
         .to(
            button.current,
            {
               opacity: 1,
            },
            "+=0.5",
         )
   })
   return (
      <div ref={container} className="flex flex-col center gap-2 py-8 px-14 border border-[var(--stroke-color)]">
         <h1 ref={header} className="move-in text-white text-4xl font-medium">
            404
         </h1>
         <p ref={text} className="move-in text-white text-2xl font-normal">
            Oooops, page not found.
         </p>
         <Button ref={button} href={ROUTES.HOME.ROUTE} className="fade-in w-full mt-4">
            <Button.Text>RETURN TO MAIN</Button.Text>
         </Button>
      </div>
   )
}

"use client"

import Button from "@/UI/Button/Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

export default function Page() {
   const square = useRef<HTMLDivElement | null>(null)

   useGSAP(() => {
      const tl = gsap.timeline({
         defaults: {
            duration: 1,
            ease: "back.out(0.7)",
         },
         repeat: -1,
      })
      tl.to(square.current, {
         rotate: 90,
      })
      tl.to(square.current, {
         borderRadius: 64,
      })
      tl.to(square.current, {
         borderRadius: 16,
      })
   })

   return (
      <div className="notfound center gap-x-16 cursor-default">
         <div ref={square} className="row-start-1 row-end-2 aspect-square bg-amber-50 rounded-2xl"></div>
         <div className="self-start">
            <h1 className="text-white text-9xl font-bold leading-26">404</h1>
            <p className="text-white text-2xl font-medium">Page not found</p>
         </div>
         <Button href="/" className="mt-10 w-auto! col-start-1 col-end-3">
            <Button.Text>RETURN TO MAIN</Button.Text>
         </Button>
      </div>
   )
}

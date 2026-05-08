"use client"

import Button from "@/UI/Button/Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import { ROUTES } from "@/constants/routes"

export default function Page() {
   const container = useRef<HTMLDivElement | null>(null)
   useGSAP(() => {
      gsap.to(container.current, {
         y: 0,
         opacity: 1,
      })
   })
   return (
      <div
         ref={container}
         className="move-in flex flex-col mx-auto my-auto max-w-100 gap-2 py-8 px-14 border border-[var(--stroke-color)]"
      >
         <h1 className="text-white text-4xl font-medium">404</h1>
         <p className="text-white text-2xl font-normal">Oooops, page not found.</p>
         <Button href={ROUTES.HOME.ROUTE} className="w-full mt-4">
            <Button.Text>RETURN TO MAIN</Button.Text>
         </Button>
      </div>
   )
}

"use client"

import gsap from "gsap"
import { About } from "./components/About/About"
import { History } from "./components/History/History"
import { Info } from "./components/Info/Info"
import { Intro } from "./components/Intro/Intro"
import { LoadScreen } from "./components/LoadScreen/LoadScreen"
import { Submarines } from "./components/Submarines/Submarines"
import { Technology } from "./components/Technology/Technology"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
   useGSAP(() => {
      ScrollTrigger.batch(".fade-in", {
         once: true,
         start: "top 80%",
         onEnter: elements => {
            gsap.to(elements, {
               opacity: 1,
               y: 0,
               stagger: 0.3,
               duration: 1,
            })
         },
      })
   })
   return (
      <div className="flex flex-col items-center">
         <LoadScreen />
         <Intro />
         <div className="relative bottom-25 flex flex-col items-center gap-8">
            <About />
            <Technology />
            <Submarines />
            <History />
            <Info />
         </div>
      </div>
   )
}

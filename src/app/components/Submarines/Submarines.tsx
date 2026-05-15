"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Button from "@/UI/Button/Button"
import { submarines } from "@/constants/submarines"
import { ISubmarineCard } from "@/types/submarines.types"
import Image from "next/image"
import { useRef } from "react"

function Card({ title, description, href, image }: ISubmarineCard) {
   return (
      <div id="types" className="sub-card opacity-0 flex flex-col h-100 flex-1 border border-[var(--stroke-color)]">
         <Image
            width={400}
            height={300}
            src={image}
            alt={`image of uboat ${title}`}
            className="w-full h-52 min-h-52 object-cover"
            draggable={false}
         />
         <div className="relative flex flex-col items-center bottom-8 w-full h-full px-6">
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-5 text-light-gray font-medium text-base">{description}</p>
            <Button className="mt-auto" href={href}>
               <Button.Text>More</Button.Text>
            </Button>
         </div>
      </div>
   )
}

export function Submarines() {
   const container = useRef<HTMLDivElement | null>(null)
   useGSAP(
      () => {
         gsap.fromTo(
            ".sub-card",
            {
               y: 25,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               ease: "power1.out",
               duration: 0.75,
               stagger: 0.25,
               scrollTrigger: {
                  trigger: ".sub-card",
                  start: "top 80%",
               },
            },
         )
      },
      { scope: container },
   )
   return (
      <section
         ref={container}
         className="w-[var(--content-width)] h-max grid grid-cols-1 md:grid-cols-2 min-[1600px]:grid-cols-4! gap-8"
      >
         {submarines.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} href={card.href} image={card.image} />
         ))}
      </section>
   )
}

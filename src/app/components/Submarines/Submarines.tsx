"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import Button from "@/UI/Button/Button"
import { submarines } from "@/constants/submarines"
import { Submarine } from "@/types/submarines.types"
import Image from "next/image"
import { useRef, useState } from "react"
import { TypeModal } from "@/UI/Modal/TypeModal"

interface CardProps {
   data: Submarine
   setSelectedData: React.Dispatch<React.SetStateAction<Submarine | null>>
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Card({ data, setSelectedData, setIsOpen }: CardProps) {
   const onSelect = () => {
      setSelectedData(data)
      setIsOpen(true)
   }
   return (
      <div className="sub-card opacity-0 flex flex-col h-100 3xl:h-100 flex-1 border border-[var(--stroke-color)]">
         <Image
            width={400}
            height={300}
            src={data.preview}
            alt={`image of uboat ${data.name}`}
            className="w-full h-52 min-h-52 object-cover"
            draggable={false}
         />
         <div className="relative flex flex-col items-center bottom-8 w-full h-full px-6">
            <h3 className="text-lg md:text-xl font-medium text-white">{data.name}</h3>
            <p className="mt-3 md:mt-5 text-light-gray text-base">{data.description}</p>
            <Button className="mt-auto" onClick={onSelect}>
               <Button.Text>MORE</Button.Text>
            </Button>
         </div>
      </div>
   )
}

export function Submarines() {
   const container = useRef<HTMLDivElement | null>(null)

   const [isOpen, setIsOpen] = useState(false)

   const [selectedData, setSelectedData] = useState<Submarine | null>(null)

   useGSAP(
      () => {
         const isMobile = window.innerWidth < 768

         gsap.utils.toArray<HTMLElement>(".sub-card").forEach((card, index) => {
            const offset = isMobile ? 0 : index * 5

            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: card,
                  start: `top ${90 - offset}%`,
                  end: "bottom 10%",
                  scrub: 0.6,
               },
            })

            tl.fromTo(
               card,
               {
                  opacity: 0,
                  y: 60,
               },
               {
                  opacity: 1,
                  y: 0,
                  ease: "power1.out",
                  duration: 0.35,
               },
            )

            tl.to(card, {
               opacity: 1,
               y: 0,
               ease: "none",
               duration: 0.3,
            })

            tl.to(card, {
               opacity: 0,
               y: -60,
               ease: "power1.out",
               duration: 0.35,
            })
         })
      },
      { scope: container },
   )
   return (
      <section
         ref={container}
         className="w-[var(--content-width)] h-max grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4! gap-8"
         id="types"
      >
         {submarines.map((data, index) => (
            <Card key={index} data={data} setSelectedData={setSelectedData} setIsOpen={setIsOpen} />
         ))}
         <TypeModal isOpen={isOpen} setIsOpen={setIsOpen} selectedData={selectedData} />
      </section>
   )
}

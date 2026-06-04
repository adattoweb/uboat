"use client"

import { IAboutCard } from "@/types/about.types"
import { about } from "@/constants/about"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"
import { ScrollConfig, useScrollReveal } from "@/hooks/useScrollReveal"
import { scrollTo } from "@/utils/scrollTo"

function Card({ title, description, Icon, href, image }: IAboutCard) {
   // first:-... для іконки субмарини, вона повинна по іншому відображатись, тому для неї особливий підхід. Враховуй це, коли будеш змінювати іконку ( ! )
   return (
      <li
         className="about-card flex h-100 opacity-0 bg-cover bg-center flex-1 first:fill-[rgba(var(--accent-stroke-color),0.9)] first:stroke-none! first:[&_.icon]:h-5 md:first:[&_.icon]:h-6 border border-[var(--stroke-color)]"
         style={{ backgroundImage: `url(${image})` }}
      >
         <div className="flex flex-col justify-end px-5 py-5 w-full h-full items-start" onClick={() => scrollTo(href)}>
            <Icon className="icon h-6 md:h-8 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
            <h4 className="mt-1 text-lg md:text-xl font-medium text-white">{title}</h4>
            <p className="mt-1 md:mt-1.5 text-light-gray text-sm md:text-base font-normal">{description}</p>
            <ArrowLongRightIcon className="mt-6 md:mt-8 w-8 md:w-10 stroke-[rgba(var(--accent-stroke-color),0.9)]" />
         </div>
      </li>
   )
}

export function About() {
   const container = useRef<HTMLUListElement | null>(null)
   const config = new ScrollConfig()
   config.withOffset = true
   useScrollReveal(container, ".about-card", config)
   return (
      <section className="w-[var(--content-width)]" id="start">
         <ul ref={container} className="grid grid-cols-1 md:grid-cols-2 min-[1601px]:grid-cols-4! gap-8">
            {about.map((card, index) => (
               <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  Icon={card.Icon}
                  href={card.href}
                  image={card.image}
               />
            ))}
         </ul>
      </section>
   )
}

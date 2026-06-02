"use client"

import { WithClassName } from "@/types/global"
import { AnchorIcon, SubmarineIcon } from "@/UI/icons/Icons"
import { CalendarDaysIcon, FlagIcon, UserIcon } from "@heroicons/react/24/outline"
import { useRef } from "react"
import { ScrollConfig, useScrollReveal } from "@/hooks/useScrollReveal"

// fill-[rgba(var(--accent-stroke-color),0.9)]
// stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2

type CardProps = React.PropsWithChildren &
   WithClassName & {
      header: string
      title: string
      description: string
   }

function Card({ children, className, header, title, description }: CardProps) {
   return (
      <div
         className={`${className} info-card grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] gap-x-6 items-center py-6 px-6 border border-[var(--stroke-color)]`}
      >
         {children}
         <h3 className="text-2xl xl:text-3xl text-[var(--accent-color)] font-medium text-nowrap">{header}</h3>
         <h4 className="text-base text-light-gray font-medium h-min">{title}</h4>
         <p className="text-sm text-light-gray font-normal h-min">{description}</p>
      </div>
   )
}

export function Info() {
   const container = useRef<HTMLDivElement | null>(null)
   const config = new ScrollConfig(95, 5, 30, true)
   useScrollReveal(container, ".info-card", config)
   return (
      <section
         ref={container}
         className="w-[var(--content-width)] grid grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3! 4xl:grid-cols-5! content-between border-[var(--stroke-color)] gap-10"
      >
         <Card header="> 20" title="COUNTRIES" description="Operated U-boats during the wars">
            <FlagIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
         <Card header="≈ 1000" title="SUBMARINES" description="Lost during WWII">
            <SubmarineIcon className="row-span-3 h-8 fill-[rgba(var(--accent-stroke-color),0.9)]" />
         </Card>
         <Card header="< 200" title="DIVING DEPTH" description="Maxium operation depth">
            <AnchorIcon className="row-span-3 h-10 fill-[rgba(var(--accent-stroke-color),0.9)]" />
         </Card>
         <Card header="> 400" title="YEARS" description="Of the U-boat history and evolution">
            <CalendarDaysIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
         <Card header="> 20000" title="PEOPLE" description="Died serving on submarines in WWII">
            <UserIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
      </section>
   )
}

"use client"

import { WithClassName } from "@/types/global"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { useRef } from "react"

interface PictureProps extends WithClassName {
   src: string
   alt: string
   style?: React.CSSProperties
}

function Picture({ className = "", src, alt, style }: PictureProps) {
   return (
      <Image
         src={src}
         alt={alt}
         className={`${className} gallery-picture w-full h-full object-cover border-[var(--stroke-color)] border`}
         width={768}
         height={768}
         draggable={false}
         style={style}
      />
   )
}

const areas = `
   "a1 a1 a1 a1 a2 a2"
   "a3 a3 a4 a4 a2 a2"
   "a3 a3 a9 a9 a6 a6"
   "a5 a5 a9 a9 a7 a7"
   "a5 a5 b4 b4 b2 b2"
   "a5 a5 b3 b3 b2 b2"
   "a8 a8 b1 b1 b1 b1"
`

export function Gallery() {
   const container = useRef<HTMLDivElement | null>(null)
   useGSAP(
      () => {
         gsap.utils.toArray<HTMLElement>(".gallery-picture").forEach(card => {
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: card,
                  start: `top 90%`,
                  end: "bottom 5%",
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
      <div
         ref={container}
         style={{ gridTemplateAreas: areas }}
         className="w-[var(--content-width)] grid grid-cols-6 auto-rows-[300px] gap-6"
      >
         <Picture src="/images/intro_background.png" alt="uboat" style={{ gridArea: "a1" }} />
         <Picture src="/images/type7c.png" alt="uboat" style={{ gridArea: "a2" }} />
         <Picture src="/images/uboat-1.png" alt="uboat" style={{ gridArea: "a3" }} />
         <Picture src="/images/uboat-3.png" alt="uboat" style={{ gridArea: "a4" }} />
         <Picture src="/images/uboat-4.png" alt="uboat" style={{ gridArea: "a5" }} />
         <Picture src="/images/uboat-2.png" alt="uboat" style={{ gridArea: "a6" }} />
         <Picture src="/images/uboat-5.png" alt="uboat" style={{ gridArea: "a7" }} />
         <Picture src="/images/type21.png" alt="uboat" style={{ gridArea: "a8" }} />
         <Picture src="/images/uboat-6.png" alt="uboat" style={{ gridArea: "a9" }} />
         <Picture src="/images/uboat-7.png" alt="uboat" style={{ gridArea: "b1" }} />
         <Picture src="/images/uboat-8.png" alt="uboat" style={{ gridArea: "b2" }} />
         <Picture src="/images/uboat-9.png" alt="uboat" style={{ gridArea: "b3" }} />
         <Picture src="/images/uboat-10.png" alt="uboat" style={{ gridArea: "b4" }} />
      </div>
   )
}

"use client"

import Image from "next/image"
import eagle from "@/assets/images/eagle.png"

import styles from "./PersonCard.module.css"
import { WithClassName } from "@/types/global"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

type CardProps = React.PropsWithChildren & WithClassName

function PersonCard({ className = "", children }: CardProps) {
   useGSAP(() => {
      gsap.utils.toArray<HTMLDivElement>(`.${styles.card}`).forEach(card => {
         const portrait = card.querySelector(`.${styles.portrait}`)
         const eagle = card.querySelector(`.${styles.eagle}`)
         const texts = card.querySelectorAll(".person-gsap")

         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: card,
               start: "top 95%",
               end: "bottom 10%",
               scrub: 0.8,
            },
            defaults: {
               ease: "none",
            },
         })

         tl.fromTo(
            card,
            {
               opacity: 0,
            },
            {
               opacity: 1,
               duration: 0.1,
            },
         )

         tl.fromTo(
            portrait,
            {
               y: 60,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               duration: 0.2,
            },
         )

         tl.fromTo(
            eagle,
            {
               y: 60,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 0.1,
               duration: 0.2,
            },
            "<0.1",
         )

         tl.fromTo(
            texts,
            {
               y: 20,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               stagger: 0.1,
               duration: 0.1,
            },
            "<0.1",
         )

         tl.to(card, {
            opacity: 0,
            y: -20,
            duration: 0.3,
         })
      })
   })
   return (
      <section
         className={`${styles.card} ${className} opacity-0 flex w-full h-auto min-[730px]:h-94 3xl:h-92 4xl:h-108! border border-[var(--stroke-color)]`}
      >
         <Image
            className={`${styles.eagle} hidden min-[730px]:block absolute opacity-0 mb-auto mt-14 lg:mt-10 3xl:mt-8! w-55 xl:w-60 3xl:w-70! 4xl:w-80!`}
            width={370}
            height={340}
            src={eagle.src}
            alt="background eagle"
            draggable={false}
         />
         <div
            className={`${styles.content} px-10 min-[730px]:px-6 lg:px-14 2xl:px-20 min-[730px]:gap-6 lg:gap-12 xl:gap-16 2xl:gap-20 flex flex-col-reverse min-[730px]:items-center min-[730px]:flex-row`}
         >
            {children}
         </div>
      </section>
   )
}

type PortraitProps = WithClassName & {
   width?: number
   height?: number
   src: string
   alt: string
}

function Portrait({ className = "", width = 400, height = 500, src, alt }: PortraitProps) {
   return (
      <Image
         className={`${styles.portrait} ${className} min-w-full min-[730px]:min-w-auto opacity-0 z-1 block self-start min-[730px]:self-end shrink-0`}
         width={width}
         height={height}
         src={src}
         alt={alt}
         draggable={false}
      />
   )
}

function Picture({ className = "", width = 400, height = 248, src, alt }: PortraitProps) {
   return (
      <Image
         className={`${className} person-gsap opacity-0 w-full! 2xl:h-40 4xl:h-50! object-cover`}
         width={width}
         height={height}
         src={src}
         alt={alt}
         draggable={false}
      />
   )
}

type TextProps = React.PropsWithChildren & WithClassName

function Text({ className = "", children }: TextProps) {
   return (
      <div
         className={`${styles.text} ${className} relative top-6 min-[730px]:static min-[730px]:top-0 min-[730px]:py-2 md:py-0 flex-1 flex flex-col`}
      >
         {children}
      </div>
   )
}

function SmallText({ className = "", children }: TextProps) {
   return <div className={`${className} 2xl:max-w-90 4xl:max-w-100! max-h-full hidden 3xl:block`}>{children}</div>
}

function SmallHeader({ className = "", children }: TextProps) {
   return (
      <h3 className={`${className} person-gsap opacity-0 mt-4 text-[var(--accent-color)] text-lg 4xl:text-xl!`}>
         {children}
      </h3>
   )
}

function Introduction({ className = "", children }: TextProps) {
   return (
      <p
         className={`${className}  person-gsap opacity-0 text-light-gray text-base min-[730px]:text-sm lg:text-base 4xl:text-lg!`}
      >
         {children}
      </p>
   )
}

function Name({ className = "", children }: TextProps) {
   return (
      <h1
         className={`${className} person-gsap opacity-0 text-gray-gradient text-3xl min-[730px]:text-2xl lg:text-3xl xl:text-4xl 4xl:text-5xl! font-semibold`}
      >
         {children}
      </h1>
   )
}

function Description({ className = "", children }: TextProps) {
   return (
      <p
         className={`${className}  person-gsap opacity-0 mt-2 text-light-gray text-base min-[730px]:text-sm xl:text-base 4xl:text-lg!`}
      >
         {children}
      </p>
   )
}

PersonCard.Portrait = Portrait

PersonCard.Text = Text
PersonCard.Introduction = Introduction
PersonCard.Name = Name
PersonCard.Description = Description
// Button

PersonCard.Picture = Picture
PersonCard.SmallText = SmallText
PersonCard.SmallHeader = SmallHeader

export default PersonCard

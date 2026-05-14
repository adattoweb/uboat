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
         const tl = gsap.timeline({
            scrollTrigger: {
               trigger: card,
               start: "top 80%",
            },
            defaults: {
               ease: "power1.out",
            },
         })

         tl.to(card, {
            opacity: 1,
            duration: 0.5,
         })

         tl.fromTo(
            card.querySelector(`.${styles.portrait}`),
            {
               y: 50,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               duration: 0.5,
            },
         )

         tl.fromTo(
            card.querySelector(`.${styles.eagle}`),
            {
               y: 50,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 0.1,
               duration: 0.5,
            },
         )

         tl.fromTo(
            card.querySelectorAll(".person-gsap"),
            {
               y: 50,
               opacity: 0,
            },
            {
               y: 0,
               opacity: 1,
               stagger: 0.25,
               duration: 0.5,
            },
            "<0.25",
         )

         tl.to(
            card.querySelector(".person-button"),
            {
               opacity: 1,
               duration: 0.5,
            },
            "-=1",
         )
      })
   })
   return (
      <section
         className={`${styles.card} ${className} opacity-0 flex w-full h-108 border border-[var(--stroke-color)] relative`}
      >
         <Image
            className={`${styles.eagle} absolute opacity-0 mt-8 mb-auto w-80`}
            width={370}
            height={340}
            src={eagle.src}
            alt="background eagle"
            draggable={false}
         />
         <div className={`${styles.content} flex px-20 gap-20 items-center`}>{children}</div>
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
         className={`${styles.portrait} ${className} opacity-0 z-1 max-w-full h-max! block self-end`}
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
         className={`${className} person-gsap opacity-0 w-full! h-50 object-cover`}
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
   return <div className={`${styles.text} ${className} flex-1 flex flex-col`}>{children}</div>
}

function SmallText({ className = "", children }: TextProps) {
   return <div className={`${className} max-w-100 max-h-full`}>{children}</div>
}

function SmallHeader({ className = "", children }: TextProps) {
   return <h3 className={`${className} person-gsap opacity-0 mt-4 text-[var(--accent-color)] text-xl`}>{children}</h3>
}

function Introduction({ className = "", children }: TextProps) {
   return <p className={`${className}  person-gsap opacity-0 text-light-gray text-lg`}>{children}</p>
}

function Name({ className = "", children }: TextProps) {
   return (
      <h1 className={`${className}  person-gsap opacity-0 text-gray-gradient text-5xl font-semibold`}>{children}</h1>
   )
}

function Description({ className = "", children }: TextProps) {
   return <p className={`${className}  person-gsap opacity-0 mt-2 text-light-gray text-lg`}>{children}</p>
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

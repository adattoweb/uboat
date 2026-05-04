import Image from "next/image"
import eagle from "@/assets/images/eagle.png"
import donitz from "@/assets/images/donitz.png"
import uboatInSea from "@/assets/images/uboat_in_sea.png"
import Button from "@/UI/Button/Button"

import styles from "./PersonCard.module.css"
import { WithClassName } from "@/types/global"

type CardProps = React.PropsWithChildren & WithClassName

function PersonCard({ className = "", children }: CardProps) {
   return (
      <section className={`${styles.card} ${className} flex w-full h-108 border border-[var(--stroke-color)] relative`}>
         <Image
            className={`${styles.eagle} absolute opacity-10 mt-8 mb-auto w-80`}
            width={370}
            height={340}
            src={eagle}
            alt="background eagle"
            draggable={false}
         />
         <div className={`${styles.content} flex px-20 gap-20 items-center`}>
            {children}
            <div className={`${styles.text} flex-1 flex flex-col`}>
               <p className="text-light-gray text-lg">THE GRAND ADMIRAL</p>
               <h1 className="text-gray-gradient text-5xl font-semibold">KARL DÖNITZ</h1>
               <p className="mt-2 text-light-gray text-lg">
                  Karl Dönitz led Germany’s U-boat fleet and made submarine warfare a central strategy in WWII. He
                  introduced the “wolfpack” tactic, coordinating attacks on Allied convoys in the Atlantic.
               </p>
               <Button className={`${styles.button} mt-10`}>
                  <Button.Text>LEARN MORE</Button.Text>
               </Button>
            </div>
            <div className="max-w-100 max-h-full">
               <Image
                  className="w-full! h-50 object-cover"
                  width={440}
                  height={248}
                  src={uboatInSea}
                  alt="uboat in sea"
                  draggable={false}
               />
               <h3 className="mt-4 text-[var(--accent-color)] text-xl">KRIEGSMARINE</h3>
               <p className="mt-2 text-light-gray text-lg">
                  The U-boat force on Nazi Germany played a critical role in the naval war during World War II.
               </p>
            </div>
         </div>
      </section>
   )
}

type PortraitProps = WithClassName & {
   width?: number
   height?: number
   draggable?: boolean
   src: string
   alt: string
}

function Portrait({ className, width = 400, height = 500, draggable = false, src, alt }: PortraitProps) {
   return (
      <Image
         className={`${styles.portrait} ${className} z-1 max-w-full h-max! block self-end`}
         width={width}
         height={height}
         src={src}
         alt={alt}
         draggable={draggable}
      />
   )
}

function Image({ className, width = 400, height = 248, draggable = false, src, alt }: PortraitProps) {
   return (
      <Image
         className={`${className} w-full! h-50 object-cover`}
         width={width}
         height={height}
         src={src}
         alt={alt}
         draggable={draggable}
      />
   )
}

type TextProps = React.PropsWithChildren & WithClassName

function Text({ className, children }: TextProps) {
   return <div className={`${styles.text} ${className} flex-1 flex flex-col`}>{children}</div>
}

function SmallText({ className, children }: TextProps) {
   return <div className={`${className} max-w-100 max-h-full`}>{children}</div>
}

function SmallHeader({ className, children }: TextProps) {
   return <h3 className={`${className} mt-4 text-[var(--accent-color)] text-xl`}>{children}</h3>
}

function Introduction({ className, children }: TextProps) {
   return <p className={`${className} text-light-gray text-lg`}>{children}</p>
}

function Name({ className, children }: TextProps) {
   return <h1 className={`${className} text-gray-gradient text-5xl font-semibold`}>{children}</h1>
}

function Description({ className, children }: TextProps) {
   return <p className={`${className} mt-2 text-light-gray text-lg`}>{children}</p>
}

PersonCard.Portrait = Portrait
PersonCard.Image = Image
PersonCard.Text = Text
PersonCard.SmallText = SmallText
PersonCard.SmallHeader = SmallHeader
PersonCard.Introduction = Introduction
PersonCard.Name = Name
PersonCard.Description = Description

export default PersonCard

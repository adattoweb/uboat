"use client"

import { WithClassName } from "@/types/global"
import Image from "next/image"
import { useRef, useState } from "react"
import { PictureData, pictures } from "@/constants/gallery"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import { GalleryModal } from "@/UI/Modal/GalleryModal"

interface PictureProps extends WithClassName {
   src: string
   alt: string
   style?: React.CSSProperties
   data: PictureData
   setSelectedData: React.Dispatch<React.SetStateAction<PictureData | null>>
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function Picture({ className = "", src, alt, style, data, setSelectedData, setIsOpen }: PictureProps) {
   const onClick = () => {
      setSelectedData(data)
      setIsOpen(true)
   }

   return (
      <div style={style} className="overflow-hidden border border-[var(--stroke-color)] gallery-picture">
         <Image
            src={src}
            alt={alt}
            width={1024}
            height={1024}
            draggable={false}
            onClick={onClick}
            className={`
               ${className}
               w-full
               h-full
               object-cover
               select-none
               cursor-pointer
               transition-transform
               duration-450
               ease-out
               hover:scale-110
            `}
         />
      </div>
   )
}

const areas = `
   "a1 a1 a1 a1 a2 a2"
   "a3 a3 a4 a4 a2 a2"
   "a3 a3 a5 a5 a6 a6"
   "a8 a8 a5 a5 a7 a7"
   "a8 a8 b1 b1 b2 b2"
   "a8 a8 b3 b3 b2 b2"
   "a9 a9 b4 b4 b4 b4"
   "b5 b5 b5 b5 b6 b6"
   "b7 b7 b7 b8 b8 b8"
   "b9 b9 b9 b8 b8 b8"
   "c1 c1 c1 c2 c2 c2"
   "c1 c1 c1 c3 c3 c3"
   "c4 c4 c4 c4 c4 c4"
`

export function Gallery() {
   const container = useRef<HTMLDivElement | null>(null)

   useScrollReveal({
      container,
      selector: ".gallery-picture",
   })

   const [selectedData, setSelectedData] = useState<PictureData | null>(null)
   const [isOpen, setIsOpen] = useState(false)
   return (
      <div
         ref={container}
         style={{ gridTemplateAreas: areas }}
         className="w-[var(--content-width)] grid grid-cols-6 auto-rows-[300px] gap-6"
      >
         <GalleryModal isOpen={isOpen} setIsOpen={setIsOpen} selectedData={selectedData} />
         {pictures.map((picture, index) => {
            const row = String.fromCharCode(97 + Math.floor(index / 9))
            const column = (index % 9) + 1

            return (
               <Picture
                  key={index}
                  src={picture.src}
                  alt="uboat"
                  style={{ gridArea: `${row}${column}` }}
                  data={picture}
                  setSelectedData={setSelectedData}
                  setIsOpen={setIsOpen}
               />
            )
         })}
      </div>
   )
}

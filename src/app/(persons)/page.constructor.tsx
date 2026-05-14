import { WithClassName } from "@/types/global"
import Image from "next/image"

interface ConstructorProps extends WithClassName {
   children: React.ReactNode
}

function Constructor({ className, children }: ConstructorProps) {
   return <div className={`${className} w-[var(--content-width)] mx-auto mt-40 `}>{children}</div>
}

interface ConstructorElement extends WithClassName {
   children: React.ReactNode
}

interface PictureProps {
   width: number
   height: number
   className?: string
   imageClassName?: string
   src: string
   alt: string
}

function Picture({ width, height, className, imageClassName, src, alt }: PictureProps) {
   return (
      <div className={`${className} flex flex-col gap-2 text-lg`}>
         <Image width={width} height={height} src={src} alt={alt} className={`${imageClassName}`} />
         <p className="text-light-gray">{alt}</p>
      </div>
   )
}

function Header({ className = "", children }: ConstructorElement) {
   return <h2 className={`${className} text-white text-2xl font-medium mt-4`}>{children}</h2>
}

function Parapgraph({ className = "", children }: ConstructorElement) {
   return <p className={`${className} text-light-gray text-lg font-normal mt-1`}>{children}</p>
}

function Introduction({ className = "", children }: ConstructorElement) {
   return <p className={`${className} text-light-gray text-lg`}>{children}</p>
}

function Name({ className = "", children }: ConstructorElement) {
   return <h1 className={`${className} text-gray-gradient text-5xl font-semibold`}>{children}</h1>
}

Constructor.Name = Name
Constructor.Introduction = Introduction
Constructor.Picture = Picture
Constructor.Header = Header
Constructor.Paragraph = Parapgraph

export default Constructor

import { WithClassName } from "@/types/global"
import Image from "next/image"

interface ConstructorProps extends WithClassName {
   children: React.ReactNode
}

function Constructor({ className, children }: ConstructorProps) {
   return <div className={`${className} w-[var(--content-width)] mx-auto flex flex-col mt-30`}>{children}</div>
}

interface ImageProps extends WithClassName {
   src: string
   alt?: string
}

function Banner({ className, src }: ImageProps) {
   return (
      <div
         style={{ backgroundImage: `url(${src})` }}
         className={`${className} w-screen bg-cover absolute left-0 bg-no-repeat bg-center h-100`}
      ></div>
   )
}

interface ConstructorElement extends WithClassName {
   children: React.ReactNode
}

interface PictureProps {
   width: number
   height: number
   className: string
   src: string
   alt: string
}

function Picture({ width, height, className, src, alt }: PictureProps) {
   return <Image width={width} height={height} src={src} alt={alt} className={`${className}`} />
}

function Header({ children, className }: ConstructorElement) {
   return <h2 className={`${className} text-white text-2xl font-medium mt-4`}>{children}</h2>
}

function Parapgraph({ children, className }: ConstructorElement) {
   return <p className={`${className} text-light-gray text-lg font-normal mt-1`}>{children}</p>
}

function Gallery() {}

Constructor.Banner = Banner
Constructor.Gallery = Gallery
Constructor.Picture = Picture
Constructor.Header = Header
Constructor.Paragraph = Parapgraph

export default Constructor

import { WithClassName } from "@/types/global"
import Image from "next/image"

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
         className={`${className} w-full h-full object-cover border-[var(--stroke-color)] border`}
         width={1024}
         height={1024}
         draggable={false}
         style={style}
      />
   )
}

const areas = `
   "a1 a1 a1 a1 a1 a1"
   "a2 a2 a2 a2 a2 a2"
   "a3 a3 a4 a4 a4 a4"
   "a3 a3 a5 a5 a5 a5"
`

export function Gallery() {
   return (
      <div
         style={{ gridTemplateAreas: areas }}
         className="w-[var(--content-width)] grid grid-cols-6 auto-rows-[300px] gap-6"
      >
         <Picture src="/images/das-boot.png" alt="das boot" style={{ gridArea: "a1" }} />
         <Picture src="/images/das-boot.png" alt="das boot" style={{ gridArea: "a2" }} />
         <Picture src="/images/das-boot.png" alt="das boot" style={{ gridArea: "a3" }} />
         <Picture src="/images/das-boot.png" alt="das boot" style={{ gridArea: "a4" }} />
         <Picture src="/images/das-boot.png" alt="das boot" style={{ gridArea: "a5" }} />
      </div>
   )
}

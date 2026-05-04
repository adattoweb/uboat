import Button from "@/UI/Button/Button"
import { submarines } from "@/constants/submarines"
import { ISubmarineCard } from "@/types/submarines.types"
import Image from "next/image"

function Card({ title, description, href, image }: ISubmarineCard) {
   return (
      <div className="flex flex-col h-100 flex-1 border border-[var(--stroke-color)]">
         <Image width={400} height={300} src={image} alt={`image of uboat ${title}`} className="w-full h-52" />
         <div className="relative flex flex-col items-center bottom-8 w-full h-full px-6">
            <h3 className="text-xl font-medium text-white">{title}</h3>
            <p className="mt-5 text-light-gray font-medium text-base">{description}</p>
            <Button className="mt-auto" href={href}>
               <Button.Text>More</Button.Text>
            </Button>
         </div>
      </div>
   )
}

export function Submarines() {
   return (
      <div className="w-[var(--content-width)] flex h-max justify-between gap-8">
         {submarines.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} href={card.href} image={card.image} />
         ))}
      </div>
   )
}

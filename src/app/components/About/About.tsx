import Link from "next/link"
import { IAboutCard } from "@/types/about.types"
import { about } from "@/constants/about"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

function Card({ title, description, Icon, href, image }: IAboutCard) {
   // first:-... для іконки субмарини, вона повинна по іншому відображатись, тому для неї особливий підхід. Враховуй це, коли будеш змінювати іконку ( ! )
   return (
      <li
         className="flex h-100 bg-cover bg-center flex-1 first:fill-[rgba(var(--accent-stroke-color),0.9)] first:stroke-none! first:[&_.icon]:h-6 border border-[var(--stroke-color)]"
         style={{ backgroundImage: `url(${image})` }}
      >
         <Link
            className="flex flex-col justify-end px-5 py-5 w-full h-full items-start"
            href={href}
            target="_blank"
            draggable={false}
         >
            <Icon className="icon h-8 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
            <h4 className="mt-1 text-xl font-medium text-white">{title}</h4>
            <p className="mt-1.5 text-light-gray text-base font-normal">{description}</p>
            <ArrowLongRightIcon className="mt-8 w-10 stroke-[rgba(var(--accent-stroke-color),0.9)]" />
         </Link>
      </li>
   )
}

export function About() {
   return (
      <section className="w-[var(--content-width)]">
         <ul className="flex gap-8">
            {about.map((card, index) => (
               <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  Icon={card.Icon}
                  href={card.href}
                  image={card.image}
               />
            ))}
         </ul>
      </section>
   )
}

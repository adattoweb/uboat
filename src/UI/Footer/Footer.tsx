import { APP } from "@/constants/app"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"

interface LinkProps {
   href: string
   name: string
}

function FooterLink({ href, name }: LinkProps) {
   return (
      <li className="text-light-gray underline underline-offset-4 font-normal text-sm md:text-base text-nowrap">
         <Link href={href} draggable={false}>
            {name}
         </Link>
      </li>
   )
}

export function Footer() {
   return (
      <footer className="flex flex-col sm:flex-row w-[var(--content-width)] mx-auto p-6 md:p-8 border border-[var(--stroke-color)] gap-2 sm:gap-10 mt-10">
         <div className="flex flex-col max-w-130 text-center sm:text-start">
            <h1 className="text-white text-xl md:text-2xl 2xl:text-3xl font-semibold">{APP.NAME}</h1>
            <p className="text-sm md:text-base lg:text-lg text-light-gray font-normal mt-1">
               HISTORY. TECHNOLOGY. LEGACY
            </p>
            <p className="hidden sm:block text-sm lg:text-base text-light-gray font-normal mt-2 h-full">
               Dedicated to the history, techology and legacy, of the U-boats and the men who served beneath the waves.
            </p>
         </div>
         <div className="sm:ml-auto sm:pl-10">
            <h3 className="text-white text-base lg:text-lg font-medium xl:mb-1 text-center hidden sm:block">
               NAVIGATION
            </h3>
            <ul className="flex flex-col gap-2 items-center">
               {Object.keys(ROUTES).map(key => (
                  <FooterLink key={key} href={ROUTES[key].ROUTE} name={ROUTES[key].NAME} />
               ))}
            </ul>
         </div>
      </footer>
   )
}

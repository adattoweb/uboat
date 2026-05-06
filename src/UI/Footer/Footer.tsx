import { APP } from "@/constants/app"
import { ROUTES } from "@/constants/routes"
import Link from "next/link"

interface LinkProps {
   href: string
   name: string
}

function FooterLink({ href, name }: LinkProps) {
   return (
      <li className="text-white font-normal text-base">
         <Link href={href} draggable={false}>
            {name}
         </Link>
      </li>
   )
}

export function Footer() {
   return (
      <footer className="flex w-[var(--content-width)] mx-auto p-8 border border-[var(--stroke-color)] gap-10">
         <div className="flex flex-col max-w-130">
            <h1 className="text-white text-3xl font-semibold">{APP.NAME}</h1>
            <p className="text-xl text-light-gray font-normal mt-1">HISTORY. TECHNOLOGY. LEGACY</p>
            <p className="text-base text-light-gray font-normal mt-2 h-full">
               Dedicated to the history, techology and legacy, of the U-boats and the men who served beneath the waves.
            </p>
         </div>
         <div className="ml-auto">
            <h3 className="text-white text-xl font-medium mb-2">NAVIGATION</h3>
            <ul className="flex flex-col gap-2">
               {Object.keys(ROUTES).map(key => (
                  <FooterLink key={key} href={ROUTES[key].ROUTE} name={ROUTES[key].NAME} />
               ))}
            </ul>
         </div>
         <div>
            <h3 className="text-white text-xl font-medium mb-2">RESOURCES</h3>
            <ul className="flex flex-col gap-2">
               {Object.keys(ROUTES).map(key => (
                  <FooterLink key={key} href={ROUTES[key].ROUTE} name={ROUTES[key].NAME} />
               ))}
            </ul>
         </div>
      </footer>
   )
}

import { ROUTES } from "@/constants/routes"
import Link from "next/link"

interface ItemProps extends React.PropsWithChildren {
   href: string
}

function Item({ href, children }: ItemProps) {
   return (
      <Link className="text-white text-sm min-[360px]:text-base font-normal" href={href}>
         {children}
      </Link>
   )
}

export function Navigation() {
   return (
      <nav className="flex items-content gap-4 sm:gap-6 md:gap-8 text-lg self-center md:ml-15 min-[1600px]:ml-40">
         {Object.keys(ROUTES).map(key => (
            <Item key={key} href={ROUTES[key].ROUTE}>
               {ROUTES[key].NAME}
            </Item>
         ))}
      </nav>
   )
}

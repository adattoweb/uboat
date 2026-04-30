import { ROUTES } from "@/constants/routes"
import Link from "next/link"

interface ItemProps extends React.PropsWithChildren {
   href: string
}

function Item({ href, children }: ItemProps) {
   return (
      <Link className="text-white font-normal" href={href}>
         {children}
      </Link>
   )
}

export function Navigation() {
   return (
      <nav className="flex items-content gap-9 text-lg self-center ml-40">
         {Object.keys(ROUTES).map(key => (
            <Item key={key} href={ROUTES[key].ROUTE}>
               {ROUTES[key].NAME}
            </Item>
         ))}
      </nav>
   )
}

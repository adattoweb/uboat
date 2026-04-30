import { APP } from "@/constants/app"
import Link from "next/link"
import { AnchorIcon } from "../icons/Icons"
import { Navigation } from "./Navigation"

export function Header() {
   return (
      <header className="absolute bg-linear-to-b from-[#0617202e] to-transparent w-screen px-40 py-6.5 flex items-center">
         <h1 className="text-3xl font-bold text-white">{APP.NAME}</h1>
         <Navigation />
         <Link className="p-2 border-white border-2 rounded-full ml-auto" href={APP.GITHUB} target="_blank">
            <AnchorIcon width={28} height={28} className="fill-white" />
         </Link>
      </header>
   )
}

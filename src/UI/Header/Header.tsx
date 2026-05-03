import { APP } from "@/constants/app"
import Link from "next/link"
import { AnchorIcon } from "../icons/Icons"
import { Navigation } from "./Navigation"

export function Header() {
   return (
      <header className="absolute bg-linear-to-b from-[#06172061] to-transparent w-screen py-6.5 flex items-center">
         <div className="w-[var(--content-width)] mx-auto flex">
            <h1 className="text-3xl font-medium text-white">{APP.NAME}</h1>
            <Navigation />
            <Link
               className="p-2 border-white border-2 rounded-full ml-auto"
               href={APP.GITHUB}
               target="_blank"
               draggable={false}
            >
               <AnchorIcon width={28} height={28} className="fill-white" />
            </Link>
         </div>
      </header>
   )
}

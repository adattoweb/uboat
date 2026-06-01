import { APP } from "@/constants/app"
import Link from "next/link"
import { AnchorIcon } from "../icons/Icons"
import { Navigation } from "./Navigation"

export function Header() {
   return (
      <header className="absolute bg-linear-to-b from-[#06172061] to-transparent w-screen py-6.5 flex items-center z-12">
         <div className="w-[var(--content-width)] mx-auto flex justify-center sm:justify-start">
            <h1 className="text-3xl font-medium text-white hidden md:block">{APP.NAME}</h1>
            <Navigation />
            <Link
               className="p-1.5 2xl:p-2 border-white border-2 rounded-full ml-auto hidden sm:block"
               href={APP.GITHUB}
               target="_blank"
               draggable={false}
            >
               <AnchorIcon width={28} height={28} className="fill-white w-6 h-6 2xl:w-7 2xl:h-7" />
            </Link>
         </div>
      </header>
   )
}

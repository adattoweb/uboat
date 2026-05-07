"use client"

import { useCheckContext } from "@/hooks/useCheckContext"
import { WithClassName } from "@/types/global"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { createContext } from "react"
import { createPortal } from "react-dom"

interface ModalElementProps extends WithClassName {
   children: React.ReactNode
}

interface ModalContextProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ModalProps extends ModalContextProps {
   children: React.ReactNode
}

const ModalContext = createContext<ModalContextProps | null>(null)

function Modal({ children, isOpen, setIsOpen }: ModalProps) {
   const body = document.body

   const value = {
      isOpen,
      setIsOpen,
   }

   if (!body) return null
   return createPortal(
      <ModalContext.Provider value={value}>
         <div className="center fixed! w-200 h-100 border border-[var(--stroke-color)] bg-[#0617207b] backdrop-blur-sm py-6 px-8">
            {children}
         </div>
      </ModalContext.Provider>,
      body,
   )
}

function Header({ className, children }: ModalElementProps) {
   return <h2 className={`${className} text-white text-2xl`}>{children}</h2>
}

function Text({ className, children }: ModalElementProps) {
   return <p className={`${className} text-white text-light-gray`}>{children}</p>
}

function XMark({ className }: WithClassName) {
   const { setIsOpen } = useCheckContext<ModalContextProps>(ModalContext)
   return (
      <XMarkIcon
         className={`${className} absolute right-5 top-5 w-8 h-8 stroke-white cursor-pointer`}
         onClick={() => setIsOpen(false)}
      />
   )
}

Modal.Header = Header
Modal.Text = Text
Modal.XMark = XMark

export default Modal

import { XMarkIcon } from "@heroicons/react/24/outline"
import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
   children: ReactNode
   isOpen: boolean
   onClose: () => void
   className?: string
}

function Modal({ children, isOpen, onClose, className = "" }: ModalProps) {
   if (!isOpen) return null

   return createPortal(
      <div className="w-screen h-screen fixed bg-black/20 backdrop-blur-xs" onClick={onClose}>
         <div
            className={`w-200 h-150 fixed center gray-gradient border border-[var(--stroke-color)] p-4 box-border ${className}`}
            onClick={e => e.stopPropagation()}
         >
            {children}
         </div>
      </div>,
      document.body,
   )
}

interface CrossProps {
   onClose: () => void
}

function Cross({ onClose }: CrossProps) {
   return <XMarkIcon onClick={onClose} className="w-7 absolute right-2 top-2 stroke-white cursor-pointer" />
}

Modal.Cross = Cross

export default Modal

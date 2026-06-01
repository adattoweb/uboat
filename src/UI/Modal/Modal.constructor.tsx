"use client"

import { useGSAP } from "@gsap/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import gsap from "gsap"
import { ReactNode, useRef } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
   children: ReactNode
   isOpen: boolean
   onClose: () => void
   className?: string
}

function Modal({ children, isOpen, onClose, className = "" }: ModalProps) {
   const overlayRef = useRef<HTMLDivElement | null>(null)
   const modalRef = useRef<HTMLDivElement | null>(null)

   useGSAP(
      () => {
         if (!overlayRef.current || !modalRef.current) return

         if (isOpen) {
            gsap.set([overlayRef.current, modalRef.current], {
               display: "block",
            })

            gsap.to(overlayRef.current, {
               opacity: 1,
               duration: 0.25,
            })

            gsap.to(modalRef.current, {
               opacity: 1,
               duration: 0.3,
            })
         } else {
            gsap.to(modalRef.current, {
               opacity: 0,
               duration: 0.25,
            })

            gsap.to(overlayRef.current, {
               opacity: 0,
               duration: 0.25,
               onComplete: () => {
                  gsap.set([overlayRef.current, modalRef.current], {
                     display: "none",
                  })
               },
            })
         }
      },
      { dependencies: [isOpen] },
   )

   return createPortal(
      <>
         <div
            ref={overlayRef}
            className="fixed inset-0 hidden h-screen w-screen bg-black/20 opacity-0 backdrop-blur-xs z-10"
            onClick={onClose}
         />

         <div
            ref={modalRef}
            className={`${className} fixed center hidden box-border w-[var(--content-width)] border border-[var(--stroke-color)] opacity-0 gray-gradient md:w-170 xl:w-200 z-11`}
            onClick={e => e.stopPropagation()}
         >
            {children}
         </div>
      </>,
      document.body,
   )
}

interface CrossProps {
   onClose: () => void
}

function Cross({ onClose }: CrossProps) {
   return <XMarkIcon onClick={onClose} className="absolute top-2 right-2 w-7 cursor-pointer stroke-white" />
}

Modal.Cross = Cross

export default Modal

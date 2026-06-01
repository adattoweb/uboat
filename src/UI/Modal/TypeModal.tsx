import Modal from "./Modal.constructor"
import Image from "next/image"
import Link from "next/link"
import { Submarine } from "@/types/submarines.types"

interface TypeModalProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   selectedData: Submarine | null
}

export function TypeModal({ isOpen, setIsOpen, selectedData }: TypeModalProps) {
   const onClose = () => setIsOpen(false)

   if (selectedData === null) return

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <Image width={1024} height={1024} src={selectedData.preview} alt="uboat image" className="" />
         <div className="absolute box-border px-4 pb-4 bottom-2 flex flex-col text-light-gray text-base">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-gradient">{selectedData.name.toUpperCase()}</h2>
            <p className="md:mt-0.5">{selectedData.description}</p>
            <p>Author: {selectedData.name}</p>
         </div>
      </Modal>
   )
}

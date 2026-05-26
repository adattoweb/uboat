import { PictureData } from "@/constants/gallery"
import Modal from "./Modal.constructor"
import Image from "next/image"

interface GalleryModalProps {
   isOpen: boolean
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
   selectedData: PictureData | null
}

export function GalleryModal({ isOpen, setIsOpen, selectedData }: GalleryModalProps) {
   const onClose = () => setIsOpen(false)

   if (selectedData === null) return

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         {/* <Modal.Cross onClose={onClose} /> */}
         <Image width={1024} height={1024} src={selectedData.src} alt="uboat image" className="" />
         <h2>{selectedData.name}</h2>
      </Modal>
   )
}

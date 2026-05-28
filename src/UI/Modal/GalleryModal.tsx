import { PictureData } from "@/constants/gallery"
import Modal from "./Modal.constructor"
import Image from "next/image"
import Button from "@/UI/Button/Button"

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
         <div className="relative bottom-8 left-2">
            <h2 className="text-xl text-gray-gradient">{selectedData.name}</h2>
            <p>{selectedData.description}</p>
            <p className="text-gray-gradient">Author: {selectedData.author}</p>
            <Button href={selectedData.source} className="mt-4">
               <Button.Text>Source</Button.Text>
            </Button>
         </div>
      </Modal>
   )
}

import Modal from "./Modal.constructor"
import Image from "next/image"
import { Submarine, SubmarineContent } from "@/types/submarines.types"

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
         <div className="relative">
            <Image width={800} height={500} src={selectedData.preview} alt="uboat image" draggable={false} />
            <div className="absolute box-border px-4 bottom-2 flex flex-col text-light-gray text-base">
               <h2 className="text-xl md:text-2xl font-semibold text-gray-gradient">
                  {selectedData.name.toUpperCase()}
               </h2>
               <p className="hidden sm:block md:mt-0.5">{selectedData.description}</p>
            </div>
         </div>
         <ul className="sm:columns-2 pt-2 pb-4 pr-4">
            {(Object.keys(selectedData.content) as Array<keyof SubmarineContent>).map((parameter, index) => (
               <li key={index} className="text-light-gray list-disc ml-8">
                  {parameter}: {selectedData.content[parameter]}
               </li>
            ))}
         </ul>
         <div className="sm:columns-2 gap-3 p-6">
            {selectedData.images.map((src, index) => (
               <div key={index} className="break-inside-avoid mb-3 w-full max-w-92">
                  <Image
                     src={src}
                     width={370}
                     height={300}
                     alt={`Image of ${selectedData.name} U-Boat`}
                     draggable={false}
                  />
               </div>
            ))}
         </div>
      </Modal>
   )
}

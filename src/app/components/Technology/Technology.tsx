import Button from "@/UI/Button/Button"

import submarine from "@/assets/images/submarine.png"
import Image from "next/image"

export function Technology() {
   return (
      <section className="w-[var(--content-width)] flex border border-[var(--stroke-color)] py-16 px-12 gap-14 h-max items-center">
         <div className="mt-auto max-w-200">
            <h4 className="text-xl text-light-gray font-normal mb-2">AN ICON OF WARFARE</h4>
            <h2 className="text-8xl text-gray-gradient font-semibold mb-4">UBOAT TECHNOLOGY</h2>
            <p className="text-xl text-light-gray font-normal mb-6">
               German U-boats were a result of engineering precision, innovation and ruthless efficiency.
            </p>
            <Button>
               <Button.Text>VIEW IN DETAIL</Button.Text>
            </Button>
         </div>
         <Image
            width={1660}
            height={550}
            src={submarine}
            alt="submarine"
            className="max-w-full h-max! block"
            draggable={false}
         />
      </section>
   )
}

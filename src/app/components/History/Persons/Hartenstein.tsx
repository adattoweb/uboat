"use client"

import PersonCard from "@/UI/PersonCard/PersonCard"

import laconia from "@/assets/images/laconia.jpg"
import hartenstein from "@/assets/images/hartenstein.png"

import Button from "@/UI/Button/Button"
import styles from "@/UI/PersonCard/PersonCard.module.css"

export function Hartenstein() {
   return (
      <PersonCard>
         <PersonCard.Portrait
            className="w-60 sm:w-64 md:w-68 lg:w-70 xl:w-80 4xl:w-94! min-[730px]:ml-8"
            src={hartenstein.src}
            alt="Commander of U-156"
         />
         <PersonCard.Text>
            <PersonCard.Introduction>COMMANDER OF U-156</PersonCard.Introduction>
            <PersonCard.Name>WERNER HARTENSTEIN</PersonCard.Name>
            <PersonCard.Description>
               Werner Hartenstein was a respected U-boat commander of WWII, remembered for his leadership during the
               Laconia incident and for attempting to rescue hundreds of survivors at sea.
            </PersonCard.Description>
            <Button className={`${styles.button} mt-6 xl:mt-8 3xl:mt-10 person-button opacity-0`} href="/hartenstein">
               <Button.Text>LEARN MORE</Button.Text>
            </Button>
         </PersonCard.Text>
         <PersonCard.SmallText>
            <PersonCard.Picture src={laconia.src} alt="uboat in sea" />
            <PersonCard.SmallHeader>LACONIA INCIDENT</PersonCard.SmallHeader>
            <PersonCard.Description>
               The Laconia incident became one of the most controversial naval events of WWII, when a German U-boat
               halted combat operations to rescue survivors after the sinking of the RMS Laconia.
            </PersonCard.Description>
         </PersonCard.SmallText>
      </PersonCard>
   )
}

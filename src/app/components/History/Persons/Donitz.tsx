"use client"

import PersonCard from "@/UI/PersonCard/PersonCard"

import donitz from "@/assets/images/donitz.png"
import uboatInSea from "@/assets/images/uboat_in_sea.png"

import Button from "@/UI/Button/Button"
import styles from "@/UI/PersonCard/PersonCard.module.css"

export function Donitz() {
   return (
      <PersonCard>
         <PersonCard.Portrait src={donitz.src} alt="Commander of Kriegsmarine" />
         <PersonCard.Text>
            <PersonCard.Introduction>THE GRAND ADMIRAL</PersonCard.Introduction>
            <PersonCard.Name>KARL DÖNITZ</PersonCard.Name>
            <PersonCard.Description>
               Karl Dönitz led Germany’s U-boat fleet and made submarine warfare a central strategy in WWII. He
               introduced the “wolfpack” tactic, coordinating attacks on Allied convoys in the Atlantic.
            </PersonCard.Description>
            <Button className={`${styles.button} mt-10`} href="/donitz">
               <Button.Text>LEARN MORE</Button.Text>
            </Button>
         </PersonCard.Text>
         <PersonCard.SmallText>
            <PersonCard.Picture src={uboatInSea.src} alt="uboat in sea" />
            <PersonCard.SmallHeader>KRIEGSMARINE</PersonCard.SmallHeader>
            <PersonCard.Description>
               The U-boat force on Nazi Germany played a critical role in the naval war during World War II.
            </PersonCard.Description>
         </PersonCard.SmallText>
      </PersonCard>
   )
}

import PersonCard from "@/UI/PersonCard/PersonCard"

import kretschmer from "@/assets/images/kretschmer.png"
import u_23 from "@/assets/images/u-23.png"

import Button from "@/UI/Button/Button"
import styles from "@/UI/PersonCard/PersonCard.module.css"

export function Kretschmer() {
   return (
      <PersonCard>
         <PersonCard.Portrait className="w-120" src={kretschmer.src} alt="Commander of Kriegsmarine" />
         <PersonCard.Text>
            <PersonCard.Introduction>THE MOST SUCCESSFUL COMMANDER</PersonCard.Introduction>
            <PersonCard.Name>OTTO KRETSCHMER</PersonCard.Name>
            <PersonCard.Description>
               Otto Kretschmer was the most successful U-boat commander of WWII, sinking 47 ships with a total tonnage
               of over 270,000 tons — the highest of any submariner. He became known for his precise and efficient
               tactics, often described as “one torpedo — one ship.”
            </PersonCard.Description>
            <Button className={`${styles.button} mt-10`}>
               <Button.Text>LEARN MORE</Button.Text>
            </Button>
         </PersonCard.Text>
         <PersonCard.SmallText>
            <PersonCard.Picture src={u_23.src} alt="uboat in sea" />
            <PersonCard.SmallHeader>U-23</PersonCard.SmallHeader>
            <PersonCard.Description>
               The submarine on which Otto Kretschmer began his command career during World War II.
            </PersonCard.Description>
         </PersonCard.SmallText>
      </PersonCard>
   )
}

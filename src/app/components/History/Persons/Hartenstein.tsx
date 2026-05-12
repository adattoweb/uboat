import PersonCard from "@/UI/PersonCard/PersonCard"

import laconia from "@/assets/images/laconia.jpg"

import Button from "@/UI/Button/Button"
import styles from "@/UI/PersonCard/PersonCard.module.css"

export function Hartenstein() {
   return (
      <PersonCard>
         <PersonCard.Portrait src={laconia.src} alt="Commander of U-156" />
         <PersonCard.Text>
            <PersonCard.Introduction>Commander of U-156</PersonCard.Introduction>
            <PersonCard.Name>WERNER HARTENSTEIN</PersonCard.Name>
            <PersonCard.Description>
               Werner Hartenstein was a respected U-boat commander of WWII, remembered for his leadership during the
               Laconia incident and for attempting to rescue hundreds of survivors at sea.
            </PersonCard.Description>
            <Button className={`${styles.button} mt-10`} href="/hartenstein">
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

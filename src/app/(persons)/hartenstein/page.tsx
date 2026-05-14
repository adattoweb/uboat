"use client"

import Constructor from "../page.constructor"

import hartenstein from "@/assets/images/hartenstein.jpg"
import laconia from "@/assets/images/laconia.jpg"
import blakeley from "@/assets/images/blakeley.jpg"

export default function Page() {
   return (
      <Constructor>
         <Constructor.Picture
            width={400}
            height={400}
            src={hartenstein.src}
            alt="Werner Hartenstein"
            className="float-left mb-2 mr-8"
         />
         <Constructor.Introduction>THE COMMANDER OF U-156</Constructor.Introduction>
         <Constructor.Name className="whitespace-nowrap">WERNER HARTENSTEIN</Constructor.Name>
         <Constructor.Paragraph>
            Werner Hartenstein (1908–1943) was a German U-boat commander remembered both as a highly capable submarine
            officer and as one of the most controversial humanitarian figures of the Battle of the Atlantic. Best known
            for his role during the infamous Laconia incident, Hartenstein became a symbol of the complex moral
            contradictions of submarine warfare – a disciplined Kriegsmarine commander who destroyed Allied shipping but
            also risked his submarine and crew in a massive rescue effort to save enemy survivors at sea.
         </Constructor.Paragraph>
         <Constructor.Header>Early Life and Naval Career</Constructor.Header>
         <Constructor.Paragraph>
            Born in February 1908 in Plauen, Saxony, Hartenstein grew up during the turbulent final years of Imperial
            Germany and the aftermath of World War I. Like many ambitious young Germans fascinated by military service
            and naval tradition, he joined the Reichsmarine in the late 1920s during a period when Germany’s armed
            forces remained heavily limited under the Treaty of Versailles. Hartenstein proved himself a professional
            and capable officer early in his naval career. He initially served aboard surface ships, receiving rigorous
            training in navigation, discipline, and command. During the 1930s, as Adolf Hitler openly rebuilt Germany’s
            military power, Hartenstein transferred into the rapidly expanding U-boat arm under the leadership of Karl
            Dönitz. The submarine service demanded exceptional psychological endurance. U-boat crews operated in
            cramped, dangerous conditions for weeks at a time beneath the Atlantic. Hartenstein adapted well to the
            harsh realities of underwater warfare and earned a reputation as a calm and competent officer respected by
            both superiors and crewmen. By the outbreak of World War II, he had become part of Germany’s growing
            submarine force that aimed to cut Britain’s maritime lifelines across the Atlantic Ocean.
         </Constructor.Paragraph>
         <Constructor.Header>Command of U-156</Constructor.Header>
         <Constructor.Paragraph>
            Hartenstein eventually received command of the Type IXC submarine U-156, one of Germany’s long-range
            ocean-going U-boats. Unlike smaller coastal submarines, Type IX boats could patrol enormous distances and
            operate deep into the South Atlantic, Caribbean, and African waters. Under Hartenstein’s command, U-156
            participated in numerous patrols against Allied merchant shipping. Like many U-boat commanders during the
            height of the Atlantic campaign, he targeted cargo vessels transporting fuel, food, troops, and military
            supplies to the Allies. His attacks contributed to Germany’s wider strategy of economic warfare against
            Britain and its allies. The Kriegsmarine hoped relentless submarine attacks would eventually starve Britain
            into collapse by severing transatlantic supply lines. Hartenstein demonstrated tactical skill and
            professionalism during these operations. Fellow officers considered him disciplined, intelligent, and
            reliable under pressure. Although not as famous as aces like Otto Kretschmer or Günther Prien, he became a
            respected commander within the U-boat service.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={blakeley.src}
            alt="Damaged Blakeley by U-156"
            className="float-right mb-2 ml-8 mt-8 items-end"
         />
         <Constructor.Header>The Laconia Incident</Constructor.Header>
         <Constructor.Paragraph>
            Werner Hartenstein’s place in history was sealed in September 1942 during one of the most dramatic and
            controversial naval incidents of World War II. On September 12, 1942, U-156 intercepted and torpedoed the
            British troopship RMS Laconia off the coast of West Africa. The attack initially appeared to be a standard
            wartime engagement. However, after the ship began sinking, Hartenstein discovered that many of the
            passengers aboard were not combat troops but civilians, wounded personnel, women, children, and nearly 2,000
            Italian prisoners of war allied with Germany itself. Realizing the scale of the disaster, Hartenstein made
            an extraordinary decision almost unheard of in the brutal Atlantic war: he began rescue operations. Ignoring
            the enormous danger to his submarine, Hartenstein ordered survivors pulled from the water and broadcast open
            radio messages in English requesting assistance from any nearby ships. He even transmitted assurances that
            German submarines participating in the rescue would not attack Allied vessels approaching to help survivors.
            Soon, multiple German and Italian submarines joined the rescue effort. U-boats towed overcrowded lifeboats
            while hundreds of survivors were placed directly onto submarine decks despite the severe operational risk.
            In one of the most remarkable moments of the incident, U-156 sailed openly on the ocean surface displaying
            Red Cross markings in an attempt to signal humanitarian intentions. The rescue effort ended catastrophically
            when an American B-24 Liberator bomber attacked the surfaced submarines despite visible rescue operations.
            Forced to dive for survival, the U-boats had no choice but to abandon many survivors at sea. The incident
            deeply shocked the German naval command.
         </Constructor.Paragraph>
         <Constructor.Header>The “Laconia Order”</Constructor.Header>
         <Constructor.Paragraph>
            The aftermath of the incident had major consequences for submarine warfare. Following the attack on the
            rescue operation, Grand Admiral Karl Dönitz issued what became known as the “Laconia Order.” The directive
            forbade German submarines from attempting further rescues of enemy survivors. Dönitz argued that submarines
            could no longer risk exposing themselves during humanitarian operations because doing so endangered both
            crews and military missions. The order later became one of the most controversial subjects at the Nuremberg
            Trials, where prosecutors argued it encouraged inhumane conduct at sea. Ironically, Hartenstein’s attempt to
            save lives indirectly contributed to making submarine warfare even harsher for the remainder of the war.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={laconia.src}
            alt="The rescue operation for the Laconia survivors"
            className="float-left mb-2 mr-8 mt-8"
         />
         <Constructor.Header>Personality and Leadership</Constructor.Header>
         <Constructor.Paragraph>
            Accounts from fellow officers and surviving crew members portray Hartenstein as disciplined, professional,
            and unusually humane compared to the ruthless reputation associated with unrestricted submarine warfare. The
            Laconia rescue demonstrated a commander willing to risk his own life, submarine, and mission to save
            thousands of people — including enemy civilians and prisoners. Historians continue debating whether his
            actions reflected personal morality, naval tradition, military honor, or a combination of all three. At the
            same time, Hartenstein remained a loyal officer of Nazi Germany’s Kriegsmarine and actively participated in
            a devastating naval campaign that caused enormous loss of life across the Atlantic. Like many German naval
            commanders, his legacy exists within the broader context of a war fought in service of a criminal regime.
            Nevertheless, even many Allied historians acknowledge that the Laconia rescue represented one of the rare
            moments of humanity amid the extreme brutality of total war.
         </Constructor.Paragraph>
         <Constructor.Header>Final Patrol and Death</Constructor.Header>
         <Constructor.Paragraph>
            Werner Hartenstein did not survive the war. In March 1943, while commanding U-156 during another Atlantic
            patrol near Barbados, his submarine was attacked by American aircraft. The U-boat was heavily damaged and
            ultimately sunk with all hands aboard. Hartenstein died at just 35 years old alongside his crew in the
            waters of the Atlantic Ocean. His death occurred during the turning point of the Battle of the Atlantic,
            when Allied air power, radar technology, convoy systems, and anti-submarine tactics were increasingly
            destroying Germany’s once-feared U-boat fleet. Like thousands of other submariners, Hartenstein disappeared
            beneath the ocean in one of the deadliest branches of military service during World War II.
         </Constructor.Paragraph>
         <Constructor.Header>Legacy</Constructor.Header>
         <Constructor.Paragraph>
            Werner Hartenstein remains one of the most morally complex figures of submarine warfare. To many naval
            historians, he symbolizes the contradiction between military duty and human compassion during total war.
            Supporters remember him primarily for the Laconia rescue effort — a rare example of humanity shown by a
            combat commander in the middle of one of history’s most ruthless naval conflicts. Critics note that despite
            his humanitarian actions, he still served the strategic goals of Nazi Germany and participated in
            destructive unrestricted submarine warfare. What remains undeniable is that Werner Hartenstein’s actions
            during the Laconia incident became one of the most extraordinary episodes of the Battle of the Atlantic: a
            moment when a submarine commander briefly placed human lives above combat orders, even in the midst of
            global war.
         </Constructor.Paragraph>
      </Constructor>
   )
}

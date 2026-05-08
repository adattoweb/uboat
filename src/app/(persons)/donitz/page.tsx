import PersonCard from "@/UI/PersonCard/PersonCard"
import Constructor from "../page.constructor"
import donitz from "@/assets/images/donitz.png"
import donitz2 from "@/assets/images/donitz2.png"
import donitz3 from "@/assets/images/donitz3.jpg"
import donitz4 from "@/assets/images/donitz4.jpg"
import donitz5 from "@/assets/images/donitz5.jpg"

export default function Page() {
   return (
      <Constructor>
         <div className="">
            <PersonCard.Portrait src={donitz4.src} alt="Karl Donitz" className="float-left mb-2 mr-8 mt-8" />
            <PersonCard.Introduction>THE GRAND ADMIRAL</PersonCard.Introduction>
            <PersonCard.Name className="whitespace-nowrap">KARL DONITZ</PersonCard.Name>
            <Constructor.Header>Karl Dönitz: Naval Commander and Last Reich Leader</Constructor.Header>
            <Constructor.Paragraph>
               Karl Dönitz was a disciplined German admiral who turned the Kriegsmarine’s U-boats into a deadly
               “wolfpack” and briefly succeeded Adolf Hitler as head of state, combining tactical brilliance with
               unwavering loyalty to the Nazi cause.
            </Constructor.Paragraph>
            <PersonCard.Portrait src={donitz2.src} alt="Karl Donitz" className="float-right mb-2 ml-8 mt-8" />
            <Constructor.Header>Early Career and Rise</Constructor.Header>
            <Constructor.Paragraph>
               Born in 1891 near Berlin, Dönitz joined the Imperial German Navy in 1910 and by World War I had become a
               U-boat officer. In 1918 he captained the UB-68; mechanical failures forced him to surface, and he
               scuttled the boat and surrendered, spending the rest of the war as a British POW. After World War I he
               remained in the tiny interwar German navy. In 1935 Admiral Erich Raeder hand-picked him to rebuild the
               U-boat arm in defiance of the Treaty of Versailles. Dönitz was known as austere and highly disciplined –
               nicknamed “Der Löwe” (The Lion) by his men – and he insisted on strict training and routines for his
               crews.
            </Constructor.Paragraph>
            <Constructor.Header>Wolfpack Tactics and Naval Success</Constructor.Header>
            <Constructor.Paragraph>
               Dönitz revolutionized submarine warfare by grouping U-boats into coordinated attack packs. He first
               conceived the idea of “Rudeltaktik” (wolfpack tactics) in World War I, and in WWII he unleashed it
               full-force. U-boat “wolfpacks” prowled the North Atlantic, shadowing Allied convoys by radio and striking
               together. Under Dönitz’s command, the U-boat fleet did enormous damage: over 3,500 Allied ships were sunk
               in the Atlantic under his watch. For a time Britain feared being starved into submission by these
               undersea raids. In January 1943 Dönitz was promoted to Großadmiral and took over as Commander-in-Chief of
               the Kriegsmarine, but by mid-1943 Allied convoys, air patrols and codebreaking gradually blunted the
               U-boat threat.
            </Constructor.Paragraph>
            <PersonCard.Portrait src={donitz5.src} alt="Karl Donitz" className="float-left mb-2 mr-8 mt-8" />
            <Constructor.Header>Hitler’s Successor and Legacy</Constructor.Header>
            <Constructor.Paragraph>
               Despite his military focus, Dönitz was a committed Nazi. He actually only joined the party in 1944, but
               remained fiercely loyal to Hitler. In late April 1945 – just before Germany’s collapse – Hitler appointed
               Dönitz as his successor as Reichspräsident and Supreme Commander. Dönitz then led the short-lived
               Flensburg Government, attempting to negotiate a surrender that would spare German troops from Soviet
               captivity. On May 7–8, 1945 he authorized Germany’s unconditional surrender. After the war, Dönitz was
               tried at Nuremberg. He was convicted on counts of war crimes and crimes against peace for his U-boat
               campaign (though acquitted of crimes against humanity) and sentenced to ten years in prison. He served
               his sentence, was released in 1956, and lived quietly in West Germany until his death in 1980. Throughout
               his life Dönitz insisted he had acted honorably – once declaring from his Nuremberg cell that he had a
               “clear, clean conscience” – and he never renounced his Nazi beliefs. His legacy is thus mixed: many naval
               historians regard Dönitz as one of WWII’s most talented strategists who nearly choked off Britain by
               submarine warfare, but he is also remembered for his dedication to a criminal regime and the ruthless
               orders (such as forbidding the rescue of shipwrecked sailors) that contributed to his conviction.
            </Constructor.Paragraph>
         </div>
      </Constructor>
   )
}

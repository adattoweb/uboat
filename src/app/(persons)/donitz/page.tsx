"use client"

import PersonCard from "@/UI/PersonCard/PersonCard"
import Constructor from "../page.constructor"

import donitz2 from "@/assets/images/donitz2.png"
import donitz4 from "@/assets/images/donitz4.jpg"
import donitz5 from "@/assets/images/donitz5.jpg"

export default function Page() {
   return (
      <Constructor>
         <Constructor.Picture
            width={400}
            height={400}
            src={donitz4.src}
            alt="Karl Donitz"
            className="float-left mb-2 mr-8"
         />
         <PersonCard.Introduction>THE GRAND ADMIRAL</PersonCard.Introduction>
         <PersonCard.Name className="whitespace-nowrap">KARL DONITZ</PersonCard.Name>
         <Constructor.Paragraph>
            Karl Dönitz (1891–1980) was a disciplined German admiral who transformed the Nazi U-boat arm into a powerful
            “wolfpack,” sank thousands of Allied ships in the Atlantic, and briefly led Germany after Hitler’s death – a
            naval genius whose tactical brilliance was paired with staunch Nazi loyalty.
         </Constructor.Paragraph>
         <Constructor.Header>Early Career and Rise</Constructor.Header>
         <Constructor.Paragraph>
            Born in September 1891 near Berlin, Dönitz entered the Kaiserliche Marine in 1910. He served first on
            surface ships, but in World War I he became a submariner. By 1918 he was commanding U-boat UB-68 in the
            Mediterranean. When the boat suffered mechanical failures, Dönitz scuttled it and surrendered; he spent the
            rest of the war as a British POW. Remarkably, he stayed in the navy after World War I rather than leave,
            advancing steadily. The Anglo-German Naval Agreement of 1935 finally lifted the ban on German submarines,
            and Dönitz – already a proponent of U-boats over battleships – was put in charge of a new U-boat flotilla.
            He devoted himself to building crews and tactics. His marriage in 1916 would later bring him three children;
            tragically, both of his sons were killed in World War II aboard U-boats, underscoring his personal
            sacrifice.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={donitz2.src}
            alt="Karl Dönitz shaking hands with sailors"
            className="float-right mb-2 ml-8 mt-8 items-end"
         />
         <Constructor.Header>Commander of the U-boat Campaign</Constructor.Header>
         <Constructor.Paragraph>
            With the outbreak of World War II, Dönitz’s carefully trained submarines prowled the Atlantic. He is often
            credited as the chief architect of Germany’s U-boat fleet. Dönitz famously employed “wolfpack” tactics:
            groups of submarines patrolling convoy routes and attacking en masse. Under his command, the U-boats
            inflicted staggering losses. In the early years of the war (especially 1939–1942) they sank thousands of
            Allied merchant ships – a toll that Britain feared could cut off its lifelines. As one historian notes,
            during the first part of the war Dönitz “did as much damage to the Allies as any German commander”. Indeed,
            his U-boat arm sank over 3,500 Allied ships. Admirers claim his tactics nearly strangled Britain, though by
            mid-1943 the Allies’ improved convoys, radar patrols and codebreaking began to blunt the wolfpacks. In
            January 1943 Dönitz was promoted to Großadmiral and took over as Commander-in-Chief of the German Navy. He
            continued to press the U-boat offensive to the end of the war, even as the balance shifted. Late in the
            conflict he ordered U-boats into Norwegian waters and other distant patrols to keep pressure on the Allies.
         </Constructor.Paragraph>
         <Constructor.Header>Leadership Style and Nazi Loyalty</Constructor.Header>
         <Constructor.Paragraph>
            Unlike many Nazi leaders, Dönitz was not a charismatic politician but a sober career officer. He lived
            simply and insisted on strict discipline for himself and his crews. His nickname among sailors was “Der
            Löwe” (The Lion) for his stern yet respected demeanor. Hitler came to admire Dönitz’s focus on duty. In 1944
            Dönitz finally joined the Nazi Party (late compared to others), but he had already established himself as an
            unquestioned loyalist. He initiated Nazi indoctrination classes for his sailors and publicly praised
            Hitler’s leadership. Notably, no German naval officers were implicated in the 20 July 1944 plot against
            Hitler, a fact that further endeared Dönitz to the Führer. Even as Germany’s situation worsened, Dönitz
            urged continued resistance – he famously ordered thousands of sailors to defend Berlin against the Soviets
            in April 1945 (despite the war being effectively lost). One of the most controversial examples of his
            ruthlessness was the 1942 “Laconia Order.” After a German submarine was attacked while rescuing Allied
            survivors, Dönitz forbade U-boats from aiding shipwrecked enemy crews. He justified this cold directive as
            necessary for submarine safety, but the Allies condemned it as a war crime. (This point remains debated:
            Dönitz argued it followed the first rule of the sea—no submarine could risk itself to save others—while
            prosecutors at Nuremberg would later label it inhumane.) Whatever one’s view, the order exemplified his
            uncompromising wartime doctrine: destroy the enemy without pause, and never allow sentiment to hinder
            combat. Dönitz was personally affected by war losses – his two sons died serving in the Kriegsmarine – but
            he never wavered in his belief that submarine warfare was the key to victory.
         </Constructor.Paragraph>
         <Constructor.Header>Hitler’s Successor and Final Actions</Constructor.Header>
         <Constructor.Paragraph>
            In the final days of the Third Reich, Dönitz was summoned to Hitler’s Berlin bunker. On April 30, 1945
            Hitler’s last will and testament named Dönitz Reichspräsident (head of state) and Supreme Commander. Dönitz
            was reportedly stunned at first, but he assumed the role as the Fuhrer’s chosen successor. With Goebbels’s
            suicide on May 1, Dönitz became the sole leader of what remained of Germany. He immediately set about
            negotiating an end to the war. Stationed in Flensburg (in northern Germany), he ordered U-boats to surrender
            and urged the final collapse of German forces. On May 7 he authorized Admiral Alfred Jodl to sign Germany’s
            unconditional surrender in Reims, and by May 8 all fighting in Western Europe ceased. Dönitz remained de
            facto head of state until late May, overseeing the dissolution of his government. His priority in those
            chaotic weeks was to save German lives by surrendering to the Western Allies rather than the Soviets.
            (Allies later noted Dönitz even tried to keep scuttling and sabotage to a minimum in the west to achieve
            this partial goal.) In any case, the war was over – but not his personal reckoning.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={donitz5.src}
            alt="Karl Dönitz during the Nuremberg Trials"
            className="float-left mb-2 mr-8 mt-8"
         />
         <Constructor.Header>Nuremberg Trial and Postwar Years</Constructor.Header>
         <Constructor.Paragraph>
            After Germany’s defeat, Dönitz was arrested and tried as a major war criminal at the Nuremberg trials. He
            faced charges of crimes against peace and war crimes (notably for unrestricted submarine warfare and the
            Laconia Order). He admitted he was a dedicated Nazi and Hitler loyalist, but he defended his actions as
            military duty. In the end, the tribunal acquitted him of crimes against humanity but found him guilty of
            waging aggressive war and violating the laws of war. He was sentenced to ten years imprisonment. Dönitz
            served his term largely at Spandau Prison. Even behind bars he remained defiant; he famously told his judges
            he had “a clear, clean conscience.” Released in 1956, he lived quietly in a small town near Hamburg. He
            published his memoirs Zehn Jahre und zwanzig Tage (Ten Years and Twenty Days) in 1958 and spent the rest of
            his life defending the reputation of the U-boat crews. Dönitz died on December 24, 1980 at age 89.
            Throughout his life and afterward, Dönitz’s legacy has been fiercely debated. Many naval historians credit
            him as one of World War II’s great strategists whose U-boats came terrifyingly close to isolating Britain.
            Others emphasize that his absolute loyalty to Hitler and harsh orders (like the rescue ban) implicate him in
            Nazi atrocities. What is not in doubt is that as Grand Admiral and briefly head of state, Dönitz was among
            Germany’s most powerful and controversial military leaders – a man of remarkable skill and conviction who
            nonetheless stood by a criminal regime.
         </Constructor.Paragraph>
      </Constructor>
   )
}

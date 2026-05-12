import Constructor from "../page.constructor"
import PersonCard from "@/UI/PersonCard/PersonCard"

import kretschmer from "@/assets/images/kretschmer.jpg"
import kretschmer2 from "@/assets/images/kretschmer2.jpg"
import u23 from "@/assets/images/u-23wb.jpg"

export default function Page() {
   return (
      <Constructor>
         <Constructor.Picture
            width={400}
            height={400}
            src={kretschmer.src}
            alt="Otto Kretschmer"
            className="float-left mb-2 mr-8"
         />
         <PersonCard.Introduction>THE ACE OF THE ATLANTIC</PersonCard.Introduction>
         <PersonCard.Name className="whitespace-nowrap">OTTO KRETSCHMER</PersonCard.Name>
         <Constructor.Paragraph>
            Otto Kretschmer (1912–1998) was Germany’s most successful U-boat commander of World War II – a calm,
            calculating naval officer whose stealth tactics and ruthless efficiency earned him the nickname “The Silent
            Otto.” Credited with sinking more Allied tonnage than any other submarine commander in history, Kretschmer
            became a legendary figure of the Battle of the Atlantic and one of the Kriegsmarine’s most celebrated war
            heroes.
         </Constructor.Paragraph>
         <Constructor.Header>Early Life and Naval Career</Constructor.Header>
         <Constructor.Paragraph>
            Born in May 1912 in Upper Silesia, then part of the German Empire, Kretschmer grew up in a disciplined
            middle-class family and showed academic talent from an early age. Fascinated by the sea and military life,
            he joined the Reichsmarine in 1930 during the difficult interwar years when Germany’s navy remained heavily
            restricted under the Treaty of Versailles. Like many ambitious young officers, he trained rigorously and
            quickly gained a reputation for intelligence, professionalism, and composure under pressure. Kretschmer
            initially served aboard light cruisers and training ships before volunteering for the submarine service in
            the mid-1930s. At the time, Germany was secretly rebuilding its naval strength under Adolf Hitler. The young
            officer embraced submarine warfare enthusiastically, believing U-boats represented Germany’s best chance to
            challenge British naval supremacy. By 1939 he had received command of the submarine U-23, beginning the
            career that would make him one of the most feared men in the Atlantic Ocean.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={u23.src}
            alt="A Type IIB U-boat similar to U-23"
            className="float-right mb-2 ml-8 mt-8 items-end"
         />
         <Constructor.Header>The Master of Silent Warfare</Constructor.Header>
         <Constructor.Paragraph>
            When World War II erupted in September 1939, Kretschmer immediately distinguished himself through patience,
            precision, and tactical innovation. Unlike aggressive commanders who attacked recklessly, he preferred
            stealth and calculated strikes. His personal motto became: “One torpedo, one ship.” Rather than wasting
            ammunition, Kretschmer stalked convoys at night from the surface, moving silently into ideal firing
            positions before unleashing devastating attacks at close range. His methods proved extraordinarily
            effective. While commanding U-23 and later the famous U-99, he sank dozens of Allied merchant vessels with
            remarkable efficiency. Kretschmer became the leading star of Karl Dönitz’s growing U-boat force. Dönitz
            admired him not only for his success but also for his discipline and cool-headed leadership. Crew members
            described Kretschmer as quiet, highly intelligent, and emotionally controlled even during dangerous
            engagements. Unlike some Nazi military celebrities, he rarely sought public attention and avoided dramatic
            speeches or propaganda performances. By 1941 Kretschmer had sunk nearly 50 ships totaling more than 270,000
            gross registered tons – the highest score achieved by any U-boat commander during the war. British convoys
            crossing the Atlantic feared encountering his submarine. Allied sailors often reported that attacks by U-99
            seemed to emerge from nowhere before disappearing again into darkness. His extraordinary success earned him
            Germany’s highest military decorations, including the Knight’s Cross of the Iron Cross with Oak Leaves and
            Swords. Nazi propaganda portrayed him as the ideal submarine commander: fearless, disciplined, and
            unstoppable beneath the waves.
         </Constructor.Paragraph>
         <Constructor.Header>The Battle of the Atlantic</Constructor.Header>
         <Constructor.Paragraph>
            Kretschmer fought during the most dangerous phase of the Atlantic campaign, when German submarines came
            close to crippling Britain’s supply routes. U-boats targeted merchant convoys carrying food, fuel, and
            weapons from North America to Europe. If Britain’s maritime lifelines collapsed, the country could
            potentially be starved into submission. Operating under Dönitz’s “wolfpack” strategy, Kretschmer
            participated in coordinated attacks involving multiple submarines hunting convoys together. Yet even among
            elite U-boat captains, his effectiveness stood apart. He often achieved more with fewer torpedoes and lower
            risk than many of his peers. Still, the Atlantic campaign grew increasingly deadly. Allied escort ships
            improved radar systems, sonar detection, air patrols, and convoy tactics. The hunters gradually became the
            hunted. Every patrol carried enormous danger, and casualty rates among German submariners became
            catastrophic. By war’s end, the U-boat service suffered one of the highest fatality rates of any branch of
            the German military. Capture and Years as a Prisoner Kretschmer’s remarkable combat career came to a sudden
            end in March 1941. During an attack on convoy HX-112 in the North Atlantic, U-99 was detected and
            relentlessly pursued by British destroyers. After severe depth-charge attacks crippled the submarine,
            Kretschmer realized escape was impossible. Refusing to sacrifice his crew needlessly, he ordered U-99
            scuttled and commanded his men to abandon ship. Unlike many U-boat commanders who died with their vessels,
            Kretschmer survived and was captured by the British along with most of his crew. For Nazi Germany, the loss
            of its most successful submarine ace was a major propaganda blow. For the British, capturing him alive was a
            valuable intelligence victory. Kretschmer spent the remainder of World War II as a prisoner of war in Canada
            and Britain. Even in captivity he maintained strict discipline and authority among German prisoners. He
            participated in several escape attempts and was considered a highly influential officer inside POW camps.
            Fellow prisoners often treated him with near-legendary respect due to his wartime achievements.
         </Constructor.Paragraph>
         <Constructor.Header>Personality and Reputation</Constructor.Header>
         <Constructor.Paragraph>
            Unlike many prominent figures in Nazi Germany, Kretschmer was not known primarily as a political ideologue.
            He appeared far more committed to naval professionalism and military duty than to public Nazi activism.
            Historians continue debating the extent of his ideological loyalty to the regime, though he unquestionably
            served Germany’s war effort with determination and skill. His leadership style emphasized calmness,
            efficiency, and responsibility toward his crew. Survivors frequently noted that Kretschmer avoided
            unnecessary risks and cared deeply about the lives of his sailors. This contrasted sharply with the
            increasingly desperate attitude that dominated Germany’s military leadership later in the war. At the same
            time, Kretschmer remained part of a brutal naval campaign that contributed to immense destruction and loss
            of life across the Atlantic. Thousands of merchant sailors died aboard torpedoed ships, often in freezing
            waters far from rescue. Though admired as a tactician, Kretschmer’s successes were inseparable from the
            destructive goals of Nazi Germany’s war machine.
         </Constructor.Paragraph>
         <Constructor.Picture
            width={400}
            height={400}
            src={kretschmer2.src}
            alt="Kretschmer receiving his Knight's Cross"
            className="float-left mb-2 mr-8 mt-8"
         />
         <Constructor.Header>Postwar Life and Later Career</Constructor.Header>
         <Constructor.Paragraph>
            Released from captivity after the war, Kretschmer eventually joined the West German Bundesmarine in the
            1950s as West Germany rebuilt its armed forces within NATO. Remarkably, the former U-boat ace once again
            rose through naval ranks in democratic Germany, serving in various senior command positions during the Cold
            War. His return to military service reflected the complicated postwar reality in West Germany, where
            experienced former Wehrmacht officers were often reintegrated into the new armed forces. Kretschmer became
            respected within NATO naval circles for his expertise in submarine warfare and maritime strategy. By the
            time he retired as a flotilla admiral in 1970, he had spent decades serving two entirely different German
            states: Nazi Germany and democratic West Germany. Otto Kretschmer died in August 1998 at age 86 after an
            accident during a vacation in Bavaria. Even decades after the war, his name remained synonymous with
            submarine warfare.
         </Constructor.Paragraph>
         <Constructor.Header>Legacy</Constructor.Header>
         <Constructor.Paragraph>
            Otto Kretschmer’s legacy remains deeply complex. Naval historians frequently describe him as one of the
            greatest submarine tacticians in history – a commander whose stealth, patience, and precision transformed
            undersea warfare. His record of sunk tonnage remains unmatched among submarine commanders. To admirers,
            Kretschmer embodied professionalism, courage, and tactical brilliance under extreme conditions. To critics,
            he was still a highly effective officer serving one of history’s most criminal regimes and contributing
            directly to a devastating war of aggression. What remains undeniable is that Otto Kretschmer became one of
            the defining figures of the Battle of the Atlantic: a silent predator beneath the ocean whose skill and
            discipline made him both legendary and feared throughout World War II.
         </Constructor.Paragraph>
      </Constructor>
   )
}

import { About } from "./components/About/About"
import { Intro } from "./components/Intro/Intro"
import { LoadScreen } from "./components/LoadScreen/LoadScreen"
import { Technology } from "./components/Technology/Technology"

export default function Home() {
   return (
      <div className="flex flex-col items-center">
         <LoadScreen />
         <Intro />
         <div className="relative bottom-25 flex flex-col items-center gap-8">
            <About />
            <Technology />
         </div>
      </div>
   )
}

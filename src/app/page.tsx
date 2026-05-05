import { About } from "./components/About/About"
import { History } from "./components/History/History"
import { Info } from "./components/Info/Info"
import { Intro } from "./components/Intro/Intro"
import { LoadScreen } from "./components/LoadScreen/LoadScreen"
import { Submarines } from "./components/Submarines/Submarines"
import { Technology } from "./components/Technology/Technology"

export default function Home() {
   return (
      <div className="flex flex-col items-center">
         <LoadScreen />
         <Intro />
         <div className="relative bottom-25 flex flex-col items-center gap-8">
            <About />
            <Technology />
            <Submarines />
            <History />
            <Info />
         </div>
      </div>
   )
}

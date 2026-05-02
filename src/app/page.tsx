import { About } from "./components/About/About"
import { Intro } from "./components/Intro/Intro"
import { LoadScreen } from "./components/LoadScreen/LoadScreen"

export default function Home() {
   return (
      <div className="">
         <LoadScreen />
         <Intro />
         <About />
      </div>
   )
}

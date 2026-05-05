import { Donitz } from "./Persons/Donitz"
import { Kretschmer } from "./Persons/Kretschmer"

export function History() {
   return (
      <section className="w-[var(--content-width)] flex flex-col gap-8">
         <Donitz />
         <Kretschmer />
      </section>
   )
}

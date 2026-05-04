import { PersonCard } from "./PersonCard"

export function History() {
   return (
      <section className="w-[var(--content-width)] flex flex-col gap-8">
         <PersonCard />
         <PersonCard />
      </section>
   )
}

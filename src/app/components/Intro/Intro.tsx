import Button from "@/UI/Button/Button"

export function Intro() {
   return (
      <section className="w-screen h-screen bg-[radial-gradient(circle_at_center,transparent,var(--background-color)_150%),url('/images/intro_background.png')] bg-cover bg-center flex">
         <div className="w-[var(--content-width)] h-full mx-auto flex flex-col">
            <div className="mt-auto max-w-200 mb-80">
               <h4 className="text-xl text-[rgba(var(--light-text-color),0.9)] font-normal mb-2">
                  SILENT. INVISIBLE. DEADLY
               </h4>
               <h2 className="text-8xl text-white font-semibold mb-4">THE LEGEND BENEATH</h2>
               <p className="text-xl text-[rgba(var(--light-text-color),0.9)] font-normal mb-6">
                  Explore the engineering, history and wartime legacy of Germany`s U-boats that changed the course of
                  naval warfare forever
               </p>
               <Button>
                  <Button.Text>EXPLORE THE DEPTHS</Button.Text>
               </Button>
            </div>
         </div>
      </section>
   )
}

import { WithClassName } from "@/types/global"
import { AnchorIcon, SubmarineIcon } from "@/UI/icons/Icons"
import { CalendarDaysIcon, FlagIcon, UserIcon } from "@heroicons/react/24/outline"

// fill-[rgba(var(--accent-stroke-color),0.9)]
// stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2

type CardProps = React.PropsWithChildren &
   WithClassName & {
      header: string
      title: string
      description: string
   }

function Card({ children, className, header, title, description }: CardProps) {
   return (
      <div
         className={`${className} grid grid-cols-[auto_1fr] grid-rows-[auto_auto_auto] gap-x-8 items-center pr-12 border-r border-[var(--stroke-color)] last:border-r-0`}
      >
         {children}
         <h3 className="text-3xl text-[var(--accent-color)] font-medium">{header}</h3>
         <h4 className="text-base text-light-gray font-medium h-min">{title}</h4>
         <p className="text-sm text-light-gray font-normal h-min">{description}</p>
      </div>
   )
}

export function Info() {
   return (
      <div className="w-[var(--content-width)] flex content-between py-8 px-16 border border-[var(--stroke-color)] gap-12">
         <Card header="> 20" title="COUNTRIES" description="Operated U-boats during the wars">
            <FlagIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
         <Card header="≈ 1000" title="SUBMARINES" description="Lost during WWII">
            <SubmarineIcon className="row-span-3 h-8 fill-[rgba(var(--accent-stroke-color),0.9)]" />
         </Card>
         <Card header="< 200" title="DIVING DEPTH" description="Maxium operation depth">
            <AnchorIcon className="row-span-3 h-10 fill-[rgba(var(--accent-stroke-color),0.9)]" />
         </Card>
         <Card header="> 400" title="YEARS" description="Of the U-boat history and evolution">
            <CalendarDaysIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
         <Card header="> 20000" title="PEOPLE" description="Died serving on submarines in WWII">
            <UserIcon className="row-span-3 h-10 stroke-[rgba(var(--accent-stroke-color),0.9)] stroke-2" />
         </Card>
      </div>
   )
}

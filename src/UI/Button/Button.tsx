import { WithClassName, WithClick } from "@/types/global"
import Link from "next/link"
import { forwardRef } from "react"

interface ButtonProps extends React.PropsWithChildren<WithClassName>, WithClick {
   className?: string
   href?: string
}

type ButtonComponent = React.ForwardRefExoticComponent<
   ButtonProps & React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>
> & {
   Text: typeof Text
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
   ({ className = "", children, onClick, href }, ref) => {
      const classes = `${className} flex w-65 h-15 border-2 border-[rgba(var(--accent-stroke-color),0.9)] cursor-pointer hover:bg-[rgba(var(--accent-stroke-color),0.9)] hover:*:text-white ease duration-300 backdrop-blur-sm`

      if (href) {
         return (
            <Link href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={classes} onClick={onClick}>
               {children}
            </Link>
         )
      }

      return (
         <div ref={ref as React.Ref<HTMLDivElement>} className={classes} onClick={onClick}>
            {children}
         </div>
      )
   },
) as ButtonComponent

Button.displayName = "Button"

function Text({ className = "", children }: WithClassName & { children?: React.ReactNode }) {
   return <p className={`${className} text-[var(--accent-color)] text-lg mx-auto my-auto`}>{children}</p>
}

Button.Text = Text

export default Button

import { WithClassName, WithClick } from "@/types/global"
import { forwardRef } from "react"

type ButtonProps = React.PropsWithChildren<WithClassName> & WithClick

type ButtonComponent = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLDivElement>> & {
   Text: typeof Text
}

const Button = forwardRef<HTMLDivElement, ButtonProps>(({ className = "", children, onClick }, ref) => {
   return (
      <div
         ref={ref}
         className={`${className} flex w-65 h-15 border-2 border-[rgba(var(--accent-stroke-color),0.9)] cursor-pointer hover:bg-[rgba(var(--accent-stroke-color),0.9)] hover:*:text-white ease duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
         onClick={onClick}
      >
         {children}
      </div>
   )
}) as ButtonComponent

Button.displayName = "Button"

function Text({ className = "", children, onClick }: ButtonProps) {
   return (
      <p className={`${className} text-[var(--accent-color)] text-lg mx-auto my-auto`} onClick={onClick}>
         {children}
      </p>
   )
}

Button.Text = Text

export default Button

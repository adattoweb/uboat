import { WithClassName } from "@/types/global"

type ButtonProps = React.PropsWithChildren<WithClassName>

function Button({ className = "", children }: ButtonProps) {
   return (
      <div className={`flex w-65 h-15 border-2 border-[rgba(var(--accent-stroke-color),0.9)] ${className}`}>
         {children}
      </div>
   )
}

function Text({ className = "", children }: ButtonProps) {
   return <p className={`text-[var(--accent-color)] text-lg mx-auto my-auto ${className}`}>{children}</p>
}

Button.Text = Text

export default Button

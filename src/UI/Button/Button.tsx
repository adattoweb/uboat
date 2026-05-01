import { WithClassName, WithClick } from "@/types/global"

type ButtonProps = React.PropsWithChildren<WithClassName> & WithClick

function Button({ className = "", children, onClick }: ButtonProps) {
   return (
      <div
         className={`flex w-65 h-15 border-2 border-[rgba(var(--accent-stroke-color),0.9)] cursor-pointer ${className}`}
         onClick={onClick}
      >
         {children}
      </div>
   )
}

function Text({ className = "", children, onClick }: ButtonProps) {
   return (
      <p className={`text-[var(--accent-color)] text-lg mx-auto my-auto ${className}`} onClick={onClick}>
         {children}
      </p>
   )
}

Button.Text = Text

export default Button

import { Context, useContext } from "react"

export function useCheckContext<T>(context: Context<T | null>) {
   const value = useContext(context)

   if (!value) {
      throw new Error("Context error")
   }

   return value
}

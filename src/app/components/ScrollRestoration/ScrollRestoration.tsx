"use client"

import { useEffect } from "react"

export default function ScrollRestoration() {
   useEffect(() => {
      history.scrollRestoration = "manual"
      window.scrollTo(0, 0)
   }, [])

   return null
}

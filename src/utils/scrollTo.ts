import gsap from "gsap"

export const scrollTo = (id: string) => {
   gsap.to(window, {
      duration: 1,
      scrollTo: id,
      ease: "power2.inOut",
   })
}

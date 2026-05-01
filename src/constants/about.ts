import { CardProps } from "@/app/components/About/about.types"
import { SubmarineIcon } from "@/UI/icons/Icons"
import { Cog8ToothIcon, PhotoIcon, ClockIcon } from "@heroicons/react/24/outline"

export const about: CardProps[] = [
   {
      title: "TYPES OF UBOATS",
      description: "Discover different classes of uboats and their technical specifications.",
      Icon: SubmarineIcon,
      href: "/types",
      image: "/images/uboat-1.png",
   },
   {
      title: "HISTORY",
      description: "Dive into the history of U-boats from their creation to the end of the World Wars.",
      Icon: ClockIcon,
      href: "/history",
      image: "/images/das-boot.png",
   },
   {
      title: "TECHNOLOGY",
      description: "Explore the advanced engineering and innovations that made U-boats formidable underwater.",
      Icon: Cog8ToothIcon,
      href: "/technology",
      image: "/images/technology.png",
   },
   {
      title: "GALLERY",
      description: "A collection of rare photos and documents from the U-boat era.",
      Icon: PhotoIcon,
      href: "/gallery",
      image: "/images/uboat-2.png",
   },
]

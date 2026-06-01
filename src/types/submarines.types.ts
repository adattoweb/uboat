export interface SubmarineContent {
   Torpedoes: string
   "Torpedo Tubes": string
   Length: string
   Range: string
   "Underwater Range": string
   "Max Surface Speed": string
   "Max Underwater Speed": string
   Crew: string
   "Max Diving Depth": string
   "Main Role": string
}

export interface Submarine {
   name: string
   preview: string
   images: string[]
   description: string
   content: SubmarineContent
}

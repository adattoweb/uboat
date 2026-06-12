interface IRoute {
   ROUTE: string
   NAME: string
}

export const ROUTES: Record<string, IRoute> = {
   HOME: {
      ROUTE: "#intro",
      NAME: "HOME",
   },
   TYPES: {
      ROUTE: "#types",
      NAME: "TYPE OF UBOATS",
   },
   HISTORY: {
      ROUTE: "#history",
      NAME: "HISTORY",
   },
}

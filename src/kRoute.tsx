export const kRoute: Record<string, string> = Object.freeze({
  P01: "P01",
  P02: "P02",
  P03: "P03",
});
export const kRouteNames: readonly string[] = Object.keys(kRoute).map(
  (value) => kRoute[value]
);

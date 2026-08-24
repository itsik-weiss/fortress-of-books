export function splitLines(text: string) {
  return text.split("\n").filter((line) => line.length > 0);
}

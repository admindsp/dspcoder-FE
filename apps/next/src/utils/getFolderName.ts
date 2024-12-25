export function capitalizeAfterUnderscore(snakeStr: string): string {
  const result: string[] = [];
  let capitalizeNext = false;

  for (const char of snakeStr) {
    if (char === "_") {
      result.push(char);
      capitalizeNext = true;
    } else if (capitalizeNext) {
      result.push(char.toUpperCase());
      capitalizeNext = false;
    } else {
      result.push(char);
    }
  }

  return result.join("");
}

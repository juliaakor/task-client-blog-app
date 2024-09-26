export const toPascalCaseWithSpaces = (str: string) =>
  str
    .toLowerCase()
    .replace(/[-_]+/g, ' ')
    .replace(/[^\w\s]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();

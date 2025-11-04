export function formatDate(date: string, { short = false } = {}) {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: short ? "short" : "long",
    day: "numeric",
  });
}

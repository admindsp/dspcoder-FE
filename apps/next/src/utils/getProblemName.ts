export const getProblemName = (url: string): string | null => {
  if (!url) return null;
  const parts = url.split("/");
  return parts.filter(Boolean).pop() || null;
};

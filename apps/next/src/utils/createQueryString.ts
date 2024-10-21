export const createQueryString = (
  searchParams: URLSearchParams,
  key: string,
  value: string | undefined,
) => {
  const params = new URLSearchParams(searchParams.toString());
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
  return params.toString();
};

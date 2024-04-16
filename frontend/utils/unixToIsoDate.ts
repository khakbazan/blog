export const unixToIsoDate = (unixTimestamp: number) => {
  const date = new Date(unixTimestamp);

  const isoDateTime = date.toISOString();

  return isoDateTime;
};

export const filterHomesByAddress = (homes: Home[], filter: string) => {
  return homes?.filter(home => home.address.toLowerCase().includes(filter.toLowerCase()));
}
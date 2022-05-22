import levenshtein from 'fast-levenshtein';

// We use Levenshtein distance to be permissive with the results, on every word of the name compared to the search
// Levenshtein distance is a way to compute the "distance" between two strings of equal length
const PERMISSIVITY = 1; // Determines the maximum Levenshtein distance accepted as a positive result

export const  filterHomesByAddressLevenshtein = (
  homes: Home[],
  search: string,
): Home[] => {
  // return a filtered array of ICustomers matching the input search string, modulo the PERMISSIVITY
  return homes?.filter((home) => {
    let matchesSearch = false;

    const formattedCustomerName = home.address
      .substring(0, search.length)
      .toLocaleLowerCase();
    const formattedSearch = search.toLocaleLowerCase();

    if (search.includes(' ')) {
      // If the user types many words (includes a ' ' in the search string), then he/she wants specific results
      // So we take the search string as it is, and match it against home address as they are (after setting it the same size as the search)

      if (
        levenshtein.get(formattedCustomerName, formattedSearch) <= PERMISSIVITY
      ) {
        matchesSearch = true;
      }
    }

    // if the users only types one word (no ' '), then we need to compare his search string with every word of the address of each home
    home.address.split(' ').forEach((word:string) => {
      if (
        levenshtein.get(
          word.substring(0, search.length).toLocaleLowerCase(),
          formattedSearch,
        ) <= PERMISSIVITY
      ) {
        matchesSearch = true;
      }
    });
    return matchesSearch;
  });
}

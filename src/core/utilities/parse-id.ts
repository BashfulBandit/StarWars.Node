const NEGATIVE_TWO = -2;

/**
 * Helper function to parse the identifier out of the `url` the SW API provides.
 *
 * @param url - string
 *
 * @returns string
 */
export const parseId = (url: string): string => `${url.split('/').at(NEGATIVE_TWO)}`;

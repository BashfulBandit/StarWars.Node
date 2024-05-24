const NEGATIVE_TWO = -2;

export const parseId = (url: string): string => `${url.split('/').at(NEGATIVE_TWO)}`;

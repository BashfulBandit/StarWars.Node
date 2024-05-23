// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const parseId = (url: string): string => `${url.split('/').at(-2)}`;

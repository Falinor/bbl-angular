export function hex2rgb(hex: number | string) {
  throw new Error('Not implemented');
}

/**
 * Converts a decimal to an hexadecimal number, eventually padding with a 0.
 * @param rgb The RGB component between 0 and 255
 * @returns {string} The number converted to hexadecimal format
 */
export function dec2hex(rgb: number): string {
  const hex = rgb.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

export function isNumber(x: any): x is number {
  return typeof x === 'number';
}

export function isString(x: any): x is string {
  return typeof x === 'string';
}

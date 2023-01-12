const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];

export default function isValidNIP(rawNip: string | number): boolean {
  if (!rawNip) {
    return false;
  }

  // strip non-alphanumeric characters
  const nip = rawNip.toString().replace(/[^a-z\d]/gi, '');

  // check if length is 10 digits
  if (nip.length !== 10) {
    return false;
  }

  // calculate checksum
  let sum = 0;
  weights.forEach((weight, position) => {
    const digit = Number(nip[position]);
    sum += weight * digit;
  });

  const checksum = sum % 11;

  if (checksum === 10) {
    return false;
  }

  return checksum === Number(nip[9]);
}

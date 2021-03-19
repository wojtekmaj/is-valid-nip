const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7];

export default function isValidNIP(rawNip) {
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
  for (let position = 0; position < weights.length; position += 1) {
    const weight = weights[position];
    const digit = parseInt(nip[position], 10);
    sum += weight * digit;
  }

  const checksum = sum % 11;

  if (checksum === 10) {
    return false;
  }

  return checksum === parseInt(nip[9], 10);
}

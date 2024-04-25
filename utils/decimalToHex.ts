export default function(decimal: number) {
  const HEX = decimal.toString(16).toUpperCase();

  if (HEX.length < 6) {
    return "0" + HEX;
  }

  return HEX;
}
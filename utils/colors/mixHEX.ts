import mixRGB from "~/utils/colors/mixRGB";

function hexToRgb(hex: string): number[] {
  hex = hex.replace(/^#/, '');

  const bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return [r, g, b];
}

export default function(hexA: string, hexB: string, amount: number): string {
  console.log(hexToRgb(hexA));
  console.log(hexToRgb(hexB));

  return mixRGB(hexToRgb(hexA), hexToRgb(hexA), amount);
}
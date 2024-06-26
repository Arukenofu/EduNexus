

function colorChannelMixer(colorChannelA: number, colorChannelB: number, amountToMix: number): number {
  const channelA = colorChannelA * amountToMix;
  const channelB = colorChannelB * (1 - amountToMix);

  return channelA + channelB;
}

export default function(rgbA: number[], rgbB: number[], amountToMix: number): string {
  const r = colorChannelMixer(rgbA[0],rgbB[0],amountToMix).toFixed(0);
  const g = colorChannelMixer(rgbA[1],rgbB[1],amountToMix).toFixed(0);
  const b = colorChannelMixer(rgbA[2],rgbB[2],amountToMix).toFixed(0);

  return "rgb("+r+","+g+","+b+")";
}
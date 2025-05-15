import chroma from 'chroma-js';

export const lighten = (color, hslPercent) => chroma(color).set("hsl.l", chroma(color).get("hsl.l") + hslPercent);
export default (color, hslPercent) => lighten(color, -hslPercent);
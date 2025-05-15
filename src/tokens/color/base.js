import chroma from 'chroma-js';

const colorScale = (base, name, override = {}) => ({
  "base" : { "value": base },
  "100": { "value": chroma.mix(base, 'white', 0.8, 'rgb').hex() },
  "200": { "value": chroma.mix(base, 'white', 0.6, 'rgb').hex() },
  "300": { "value": chroma.mix(base, 'white', 0.4, 'rgb').hex() },
  "400": { "value": chroma.mix(base, 'white', 0.2, 'rgb').hex() },
  "500": { "value": `{color.${name}.base}` },
  "600": { "value": chroma.mix(base, 'black', 0.2, 'rgb').hex() },
  "700": { "value": chroma.mix(base, 'black', 0.4, 'rgb').hex() },
  "800": { "value": chroma.mix(base, 'black', 0.6, 'rgb').hex() },
  "900": { "value": chroma.mix(base, 'black', 0.8, 'rgb').hex() },
  "light": { "value": `{color.${name}.100}` }, // same as 100
  "dark": { "value": `{color.${name}.700}` }, // same as 700
  ...override
});

const blue = "#1a73e8";

export default {
  "color": {
      "white": { value: "#ffffff" },
      "black": { value: "#000000" },
      "blue": colorScale(blue, "blue", {
        "100": { "value": chroma.mix(blue, 'white', 0.91, 'rgb').hex() },
        "dark": { "value": "{color.blue.600}"},
        "faded": { "value": chroma(blue).alpha(0.5).hex() },
      }),
      "indigo": colorScale("#BA4DE1", "indigo"),
      "purple": colorScale("#6f42c1", "purple"),
      "pink": colorScale("#d63384", "pink"),
      "red": colorScale("#da3a2b", "red"),
      "orange": colorScale("#fd7e14", "orange"),
      "yellow": colorScale("#ffb946", "yellow", { "dark": { "value": "{color.yellow.800}" } }),
      "green": colorScale("#22a75f", "green", { "dark": { "value": "{color.green.800}" } }),
      "teal": colorScale("#17A2B8", "teal"),
      "cyan": colorScale("#0dcaf0", "cyan"),
      "gray": {
        "100": { "value" : "#f6f8fa" },
        "light": { "value" : "#f6f8fa" },
        "200": { "value" : "#e7eef4" },
        "300": { "value" : "#d3d8e0" },
        "400": { "value" : "#c0c9d5" },
        "500": { "value" : "#69788B" },
        "600": { "value" : "#5e6d82" },
        "700": { "value" : "#455469" },
        "dark": { "value" : "#455469" },
        "800": { "value" : "#324054" },
        "900": { "value" : "#23282e" }
      }
  }
}

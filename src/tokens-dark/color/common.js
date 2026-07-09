import chroma from 'chroma-js';
import base from './base.js';
import darken from '../../util/darken.js';

const border = chroma.mix(base.color.gray["900"].value, 'white', 0.1).hex();
const borderDark = chroma.mix(border, 'white', 0.1).hex();

export default {
    "color": {
        "common": {
            "bg": {
                "base": {
                    "value": "{color.gray.900}",
                },
                "secondary": {
                    "value": "{color.gray.900}",
                }
            },
            "border": {
                "value": '{color.border}',
            },
            "border-dark": {
                "value": borderDark,
            },
            "light": {
                "value": darken(base.color.gray["900"].value, 0.04).hex()
            },
            "dark": {
                "value": "{color.gray.400}"
            }
        }
    }
}
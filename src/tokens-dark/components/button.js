import button from "../../tokens/components/button.js";
import darken from '../../util/darken.js';
import base from '../color/base.js';

export default {
    ...button,
    "color": {
        "button": {
            ...button.color.button,
            "primary": {
                ...button.color.button.primary,
                "text": { value: "{color.black}" },
            },
            "critical": {
                "text": { value: "{color.black}" },
                "bg": { value: "{color.critical}" },
                "border": { value: "{color.critical}" },
                "hover": { value: darken(base.color.red.base.value, 0.075).hex() },
                "press": { value: darken(base.color.red.base.value, 0.1).hex() },
            },
        },
        "color-block-button": {
            "unconfigured": { value: "{color.gray.700}" }
        }
    },
}
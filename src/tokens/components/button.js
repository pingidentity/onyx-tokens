import darken from '../../util/darken.js';
import base from '../color/base.js';

export default {
    "color": {
        "button": {
            "primary": {
                "text": { value: "{color.white}" },
                "bg": { value: "{color.primary}" },
                "border": { value: "{color.primary}" },
                "hover": {
                    "bg": { value: darken(base.color.blue.base.value, 0.075).hex() },
                    "border": { value: darken(base.color.blue.base.value, 0.075).hex() },
                },
                "press": { value: darken(base.color.blue.base.value, 0.1).hex() },
            },
            "default": {
                "text": { value: "{color.font.link}" },
                "bg": { value: "#00000000" },
                "border": { value: "{color.primary}" },
                "hover": {
                    "bg": { value: "{color.primary}" },
                    "text": { value: "{color.font.reverse}" },
                },
            },
            "critical": {
                "text": { value: "{color.white}" },
                "bg": { value: "{color.critical}" },
                "border": { value: "{color.critical}" },
                "hover": { value: darken(base.color.red.base.value, 0.075).hex() },
                "press": { value: darken(base.color.red.base.value, 0.1).hex() },
            },
        },
        "color-block-button": {
            "unconfigured": { value: "{color.gray.200}" }
        }
    },
    "radius": {
        "button": {
            "radius": { value: 50}
        }
    },
    "spacing": {
        "button": {
            "padding-x": { value: "{spacing.md-l}" },
            "padding-y": { value: "{spacing.md-s}" },
        },
        "buttonSmall": {
            "padding-x": { value: "{spacing.sm}" },
            "padding-y": { value: "{spacing.xs}" },
        },
    },
    "font-size": {
        "button": {
            "small": {
                value: 13.25,
            }
        }
    }
}
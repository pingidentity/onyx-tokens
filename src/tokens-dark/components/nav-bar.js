import navBar from "../../tokens/components/nav-bar.js";
import { lighten } from "../../util/darken.js";
import base from "../color/base.js";

export default {
    ...navBar,
    "color": {
        "nav-bar": {
            "border": {
                "value": "{color.common.border}"
            }
        },
        "nav-bar-item": {
            "unselected": {
                "text": {
                    "value": "{color.gray.400}"
                }
            },
            "hover": {
                "bg": { value: lighten(base.color.gray[900].value, 0.04).hex() },
            },
            "selected": {
                "text": {
                    "value": "{color.white}",
                },
                "bg": { value: lighten(base.color.gray[900].value, 0.04).hex() },
            }
        }
    }
};
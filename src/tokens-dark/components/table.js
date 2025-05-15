import { lighten } from "../../util/darken.js";
import base from "../color/base.js";

export default {
    "color": {
        "table-row": {
            "hover": {
                "bg": { value: lighten(base.color.gray[900].value, 0.04).hex() },
            },
            "selected": {
                "bg": { value: "{color.table-row.hover.bg}" },
            }
        }
    }
}
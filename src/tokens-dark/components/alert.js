import alert from "../../tokens/components/alert.js";
export default {
    ...alert,
    "color": {
        "alert": {
            ...alert.color.alert,
            "text": { value: "{color.white}" },
            "success": {
                "bg": { value: "{color.common.light}" },
            },
            "critical": {
                "bg": { value: "{color.common.light}" },
            },
            "warning": {
                "bg": { value: "{color.common.light}" },
            },
            "info": {
                "bg": { value: "{color.common.light}" },
            },
        },
    },
};
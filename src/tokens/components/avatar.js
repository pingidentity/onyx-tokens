const avatarSizes = {
    "xs": { value: 24 },
    "sm": { value: 34 },
    "md": { value: 48 },
    "lg": { value: 72 },
    "xl": { value: 104 },
};

const factor = 0.4;

export default {
    "color": {
        "avatar": {
            "blue": {
                "bg": { "value": "{color.blue.light}" },
                "text": { "value": "{color.blue.dark}" }
            },
            "orange": {
                "bg": { "value": "{color.orange.light}" },
                "text": { "value": "{color.orange.dark}" }
            },
            "green": {
                "bg": { "value": "{color.green.light}" },
                "text": { "value": "{color.green.dark}" }
            },
            "purple": {
                "bg": { "value": "{color.purple.light}" },
                "text": { "value": "{color.purple.dark}" }
            },
            "pink": {
                "bg": { "value": "{color.pink.light}" },
                "text": { "value": "{color.pink.dark}" }
            },
            "red": {
                "bg": { "value": "{color.red.light}" },
                "text": { "value": "{color.red.dark}" }
            },
            "yellow": {
                "bg": { "value": "{color.yellow.light}" },
                "text": { "value": "{color.yellow.dark}" }
            },
            "teal": {
                "bg": { "value": "{color.teal.light}" },
                "text": { "value": "{color.teal.dark}" }
            },
            "cyan": {
                "bg": { "value": "{color.cyan.light}" },
                "text": { "value": "{color.cyan.dark}" }
            },
            "indigo": {
                "bg": { "value": "{color.indigo.light}" },
                "text": { "value": "{color.indigo.dark}" }
            },
        }
    },
    "size": {
        "avatar": avatarSizes,
    },
    "font-size": {
        "avatar": {
            "xs": { value: avatarSizes["xs"].value * factor },
            "sm": { value: avatarSizes["sm"].value * factor },
            "md": { value: avatarSizes["md"].value * factor },
            "lg": { value: avatarSizes["lg"].value * factor },
            "xl": { value: avatarSizes["xl"].value * factor },
        },
    },
};
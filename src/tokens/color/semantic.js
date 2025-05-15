export default {
    "color": {
        "primary": {
            "value": "{color.blue.base.value}",
        },
        "primary-light": {
            "value": "{color.blue.light}",
            "contrast": [
                {
                    "color": "{color.font.base}",
                    "ratio": 4.5
                },
            ]
        },
        "primary-dark": {
            "value": "{color.blue.dark}",
            "contrast": [
                {
                    "color": "{color.primary-light}",
                    "ratio": 4.5
                },
            ]
        },
        "success": {
            "value": "{color.green.500.value}",
        },
        "success-light": {
            "value": "{color.green.light}",
            "contrast": [
                {
                    "color": "{color.font.base}",
                    "ratio": 4.5
                },
            ]
        },
        "success-dark": {
            "value": "{color.green.dark}",
            "contrast": [
                {
                    "color": "{color.success-light}",
                    "ratio": 4.5
                },
            ]
        },
        "critical": {
            "value": "{color.red.500.value}",
            "contrast": [
                {
                    "color": "{color.common.bg.secondary}",
                    "ratio": 3
                },
            ],
        },
        "critical-light": {
            "value": "{color.red.light}",
            "contrast": [
                {
                    "color": "{color.font.base}",
                    "ratio": 4.5
                },
            ]
        },
        "critical-dark": {
            "value": "{color.red.dark}",
            "contrast": [
                {
                    "color": "{color.critical-light}",
                    "ratio": 4.5
                },
            ],
        },
        "warning": {
            "value": "{color.yellow.500}",
        },
        "warning-light": {
            "value": "{color.yellow.light}",
            "contrast": [
                {
                    "color": "{color.font.base}",
                    "ratio": 4.5
                },
            ]
        },
        "warning-dark": {
            "value": "{color.yellow.dark}",
            "contrast": [
                {
                    "color": "{color.common.bg.secondary}",
                    "ratio": 4.5
                },
                {
                    "color": "{color.warning-light}",
                    "ratio": 4.5
                },
            ],
        },
        "info": {
            "value": "{color.blue.500}",
        },
        "info-light": {
            "value": "{color.blue.light}",
            "contrast": [
                {
                    "color": "{color.font.base}",
                    "ratio": 4.5
                },
            ]
        },
        "info-dark": {
            "value": "{color.blue.dark}",
            "contrast": [
                {
                    "color": "{color.common.bg.secondary}",
                    "ratio": 4.5
                },
                {
                    "color": "{color.info-light}",
                    "ratio": 4.5
                },
            ],
        },
    }
}
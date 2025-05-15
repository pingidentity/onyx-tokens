export default {
  "color": {
    "font": {
      "base": {
        "value": "{color.gray.900.value}",
        "contrast": [
          {
            "color": "{color.common.bg.base}",
            "ratio": 4.5
          }
        ]
      },
      "light": {
        "value": "{color.gray.600.value}",
        "contrast": [
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          }
        ]
      },
      "reverse": {
        "value": "{color.white}"
      },
      "link": {
        "value": "{color.blue.base.value}",
        "contrast": [
          {
            "color": "{color.font.base.value}",
            "ratio": 3
          },
          {
            "color": "{color.common.bg.base}", // will there never be a link on secondary BG?
            "ratio": 4.5
          }
        ]
      },
      "link.hover": {
        "value": "{color.blue.600}",
        "contrast": [
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          }
        ]
      },
      "error": {
        "value": "{color.critical}",
        "contrast": [
          {
            "color": "{color.common.bg.base}",
            "ratio": 4.5
          },
        ],
      }
    }
  }
}

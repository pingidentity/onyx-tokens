export default {
  "color": {
    "font": {
      "base": {
        "value": "{color.gray.100}",
        "contrast": [
          {
            "color": "{color.common.bg.base}",
            "ratio": 4.5
          }
        ]
      },
      "light" : {
        "value": "{color.gray.400}",
        "contrast": [
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          }
        ]
      },
      "reverse": {
        "value": "{color.black}"
      },
      "link" : {
        "value": "{color.blue.400}",
        "contrast": [
          {
            "color": "{color.font.base}",
            "ratio": 3
          },
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          }
        ]
      },
      "link-hover": {
        "value": "{color.blue.300}", // doesn't match Colin's styleguide
        "contrast": [
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          }
        ]
      },
      "error": {
        "value": "{color.red.300}",
        "contrast": [
          {
            "color": "{color.common.bg.secondary}",
            "ratio": 4.5
          },
        ],
      }
    }
  }
}

import card from "../../tokens/components/card.js";

export default {
    ...card,
    "spacing": {
        ...card.spacing,
        "card": {
            ...card.spacing.card,
            "shadow": {
                ...card.spacing.card.shadow,
                "y": { "value": 0 },
                "blur": { "value": 0 },
            }
        }
    },
}
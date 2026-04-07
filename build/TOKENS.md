# Onyx Design Tokens Reference

> **Auto-generated file** - Do not edit manually.  
> Generated: 2026-04-07T15:35:39.201Z  
> Source: `@pingux/onyx-tokens`

<!-- AI AGENT CONTEXT:
This is the authoritative source for all design token values in @pingux/astro.
Read this file when users ask about:
- Specific token values (colors, spacing, sizes)
- Available color scales and their hex values  
- Component-specific tokens (button, input, avatar, etc.)
- Token names to use in the sx prop

For component VARIANTS and PATTERNS, see .github/astro-reference.md instead.
-->

This file contains all design tokens available in the Onyx/NextGen theme.

---

## Spacing Tokens

Use these tokens in the `sx` prop for consistent spacing:

| Token | Value |
|-------|-------|
| `xl` | 48px |
| `lg` | 24px |
| `md-l` | 20px |
| `md` | 16px |
| `md-s` | 12px |
| `sm` | 8px |
| `xs` | 4px |

### Component Spacing

| Token | Value |
|-------|-------|
| `spacing.badge.padding-x` | `8px` |
| `spacing.badge.padding-y` | `4px` |
| `spacing.button.padding-x` | `20px` |
| `spacing.button.padding-y` | `12px` |
| `spacing.buttonSmall.padding-x` | `8px` |
| `spacing.buttonSmall.padding-y` | `4px` |
| `spacing.card.shadow.y` | `1px` |
| `spacing.card.shadow.blur` | `3px` |
| `spacing.checkbox.label-gap` | `16px` |
| `spacing.field.gap` | `4px` |
| `spacing.input.padding-x` | `12px` |
| `spacing.container.padding` | `8px` |
| `spacing.modal.shadow.y` | `8px` |
| `spacing.modal.shadow.spread` | `16px` |

---

## Font Sizes

| Token | Value |
|-------|-------|
| `label` | 15px |
| `nav-bar-item` | 14px |
| `h6` | 12px |
| `h5` | 15px |
| `h4` | 18.75px |
| `h3` | 22.5px |
| `h2` | 26.25px |
| `h1` | 33.75px |
| `base` | 15px |
| `small` | 14px |
| `tiny` | 12px |

### Component Font Sizes

| Token | Value |
|-------|-------|
| `font-size.avatar.sm` | `9.600000000000001px` |
| `font-size.avatar.md` | `13.600000000000001px` |
| `font-size.avatar.lg` | `28.8px` |
| `font-size.avatar.xl` | `41.6px` |
| `font-size.button.small` | `13.25px` |

---

## Border Radius

| Token | Value |
|-------|-------|
| `radius.button.radius` | `50px` |
| `radius.checkbox.radius` | `4px` |
| `radius.input` | 4px |
| `radius.md` | 4px |
| `radius.lg` | 8px |
| `radius.xl` | 16px |

---

## Size Tokens

| Token | Value |
|-------|-------|
| `size.alert.icon` | `18px` |
| `size.avatar.sm` | `24px` |
| `size.avatar.md` | `34px` |
| `size.avatar.lg` | `72px` |
| `size.avatar.xl` | `104px` |
| `size.badge` | 12px |
| `size.input.height` | `50px` |
| `size.modal.sm` | `300px` |
| `size.modal.md` | `500px` |
| `size.modal.lg` | `800px` |
| `size.modal.xl` | `1140px` |
| `size.control.height` | `50px` |

---

## Color Palette

### Primary Colors

| Token | Value |
|-------|-------|
| `primary` | `#1a73e8` |
| `primary-light` | `#eaf2fd` |
| `primary-dark` | `#155cba` |

### Status Colors

| Token | Value |
|-------|-------|
| `success` | `#22a75f` |
| `success-light` | `#d3eddf` |
| `success-dark` | `#0e4326` |
| `critical` | `#da3a2b` |
| `critical-light` | `#f8d8d5` |
| `critical-dark` | `#83231a` |
| `warning` | `#ffb946` |
| `warning-light` | `#fff1da` |
| `warning-dark` | `#664a1c` |
| `info` | `#1a73e8` |
| `info-light` | `#eaf2fd` |
| `info-dark` | `#155cba` |

### Common Colors

| Token | Value |
|-------|-------|
| `white` | `#ffffff` |
| `black` | `#000000` |

### Blue Scale

| Token | Value |
|-------|-------|
| `blue.100` | `#eaf2fd` |
| `blue.200` | `#a3c7f6` |
| `blue.300` | `#76abf1` |
| `blue.400` | `#488fed` |
| `blue.500` | `#1a73e8` |
| `blue.600` | `#155cba` |
| `blue.700` | `#10458b` |
| `blue.800` | `#0a2e5d` |
| `blue.900` | `#05172e` |
| `blue.base` | `#1a73e8` |
| `blue.light` | `#eaf2fd` |
| `blue.dark` | `#155cba` |
| `blue.faded` | `#1a73e880` |

### Indigo Scale

| Token | Value |
|-------|-------|
| `indigo.100` | `#f1dbf9` |
| `indigo.200` | `#e3b8f3` |
| `indigo.300` | `#d694ed` |
| `indigo.400` | `#c871e7` |
| `indigo.500` | `#BA4DE1` |
| `indigo.600` | `#953eb4` |
| `indigo.700` | `#702e87` |
| `indigo.800` | `#4a1f5a` |
| `indigo.900` | `#250f2d` |
| `indigo.base` | `#BA4DE1` |
| `indigo.light` | `#f1dbf9` |
| `indigo.dark` | `#702e87` |

### Purple Scale

| Token | Value |
|-------|-------|
| `purple.100` | `#e2d9f3` |
| `purple.200` | `#c5b3e6` |
| `purple.300` | `#a98eda` |
| `purple.400` | `#8c68cd` |
| `purple.500` | `#6f42c1` |
| `purple.600` | `#59359a` |
| `purple.700` | `#432874` |
| `purple.800` | `#2c1a4d` |
| `purple.900` | `#160d27` |
| `purple.base` | `#6f42c1` |
| `purple.light` | `#e2d9f3` |
| `purple.dark` | `#432874` |

### Pink Scale

| Token | Value |
|-------|-------|
| `pink.100` | `#f7d6e6` |
| `pink.200` | `#efadce` |
| `pink.300` | `#e685b5` |
| `pink.400` | `#de5c9d` |
| `pink.500` | `#d63384` |
| `pink.600` | `#ab296a` |
| `pink.700` | `#801f4f` |
| `pink.800` | `#561435` |
| `pink.900` | `#2b0a1a` |
| `pink.base` | `#d63384` |
| `pink.light` | `#f7d6e6` |
| `pink.dark` | `#801f4f` |

### Red Scale

| Token | Value |
|-------|-------|
| `red.100` | `#f8d8d5` |
| `red.200` | `#f0b0aa` |
| `red.300` | `#e98980` |
| `red.400` | `#e16155` |
| `red.500` | `#da3a2b` |
| `red.600` | `#ae2e22` |
| `red.700` | `#83231a` |
| `red.800` | `#571711` |
| `red.900` | `#2c0c09` |
| `red.base` | `#da3a2b` |
| `red.light` | `#f8d8d5` |
| `red.dark` | `#83231a` |

### Orange Scale

| Token | Value |
|-------|-------|
| `orange.100` | `#ffe5d0` |
| `orange.200` | `#fecba1` |
| `orange.300` | `#feb272` |
| `orange.400` | `#fd9843` |
| `orange.500` | `#fd7e14` |
| `orange.600` | `#ca6510` |
| `orange.700` | `#984c0c` |
| `orange.800` | `#653208` |
| `orange.900` | `#331904` |
| `orange.base` | `#fd7e14` |
| `orange.light` | `#ffe5d0` |
| `orange.dark` | `#984c0c` |

### Yellow Scale

| Token | Value |
|-------|-------|
| `yellow.100` | `#fff1da` |
| `yellow.200` | `#ffe3b5` |
| `yellow.300` | `#ffd590` |
| `yellow.400` | `#ffc76b` |
| `yellow.500` | `#ffb946` |
| `yellow.600` | `#cc9438` |
| `yellow.700` | `#996f2a` |
| `yellow.800` | `#664a1c` |
| `yellow.900` | `#33250e` |
| `yellow.base` | `#ffb946` |
| `yellow.light` | `#fff1da` |
| `yellow.dark` | `#664a1c` |

### Green Scale

| Token | Value |
|-------|-------|
| `green.100` | `#d3eddf` |
| `green.200` | `#a7dcbf` |
| `green.300` | `#7aca9f` |
| `green.400` | `#4eb97f` |
| `green.500` | `#22a75f` |
| `green.600` | `#1b864c` |
| `green.700` | `#146439` |
| `green.800` | `#0e4326` |
| `green.900` | `#072113` |
| `green.base` | `#22a75f` |
| `green.light` | `#d3eddf` |
| `green.dark` | `#0e4326` |

### Teal Scale

| Token | Value |
|-------|-------|
| `teal.100` | `#d1ecf1` |
| `teal.200` | `#a2dae3` |
| `teal.300` | `#74c7d4` |
| `teal.400` | `#45b5c6` |
| `teal.500` | `#17A2B8` |
| `teal.600` | `#128293` |
| `teal.700` | `#0e616e` |
| `teal.800` | `#09414a` |
| `teal.900` | `#052025` |
| `teal.base` | `#17A2B8` |
| `teal.light` | `#d1ecf1` |
| `teal.dark` | `#0e616e` |

### Cyan Scale

| Token | Value |
|-------|-------|
| `cyan.100` | `#cff4fc` |
| `cyan.200` | `#9eeaf9` |
| `cyan.300` | `#6edff6` |
| `cyan.400` | `#3dd5f3` |
| `cyan.500` | `#0dcaf0` |
| `cyan.600` | `#0aa2c0` |
| `cyan.700` | `#087990` |
| `cyan.800` | `#055160` |
| `cyan.900` | `#032830` |
| `cyan.base` | `#0dcaf0` |
| `cyan.light` | `#cff4fc` |
| `cyan.dark` | `#087990` |

### Gray Scale

| Token | Value |
|-------|-------|
| `gray.100` | `#f6f8fa` |
| `gray.200` | `#e7eef4` |
| `gray.300` | `#d3d8e0` |
| `gray.400` | `#c0c9d5` |
| `gray.500` | `#69788B` |
| `gray.600` | `#5e6d82` |
| `gray.700` | `#455469` |
| `gray.800` | `#324054` |
| `gray.900` | `#23282e` |
| `gray.light` | `#f6f8fa` |
| `gray.dark` | `#455469` |

---

## Font Colors

| Token | Value |
|-------|-------|
| `font.base` | `#23282e` |
| `font.light` | `#5e6d82` |
| `font.reverse` | `#ffffff` |
| `font.link` | `#1a73e8` |
| `font.link.hover` | `#155cba` |
| `font.error` | `#da3a2b` |
| `font.label` | `#23282e` |

---

## Component Tokens

### Button

| Token | Value |
|-------|-------|
| `button.primary.text` | `#ffffff` |
| `button.primary.bg` | `#1a73e8` |
| `button.primary.border` | `#1a73e8` |
| `button.primary.hover.bg` | `#1462c8` |
| `button.primary.hover.border` | `#1462c8` |
| `button.primary.press` | `#135cbc` |
| `button.default.text` | `#1a73e8` |
| `button.default.bg` | `#00000000` |
| `button.default.border` | `#1a73e8` |
| `button.default.hover.bg` | `#1a73e8` |
| `button.default.hover.text` | `#ffffff` |
| `button.critical.text` | `#ffffff` |
| `button.critical.bg` | `#da3a2b` |
| `button.critical.border` | `#da3a2b` |
| `button.critical.hover` | `#be2f21` |
| `button.critical.press` | `#b32c1f` |

### Input

| Token | Value |
|-------|-------|
| `input.text` | `#23282e` |
| `input.bg` | `#ffffff` |
| `input.border` | `#69788B` |
| `input.readonly-bg` | `#f6f8fa` |

### Checkbox

| Token | Value |
|-------|-------|
| `checkbox.bg` | `#ffffff` |
| `checkbox.border` | `#e7eef4` |
| `checkbox.readonly-bg` | `#f6f8fa` |
| `checkbox.readonly-checked-bg` | `#1a73e880` |

### Avatar Colors

| Token | Background | Text |
|-------|-------|-------|
| `blue` | `#eaf2fd` | `#155cba` |
| `orange` | `#ffe5d0` | `#984c0c` |
| `green` | `#d3eddf` | `#0e4326` |
| `purple` | `#e2d9f3` | `#432874` |
| `pink` | `#f7d6e6` | `#801f4f` |
| `red` | `#f8d8d5` | `#83231a` |
| `yellow` | `#fff1da` | `#664a1c` |
| `teal` | `#d1ecf1` | `#0e616e` |
| `cyan` | `#cff4fc` | `#087990` |
| `indigo` | `#f1dbf9` | `#702e87` |

---

## Line Height

| Token | Value |
|-------|-------|
| `base` | 1.6 |

---

## Dark Theme Overrides

The dark theme (`tokens-dark.json`) contains overrides for colors when using dark mode.
Import `astroTokensDark` from `@pingux/onyx-tokens` for dark theme values.

---

## Usage

```jsx
// Import tokens directly
import { astroTokens } from '@pingux/onyx-tokens';

// Use in sx prop
<Box sx={{ 
  padding: 'md',      // 16px
  color: 'primary',   // #1a73e8
  bg: 'gray.100'      // #f6f8fa
}}>
```

```jsx
// Access programmatically
const primaryColor = astroTokens.color.primary; // '#1a73e8'
const spacing = astroTokens.spacing.md;         // 16
```

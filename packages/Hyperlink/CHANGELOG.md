# @igloo-ui/hyperlink

## 0.6.0

### Minor Changes

- 08f9a05: Clean up non-Workleap rebranded styles for components E-P.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 0.5.2

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 0.5.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 0.5.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

## 0.4.4

### Patch Changes

- 81723d0: Updated Hopper depedency

## 0.4.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 0.4.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 0.4.1

### Patch Changes

- 42efe0b: Fix issue where classNames were not passed to children when cloned

## 0.4.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 0.3.4

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 0.3.3

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 0.3.2

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 0.3.1

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 0.3.0

### Minor Changes

- 4096378: Applied the workleep rebrand to Alert, Hyeprlink and Tooltips. Fixed an override css issue in Iconbutton.

## 0.2.0

### Minor Changes

- 723fbee: Applied the workleep rebrand to Alert, Hyeprlink and Tooltips. Fixed an override css issue in Iconbutton.

## 0.1.15

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.1.14

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.1.13

### Patch Changes

- d5c91f5: link shared components with aliases

## 0.1.12

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.11

### Patch Changes

- 0640409: Update packages

  - "react-aria": "^3.21.0",
  - "@react-aria/link": "^3.35",
  - "react-stately": "^3.19.0"

- 0640409: udpate classnames to 2.3.2

## 0.1.10

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 0.1.9

### Patch Changes

- cd04a2e: Fix hyperlink secondary + danger color on focus

## 0.1.8

### Patch Changes

- 0a86f13: Update content of README

## 0.1.7

### Patch Changes

- f019f88: fix position of icon with content warp

## 0.1.6

### Patch Changes

- ac5d81a: fix position of icon with content warp

## 0.1.5

### Patch Changes

- ba32c70: fix position of icon with content warp

## 0.1.4

### Patch Changes

- f83c8b4: fix position of icon with content warp

## 0.1.3

### Patch Changes

- 574c7d8: Fix display of translation content

## 0.1.2

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 0.1.1

### Patch Changes

- 4a256e3: IE11 compatibility

## 0.1.0

### Minor Changes

- 2e23826: Initial release

  Component API

  | name           | description                                                                           |
  | -------------- | ------------------------------------------------------------------------------------- |
  | appearance     | link appearance `primary, secondary, premium, ghost, danger`                          |
  | size           | Changes the size of link, giving more or less padding <br/> `small, medium`           |
  | iconLeading    | Icon to display to the left of link content                                           |
  | iconTrailing   | Icon to display to the right of link content                                          |
  | children       | the content to display inside the link                                                |
  | underline      | add a underline on link                                                               |
  | dataTest       | add a data-test tag for automated tests                                               |
  | className      | add a specific class to the link                                                      |
  | intercomTarget | add a data-intercom-target with unique id to link a components to a Product Tour step |

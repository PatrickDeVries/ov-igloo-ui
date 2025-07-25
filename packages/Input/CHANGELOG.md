# @igloo-ui/input

## 3.0.0

### Major Changes

- 08f9a05: Clean up non-Workleap rebranded styles for components E-P.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 2.3.3

### Patch Changes

- 35e2ada: Prevent conflict of hover/focus states on Input and TextArea

## 2.3.2

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens

## 2.3.1

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies

## 2.3.0

### Minor Changes

- 7c83d3d: Added pressed state to components that needed it / fixed focus style for fields

## 2.2.6

### Patch Changes

- 81723d0: Updated Hopper depedency

## 2.2.5

### Patch Changes

- e934837: UI fix for focused state

## 2.2.4

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package

## 2.2.3

### Patch Changes

- 22bf61c: Added proper placeholder color for Workleap brand. Brought placeholder css outside of the layer so that it worked as before and is used instead of keeper browser extension. We are not using !important because we don't actually want to override other browser extensions that really need to change the placeholder color.

## 2.2.2

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 2.2.1

### Patch Changes

- 4c70af0: Fix border color for input and texteditor on active and hovered

## 2.2.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 2.1.8

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 2.1.7

### Patch Changes

- 7d36815: Updated input icon and character count colors.

## 2.1.6

### Patch Changes

- 39a1d18: Fix for minor issues

## 2.1.5

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 2.1.4

### Patch Changes

- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 2.1.3

### Patch Changes

- c226be8: Applied the new style to the component.

## 2.1.2

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 2.1.1

### Patch Changes

- c3efaf5: Fixed tests and snapshots since react-aria generated ids changed and viewBox was added to icons.

## 2.1.0

### Minor Changes

- e876d94: Added max length and character indicator

## 2.0.5

### Patch Changes

- 84e2d78: Adding a hover effect

## 2.0.4

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 2.0.3

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 2.0.2

### Patch Changes

- 0640409: Update @igloo-ui/icons to 1.6.0
- 0640409: udpate classnames to 2.3.2

## 2.0.1

### Patch Changes

- d971143: All tests were updated to use testing library and not enzyme

## 2.0.0

### Major Changes

- 9842a0d: Disabled pointer-events on prefix icon

  BREAKING CHANGE

  Remove top and bottom margin

## 1.1.0

### Minor Changes

- 4a388ae: Add Postfix icon position in Input component

## 1.0.7

### Patch Changes

- 8bc7f2c: remove focus border on disabled state

## 1.0.6

### Patch Changes

- 38a4994: Update dependency on @igloo-ui/icons and other @igloo libs

## 1.0.5

### Patch Changes

- 0a86f13: Update content of README

## 1.0.4

### Patch Changes

- 8c8686e: Change @import of font.css file for a @use in SASS files

## 1.0.3

### Patch Changes

- 4a256e3: IE11 compatibility

## 1.0.2

### Patch Changes

- 519f009: Uncontrolled input bugfix

## 1.0.1

### Patch Changes

- 2da8010: Fix render of elements with the css var --grey-{...}

## 1.0.0

### Major Changes

- ef50a1b: BRAKING CHANGE

  - Replace `readOnly` props by `disabled`

  New Features

  - Add options for passing a Icon on the input

  Update

  - Upgrade tokens version

## 0.1.0

### Minor Changes

- 8e6a4ec: ## Input component

  The Input component specifies an input field where the user can enter data.

  ### Component API

  | name      | description                                          |
  | --------- | ---------------------------------------------------- |
  | type      | Specifies the type to display                        |
  | isCompact | True for a compact appearance.                       |
  | value     | Specifies the value inside the input.                |
  | autoFocus | True if you need the input to be focus on page load. |
  | readOnly  | True if you need the input to be readonly.           |
  | onChange  | Function called when a key is pressed.               |
  | dataTest  | Add a data-test tag for automated tests              |

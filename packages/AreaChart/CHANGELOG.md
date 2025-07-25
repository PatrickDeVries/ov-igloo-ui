# @igloo-ui/area-chart

## 2.0.0

### Major Changes

- da47695: Clean up non-Workleap rebranded styles for components A-D.
  All consumers should now be using the Workleap branded versions of the components. This will happen automatically, and consumers can stop setting `data-brand="workleap"` for these components.

## 1.2.9

### Patch Changes

- bcb9f75: - Updated @floating-ui/react to latest to fix issues with FloatingPortal
  - Updated Dropdown, Popover, FloatingLinkEditorPlugin, and Tooltip to render portals only when open

## 1.2.8

### Patch Changes

- 30c350b: Fixed an issue where the wrong month label was shown in rare cases

## 1.2.7

### Patch Changes

- 2afe0d0: Updated to latest icons and tokens
- Updated dependencies [2afe0d0]
  - @igloo-ui/provider@0.1.5

## 1.2.6

### Patch Changes

- d8dc4ea: Updated Hopper-UI tokens dependencies
- Updated dependencies [d8dc4ea]
  - @igloo-ui/provider@0.1.4

## 1.2.5

### Patch Changes

- 81723d0: Updated Hopper depedency
- Updated dependencies [81723d0]
  - @igloo-ui/provider@0.1.3

## 1.2.4

### Patch Changes

- 8bb3586: UI fix - Reverting to a solid colored line for complexity reasons

## 1.2.3

### Patch Changes

- 1613653: Updated Hopper Tokens Fonts package
- Updated dependencies [1613653]
  - @igloo-ui/provider@0.1.2

## 1.2.2

### Patch Changes

- 4a2812e: Added locale support using Igloo's provider.
- Updated dependencies [4a2812e]
  - @igloo-ui/provider@0.1.1

## 1.2.1

### Patch Changes

- 6ea531f: Updated dependency versions for react-aria packages, luxon and hopper

## 1.2.0

### Minor Changes

- 4846c59: Wrapped Igloo CSS in @layer to isolate it.

## 1.1.1

### Patch Changes

- cfb5619: Updated hopper token versions and button versions.

## 1.1.0

### Minor Changes

- fece90c: Updated AreaChart's dot colors for Workleap on both the line and tooltip. Also fixed the DataRange min and max prop types so that it only accepts specific string values; like it always should have been.

## 1.0.4

### Patch Changes

- 7d36815: Updated hopper token versions and igloo icon versions.

## 1.0.3

### Patch Changes

- a2df55d: Updated to latest Hopper Token dependency

## 1.0.2

### Patch Changes

- b99b307: Removed the error caused when all the scores in the AreaChart are null.

## 1.0.1

### Patch Changes

- 9739155: Updated storybook and recharts. Applied the new brand look for filter.
- 9739155: Gave ColorPicker the new Wokleap look. Color now uses css variables to update its color. Fixed spacing issues in tooltip. Updated hopper token version.

## 1.0.0

### Major Changes

- 4096378: Applied the new brand style to AreaChart and removed the gradient area under the line.

  ## BREAKING CHANGE

  The 'withColoredArea' prop was removed from AreaChart. This is because we removed the gradient area completely.

## 0.6.3

### Patch Changes

- bf4ddef: Updated storybook version and linting. Made linting fixes in these components.

## 0.6.2

### Patch Changes

- f07b40f: Fixed the AreaChart styling for the empty data message. It is also responsive now.

## 0.6.1

### Patch Changes

- 89d10c5: Updated recharts version and fixed dropdown mock

## 0.6.0

### Minor Changes

- a1bcd80: Add dotted line area for null values

## 0.5.2

### Patch Changes

- 56c75d0: Fixed the y-axis width calculation hook to work properly when usign the loading prop.

## 0.5.1

### Patch Changes

- a41e1d4: Fix: moved destructuring of props to function parameters so that storybook will automatically show the default value in the props table. It was done in Modal because it needed to send props to useDialog. In this case, @default annotation was used in comments.

## 0.5.0

### Minor Changes

- 589b6ea: displays in the x-axis + tooltip the utc date instead of the local date

## 0.4.0

### Minor Changes

- 77e4f12: Added special month formatting for May, June, July for English locale only in function formatSpecialMonth
  Added new props for setting the maximum elements of the x-axis

## 0.3.0

### Minor Changes

- 1b4cf68: Added a locale prop to be able to change languages

## 0.2.1

### Patch Changes

- 93dd0cb: fix(AreaChart): Issues with loading and empty state
  - rename the css animation to avoid conflicts
  - update y-axis size when the loading state disappeared
  - change the orientation of animation for empty state

## 0.2.0

### Minor Changes

- c4eb19a: add a loading state

## 0.1.2

### Patch Changes

- 0855a3c: The extra space ont he left of the area chart was removed

## 0.1.1

### Patch Changes

- 6ee9c45: Updated anything causing errors or warnings in the browser console

## 0.1.0

### Minor Changes

- 83a9e99: Feat: initial release of the area chart component

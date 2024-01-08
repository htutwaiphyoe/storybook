# Complete Design System

- Productivity
- Consistency
- Velocity

- Yarn Workspace
- React
- TypeScript
- Tailwind
- Jest AXE
- Styled Dictionary
- Storybook
- React Testing Library
- Changesets

- centralized places for components
- single source of truth

4 fundamental concepts

- design tokens => piece of UI information (color, spacing)
- source of truth => figma
- pace layering (Mental) => design token, simple components, complex components
- atomic design (Mental) => ions => atoms => molecules => organisms => templates => pages

Monorepo Architecture

Figma => Foundation => Component Library => Storybook

Yarn workspace

- delegate and deduplicate dependencies
- run package scripts directly from root repository
- handle sibling package dependency

yarn version 3 => `yarn set version berry`

yarn workspace => `yarn init -w`

yarn packages => `yarn init`, -p => private

local package => @name/package

package list => `yarn workspaces list`

package dependency with other package => yarn workspace @complete-design-system/storybook add @complete-design-system/react @complete-design-system/foundation

Typescript Configuration

root => yarn add -D typescript
package => yarn workspace @complete-design-system/foundation add -D typescript

ESLint & Prettier

yarn workspace @complete-design-system/foundation add -D @storybook/addon-a11y
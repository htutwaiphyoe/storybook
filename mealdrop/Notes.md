# Complete Guide

file => fileName.stories.tsx

export default metadata for storybook

named export for stories ui

component driven user interfaces => react => atomic design

npx sb init => storybook installation
yarn storybook => development mode
yarn build-storybook => standalone mode

.storybook => main.js => server => load stories file => need to restart, preview.js => client => render stories file => hot module loading

stories folder => .stories.tsx

[Component Story Format (CSF)](https://storybook.js.org/docs/api/csf)

args => props

argTypes => props type in storybook like color picker, radio

args and argTypes => can define in component level or each story level

storybook merge component and story level args, not overwrite

"strict" = true makes typescript inferences

storybook supports markdown => fileName.stories.mdx

title => Header/Folder/Story

parameters for addons

layout => layout of story = fullscreen, centered, padded

decorators => a way to wrap a story in extra “rendering” functionality

decorators can add global (preview.js), component and story levels

global => DecoratorFn

decorators => add in array and order matters

essential addons

action addons for user actions

viewport addons for responsive viewport and devices

docs addons for md support and autodocs => living documentation

controls addons for prop control

background addon for component background

storybook manager => .storybook/manager.js

theme => storybook theme and ui design (Company theme), not component

favicon => manager-header.html

[project](https://github.com/yannbf/storybook-for-react-apps)

better to add all variants in story

decorators start with `with`

decorator can access story context

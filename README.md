# Design

[Project source](https://www.youtube.com/watch?v=VE8BkImUciY&list=PLSB84OJvL5mgIFh7cgg0H2wnvIB0VbKgY&index=5&t=171s)

## Table of content

NextJS (App directory)

npx create-next-app@latest . => . for not creating new folder

app router => page file => home page

app => dashboard => settings

[slug] => dynamic page

(group) => route group => does not include in route url

route => folder + page.tsx

default layout => hoc of all pages

can create different layout for different pages

navbar and footer components

loading.tsx for loading for page transition

Next.js auto lazy load the pages

error.tsx for error page

Next.js uses google font by default

SSR => server side rendering
CSR => client side rendering

by default => all are SSR

use 'use client' for CSR

CSR => empty html + bundled JS files => render UI => slow initial loading => bad SEO
SSR => html page => render that html => fast initial loading

SSR components cannot interact with user actions, need to change to CSR for interactivity

NextJS => Server + Client components

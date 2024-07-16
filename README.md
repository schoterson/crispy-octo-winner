# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This example shows how nested children with scroll, in a parent with scroll can prevent scroll when the mouse wheel is used.  Specifically when a popup layer contains content that itself may need to scroll and you don't want any of the lower z-index content to scroll.

## To start
```
npm install --force
npm run dev
// or 
yarn install
yarn dev
```
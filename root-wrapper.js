import React from "react"
import { createGlobalStyle } from "styled-components"
import Layout from "./src/components/layout"
import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
/* Variables */

:root {
  /* Primary Color */

  --clr-primary-1: #5c43f5;
  --clr-primary-2: #705df2;

  --clr-btn-dark: #272727;

  --clr-white: #fff;
  --clr-black: #1a1a1a;
  --clr-dark-grey: #222;
  --clr-footer: #202020;
  --clr-light-grey: #8b8b8b;

  --ff-primary: "Roboto", sans-serif;

  --radius: 0.25rem;

  --max-width: 1180px;
  --fixed-width: 1180px;
}

/* Global styles */

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--ff-primary);
  background: var(--clr-black);
  color: var(--clr-white);
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.container {
  width: var(--fixed-width);
}


button{
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  height: 47px;
  border-radius: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  color: var(--clr-white);
  overflow: hidden;
  background: var(--clr-btn-dark);
  font-size: 1rem;
  font-weight: 800;
  span{
    cursor: pointer;
  }
  .hover{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.05;
    transform: scaleX(0);
    transform-origin: 100% 100%;
    transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
    will-change: transform;
  }

  .icon {
    position: relative;
    opacity: 1;
    width: 25px;
    height: 47px;
    margin-left: 15px;
    transition: opacity 0.3s;
    will-change: opacity;

    svg{
      width: 100%;
      height: 100%;
    }
  }

  .label {
    position: relative;
    text-align: center;
    margin-right: 15px;
    margin-left: 15px;
    opacity: 0.85;
    transition: opacity 0.3s;
    will-change: opacity;
  }
}

button:hover .hover{
  transform-origin: 0 0;
  transform: scaleX(1);
}

button:hover .label {
  transition-delay: 0.25s;
  opacity: 1;
}
`

export const wrapPageElement = ({ element, props }) => {
  return (
    <GatsbyProvider>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>
    </GatsbyProvider>
  )
}

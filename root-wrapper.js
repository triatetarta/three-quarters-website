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

  --width: 80vw;
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

 
  @media screen and (max-width: 600px) {
    height: 18px;
  }

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

    @media screen and (max-width: 600px) {
      margin-left: 10px;
  }
  }

  @media screen and (max-width: 600px) {
    height: 35px;
    font-size: 1rem;
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


/* projects */
.project-wrapper{
  max-width: var(--max-width);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: var(--width);
  }

 



  .details{
    margin-top: 5rem;
    display: flex;
    background: var(--clr-primary-2);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    .information{
      width: 55%;
      padding: 40px 45px 30px 45px;
      @media screen and (max-width: 600px) {
        width: 100%;
      }

      .label{
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: -0.05rem;
      }
      h2{
        margin-bottom: 1.2rem;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.25rem;

        @media screen and (max-width: 1024px) {
          font-size: 1.5rem;
         }
      }
      .tech-used{
        font-size: 1rem;
        font-weight: 300;

        span {
          font-weight: 500;
          display: inline-block;
          padding: 2px 5px;
          border-radius: 4px;
          border: 1px solid #fff;
          margin-left: 1rem;
          margin-top: .8rem;
        }
      }
    }
    .buttons-side{
      width: 45%;
      background: rgba(0,0,0,0.133);
      padding-right: 0;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      padding: 40px 45px 30px 45px;
      @media screen and (max-width: 600px) {
        width: 100%;
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;

      }

      .title{
        margin-bottom: 1rem;

        .icon{
          display: inline-block;
          vertical-align: middle;
         

          svg{ 
            display: block;
            font-size: 1.4rem;
          }
        }
        .label{
          display: inline-block;
          vertical-align: middle;
          margin-left: 8px;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
      .buttons{
        a{
          margin-right: 20px;
          @media screen and (max-width: 1024px) {
             font-size: .7rem;
             }

          .project{
            background: #fff;
            color: var(--clr-primary-2);

            @media screen and (max-width: 1024px) {
              margin-bottom: .5rem;
             }

            .hover{
              background: var(--clr-primary-2);
            }
          }
        }
      }
    }
  }

  .description {
    margin-top: 2rem;
    margin-bottom: 4rem;
    display: flex;
    .left{
      width: 60%;
      padding: 40px 45px 30px 45px;

      @media screen and (max-width: 600px) {
        width: 100%;
        padding: 20px 10px;
      }

      h3{
        font-size: 2rem;
        margin-bottom: 1.5rem;

        @media screen and (max-width: 1024px) {
            font-size: 1.5rem;
          }
      }
      p{
        font-size: 1.05rem;
        line-height: 1.8rem;
        letter-spacing: .05rem;
        font-weight: 200;

        span{
          background: #383343;
          color: #edebff;
          font-weight: 700;
          border-radius: 4px;
          padding: 2px 8px;
          margin-left: 5px;
          margin-right: 5px;
          white-space: nowrap;

          a{
            text-decoration: none;
            color: #edebff;
          }
        }
      }
    }
    .right{
      width: 40%;
      padding: 40px 45px 30px 45px;

      @media screen and (max-width: 600px) {
       display: none;
      }
    }
    
  }
}

.visible{
  transform: translateX(0%);
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

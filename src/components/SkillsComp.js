import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import {
  AiFillHtml5,
  AiOutlineMail,
  AiFillApi,
  AiOutlineHome,
} from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io5"
import {
  FaReact,
  FaNodeJs,
  FaSass,
  FaNpm,
  FaGitSquare,
  FaGithub,
  FaFigma,
  FaMailchimp,
} from "react-icons/fa"
import {
  SiStyledComponents,
  SiAdobephotoshop,
  SiFramer,
  SiGraphql,
  SiGatsby,
  SiMaterialUi,
  SiBootstrap,
  SiRedux,
  SiNextDotJs,
  SiGreensock,
  SiTypescript,
  SiCraftcms,
  SiStrapi,
  SiAirtable,
} from "react-icons/si"
import { GiTriangleTarget } from "react-icons/gi"
import { FiPackage } from "react-icons/fi"

const SkillsComp = () => {
  return (
    <>
      <SkillStyles className="skills">
        <div className="about">
          <div className="core-tech">
            <h2>Core Technologies</h2>
            <ul>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiFillHtml5 /> HTML5
                </li>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <DiCss3 /> CSS3
                </li>
              </a>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <IoLogoJavascript /> JavaScript
                </li>
              </a>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <li>
                  <FaReact /> React
                </li>
              </a>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <li>
                  <FaNodeJs /> NodeJs
                </li>
              </a>
            </ul>
          </div>
          <div className="tools">
            <h2>Tools</h2>
            <ul>
              <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaSass /> Sass
                </li>
              </a>
              <a
                href="https://styled-components.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiStyledComponents /> Styled Components
                </li>
              </a>
              <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaNpm /> Npm
                </li>
              </a>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaGitSquare /> Git
                </li>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaGithub /> GitHub
                </li>
              </a>
              <a
                href="https://www.photoshop.com/en"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiAdobephotoshop /> Photoshop
                </li>
              </a>
              <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaFigma /> Figma
                </li>
              </a>
              <a href="https://mailchimp.com/" target="_blank" rel="noreferrer">
                <li>
                  <FaMailchimp /> Mailchimp
                </li>
              </a>
            </ul>
          </div>
          <div className="libraries">
            <h2>Other Tech</h2>
            <ul>
              <a
                href="https://github.com/axios/axios"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiFillApi /> Axios
                </li>
              </a>
              <a href="https://parceljs.org/" target="_blank" rel="noreferrer">
                <li>
                  <FiPackage /> Parcel.js
                </li>
              </a>
              <a href="https://graphql.org/" target="_blank" rel="noreferrer">
                <li>
                  <SiGraphql /> GraphQL
                </li>
              </a>
              <a href="https://greensock.com/" target="_blank" rel="noreferrer">
                <li>
                  <SiGreensock /> GSAP
                </li>
              </a>
              <a
                href="https://www.framer.com/motion/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiFramer /> Framer Motion
                </li>
              </a>
              <a
                href="https://www.contentful.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiCraftcms /> Contentful CMS
                </li>
              </a>
              <a href="https://strapi.io/" target="_blank" rel="noreferrer">
                <li>
                  <SiStrapi /> Strapi CMS
                </li>
              </a>
              <a href="https://airtable.com/" target="_blank" rel="noreferrer">
                <li>
                  <SiAirtable /> Airtable CMS
                </li>
              </a>
            </ul>
          </div>
          <div className="frameworks">
            <h2>Front-end Frameworks</h2>
            <ul>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiGatsby /> Gatsby
                </li>
              </a>
              <a
                href="https://material-ui.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiMaterialUi /> Material UI
                </li>
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiBootstrap /> Bootstrap
                </li>
              </a>
              <a
                href="https://get.foundation/emails.html"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <AiOutlineMail /> Foundation Email
                </li>
              </a>
            </ul>
          </div>
          <div className="learning">
            <h2>Learning</h2>
            <ul>
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <li>
                  <SiRedux /> Redux
                </li>
              </a>
              <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
                <li>
                  <SiNextDotJs /> Next.js
                </li>
              </a>
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <SiTypescript /> TypeScript
                </li>
              </a>
              <a href="https://threejs.org/" target="_blank" rel="noreferrer">
                <li>
                  <GiTriangleTarget /> THREE.js
                </li>
              </a>
            </ul>
          </div>
        </div>
      </SkillStyles>
      <StyledBtn className="back-home-row">
        <Link to="/">
          <button className="back-btn">
            <span className="hover"></span>
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="label">Back Home</span>
          </button>
        </Link>
      </StyledBtn>
    </>
  )
}

const SkillStyles = styled.div`
  max-width: var(--max-width);
  min-height: 100vh;
  margin: 0 auto;
  background: var(--clr-dark-grey);
  border-radius: 15px;
  margin-top: 3rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    max-width: var(--width);
  }

  .about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "core core"
      "tools libraries"
      "frameworks learning";
    grid-gap: 0.5rem;

    div {
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        width: 100%;
        background: var(--clr-primary-2);
        padding: 1rem;
        text-align: center;

        @media screen and (max-width: 600px) {
          font-size: 1.2rem;
        }
      }

      ul {
        a {
          width: 100%;
          text-decoration: none;
          color: white;
          text-align: center;
          padding: 0.8rem;
          font-size: 1.2rem;
          font-weight: lighter;
          transition: all 0.2s ease;

          &:hover {
            background: var(--clr-primary-1);
          }

          li {
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
              margin-right: 6px;
              color: var(--clr-light-grey);
            }
          }

          @media screen and (max-width: 600px) {
            font-size: 1rem;
            padding: 1rem 1rem;
          }
        }
      }
    }

    .core-tech {
      grid-area: core;

      ul {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
      }
    }

    .tools {
      grid-area: tools;

      ul {
        padding: 1rem 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }

    .libraries {
      grid-area: libraries;

      ul {
        padding: 1rem 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }

    .frameworks {
      grid-area: frameworks;

      ul {
        padding: 1rem 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }

    .learning {
      grid-area: learning;

      ul {
        padding: 1rem 1rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media screen and (max-width: 600px) {
    max-width: var(--width);
    margin-top: 1.5rem;

    .about {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 1fr;
      grid-template-areas:
        "core"
        "tools"
        "libraries"
        "frameworks"
        "learning";
      grid-gap: 0.5rem;

      .core-tech {
        ul {
          flex-wrap: wrap;
        }
      }
    }
  }
`

const StyledBtn = styled.div`
  text-align: center;
  .back-btn {
    margin-top: 3rem;
    margin-bottom: 4rem;
    background: var(--clr-primary-2);
  }
`

export default SkillsComp

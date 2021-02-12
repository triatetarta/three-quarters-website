import React from "react"
import SEO from "../../components/seo"
import {
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineEye,
} from "react-icons/ai"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import ProjectsButton from "../../components/ProjectsButton"

const gameImage = graphql`
  {
    file(relativePath: { eq: "gamedock.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const GameDock = () => {
  const data = useStaticQuery(gameImage)
  return (
    <>
      <SEO title="Game Dock" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">01.</div>
            <h2>Game Dock</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Styled Components</span>
              <span>Context API</span>
              <span>Axios</span>
              <span>RAWG API</span>
            </div>
          </div>
          <div className="buttons-side">
            <div className="title">
              <span className="icon">
                <AiOutlineEye />
              </span>
              <span className="label">View more:</span>
            </div>
            <div className="buttons">
              <a
                href="https://game-dock.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="contact project">
                  <span className="hover"></span>
                  <span className="icon">
                    <AiOutlineFundProjectionScreen />
                  </span>
                  <span className="label">Project</span>
                </button>
              </a>
              <a
                href="https://github.com/triatetarta/game-dock"
                target="_blank"
                rel="noreferrer"
              >
                <button className="contact">
                  <span className="hover"></span>
                  <span className="icon">
                    <AiOutlineGithub />
                  </span>
                  <span className="label">Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="description">
          <div className="left">
            <h3>Project Description</h3>
            <p>
              A <span>React</span> web application using the
              <span>RAWG API</span> and <span>Axios</span> to fetch Video Game
              information and buying options in real time. Styling is made with
              <span>Styled Components</span> and global state management
              utilizes the
              <span>Context API</span>. Final build was uploaded on
              <span>Netlify</span> via <span>Github</span>.
            </p>
          </div>
          <div className="right">
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>
        </div>
        <ProjectsButton />
      </div>
    </>
  )
}

export default GameDock

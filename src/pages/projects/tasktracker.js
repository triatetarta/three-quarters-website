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

const taskImage = graphql`
  {
    file(relativePath: { eq: "tasktracker.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TaskTracker = () => {
  const data = useStaticQuery(taskImage)

  return (
    <>
      <SEO title="Voice Task Tracker" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">06.</div>
            <h2>Voice Task Tracker</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>CSS</span>
              <span>Material UI</span>
              <span>Speechly API</span>
              <span>Context API</span>
            </div>
          </div>
          <div className="buttons-side">
            <div className="title">
              <span className="icon">
                <AiOutlineEye />
              </span>
              <span className="label">View more</span>
            </div>
            <div className="buttons">
              <a
                href="https://quarters-task-tracker.netlify.app/"
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
                href="https://github.com/triatetarta/quarters-task-tracker"
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
              A <span>React</span> task tracker web app that utilizes
              <span>Speechly API</span> for voice recognition commands. Layout
              styling was made with <span>Material UI</span> and global state
              management with <span>Context API</span>. Final build uploaded on
              <span>Netlify</span>.
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

export default TaskTracker

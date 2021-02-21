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

const joeleneImage = graphql`
  {
    file(relativePath: { eq: "joelene.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Joelene = () => {
  const data = useStaticQuery(joeleneImage)

  return (
    <>
      <SEO title="Joelene Kylie" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">04.</div>
            <h2>Joelene Kylie</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>SASS</span>
              <span>React Router</span>
              <span>Framer Motion</span>
              <span>Figma</span>
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
                href="https://www.joelenekylie.co.uk/"
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
                href="https://github.com/triatetarta/joelenephoto"
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
              A <span>React</span> website for the professional beauty
              photographer Joelene Kylie. It uses <span>React Router</span> for
              all navigation. Styling was made with <span>SASS</span>. All
              animations and page transitions were made with
              <span>Framer Motion</span>. UI Design prototype was created on
              <span>Figma</span>.
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

export default Joelene

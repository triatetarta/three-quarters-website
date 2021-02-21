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

const tektonImage = graphql`
  {
    file(relativePath: { eq: "tekton.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const TektonJoinery = () => {
  const data = useStaticQuery(tektonImage)
  return (
    <>
      <SEO title="Tekton Joinery" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">11.</div>
            <h2>Tekton Joinery LTD</h2>
            <div className="tech-used">
              Technologies used:
              <span>HTML</span>
              <span>SASS</span>
              <span>Parcel js</span>
              <span>JQuery</span>
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
              <a href="https://google.com">
                <button className="contact project">
                  <span className="hover"></span>
                  <span className="icon">
                    <AiOutlineFundProjectionScreen />
                  </span>
                  <span className="label">Project</span>
                </button>
              </a>
              <a href="https://google.com">
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
              An <span>HTML</span>,<span>SASS</span> website for London's Tekton
              Joinery LTD. Development enviroment setup with
              <span>Parcel.js</span>. Contact form utilizes
              <span>Netlify Forms</span> where the final build is uploaded on as
              well.
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

export default TektonJoinery

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

const ikosImage = graphql`
  {
    file(relativePath: { eq: "ikos.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IkosPage = () => {
  const data = useStaticQuery(ikosImage)

  return (
    <>
      <SEO title="Ikos Construction" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">01.</div>
            <h2>Ikos Construction</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Gatsby</span>
              <span>GraphQL</span>
              <span>Contentful CMS</span>
              <span>Node.js</span>
              <span>Styled Components</span>
              <span>Mailchimp</span>
              <span>Framer Motion</span>
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
                href="https://ikos-construction.netlify.app/"
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
                href="https://github.com/triatetarta/ikos-gatsby-contentful"
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
              A <span>Gatsby</span> website for Ikos Construction Company. It
              includes
              <span>Styled Components</span> and <span>SEO Optimization</span>.
              It is connected to the <span>Contentful CMS</span> which allows my
              client to manage the content of each page of their projectd. Each
              new page is being created dynamically with <span>Node.js</span>.
              Subscription Form is connected to
              <span>Mailchimp</span>. The project is uploaded on
              <span>Netlify</span> via <span>Github</span> and uses webhooks for
              automatic update. All animations and page transitions were done
              using <span>Framer Motion</span>.
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

export default IkosPage

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

const blogImage = graphql`
  {
    file(relativePath: { eq: "blog.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const BlogQuarters = () => {
  const data = useStaticQuery(blogImage)

  return (
    <>
      <SEO title="Quarters Blog" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">03.</div>
            <h2>Quarters Blog</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Gatsby</span>
              <span>GraphQL</span>
              <span>Contentful CMS</span>
              <span>Node.js</span>
              <span>Styled Components</span>
              <span>Github Jobs API</span>
              <span>Mailchimp</span>
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
                href="https://quarters-blog.netlify.app/"
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
                href="https://github.com/triatetarta/quarters-blog"
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
              A <span>Gatsby</span> website for a Tech Blog. It includes
              <span>Styled Components</span>, <span>SEO Optimization</span>and
              uses the <span>Github Jobs API</span> to fetch search data. It is
              connected to the <span>Contentful CMS</span> which allows you to
              manage the content of each page. Each new page is being created
              dynamically with <span>Node.js</span>. Subscription Form is
              connected to
              <span>Mailchimp</span>. The project is uploaded on
              <span>Netlify</span> via <span>Github</span> and uses webhooks for
              automatic update.
              <p>
                *To temporarily unlock access to Github Jobs API demo, click
                <span>
                  <a
                    href="https://cors-anywhere.herokuapp.com/corsdemo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </span>
                .
              </p>
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

export default BlogQuarters

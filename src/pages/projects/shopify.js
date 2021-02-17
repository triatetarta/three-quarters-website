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

const shopifyImage = graphql`
  {
    file(relativePath: { eq: "shopify.png" }) {
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
  const data = useStaticQuery(shopifyImage)

  return (
    <>
      <SEO title="Shopify Store" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">01.</div>
            <h2>Shopify Store</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Gatsby</span>
              <span>Shopify</span>
              <span>FaunaDB</span>
              <span>GraphQL</span>
              <span>Node.js</span>
              <span>Styled Components</span>
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
                href="https://quarter-hats.netlify.app/"
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
                href="https://github.com/triatetarta/quarters-hats"
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
              A fully-functional <span>Shopify</span> e-commerce store,
              custom-themed with <span>Gatsby</span>. It includes
              <span>Styled Components</span>, <span>SEO Optimization</span> and
              it's uploaded on <span>Netlify</span> via <span>Github</span> and
              uses webooks fom instant update if there is any product change.
              <br />
              <br />
              <span>*Note</span>: Checkout is fully functional but you won't be
              charged. It uses <span>Bogus</span> just for testing and
              demonstration purpose. To complete a virtual payment just use
              <span>"1"</span>
              for card number, <span>"Bogus Gateway"</span> for Name on card,
              any future date and a random three digits number for security
              code.
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

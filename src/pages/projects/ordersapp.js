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

const ordersImage = graphql`
  {
    file(relativePath: { eq: "orders.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const OrdersApp = () => {
  const data = useStaticQuery(ordersImage)

  return (
    <>
      <SEO title="Orders App" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">07.</div>
            <h2>Manager's Order Tracker</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Gatsby</span>
              <span>Context API</span>
              <span>SASS</span>
              <span>Airtable CMS</span>
              <span>Axios</span>
              <span>Framer Motion</span>
              <span>Open Weather API</span>
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
                href="https://ordering-weather-tracker.netlify.app/"
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
                href="https://github.com/triatetarta/order-weather-tracker"
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
              A <span>Gatsby</span> app for managing a store product order. It
              uses the <span>Open Weather API</span> and <span>Axios</span> to
              fetch next day's weather forecast for more accurate orders. The
              app is connected to <span>Airtable CMS</span> for stock management
              and updates. Styling was made with <span>SASS</span>. All
              animations and page transitions were made with
              <span>Framer Motion</span>. Global state management utilizes the
              <span>Context API</span>. Uploaded on <span>Netlify</span> via
              <span>Github</span>.
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

export default OrdersApp

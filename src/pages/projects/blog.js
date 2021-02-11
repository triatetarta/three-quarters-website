import React from "react"
import SEO from "../../components/seo"
import {
  AiOutlineFundProjectionScreen,
  AiOutlineGithub,
  AiOutlineEye,
} from "react-icons/ai"

const BlogQuarters = () => {
  return (
    <>
      <SEO title="Quarters Blog" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">01.</div>
            <h2>Quarters Blog</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>Gatsby</span>
              <span>Contentful CMS</span>
              <span>Styled Components</span>
              <span>Github Jobs API</span>
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

        <h3>Project Description:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          repellat quis vitae aperiam voluptate est? Ex officia voluptas
          praesentium earum.
        </p>
      </div>
    </>
  )
}

export default BlogQuarters

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

const emailImage = graphql`
  {
    file(relativePath: { eq: "email.png" }) {
      id
      childImageSharp {
        fluid(quality: 10) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const EmailDev = () => {
  const data = useStaticQuery(emailImage)

  return (
    <>
      <SEO title="Email Marketing" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">01.</div>
            <h2>Email Development</h2>
            <div className="tech-used">
              Technologies used:
              <span>HTML</span>
              <span>SASS</span>
              <span>Foundation Email</span>
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
                href="https://live-beacon.netlify.app/"
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
                href="https://github.com/threequartersdev/newsletter-email"
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
              Three html email projects, built from scratch using
              <span>Foundation Email Framework</span>, <span>HTML</span>
              and
              <span>SASS</span>. The project includes a transactional email, a
              newsletter email and a product launch promotional email. All html
              emails are responsive and have been tested on
              <span>
                <a
                  href="https://putsmail.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Litmus PutsMail
                </a>
              </span>
              and
              <span>
                <a
                  href="https://mailchimp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MailChimp
                </a>
              </span>
              .
              <br />
              <br />
              <div className="extras">
                View the other two emails below: <br />
                <span>
                  <a
                    href="https://transactional-mail.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Transactional
                  </a>
                </span>
                <span>
                  <a
                    href="https://quarters-phone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Promotional
                  </a>
                </span>
              </div>
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

export default EmailDev

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

const musicImage = graphql`
  {
    file(relativePath: { eq: "music.png" }) {
      id
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const MusicPlayer = () => {
  const data = useStaticQuery(musicImage)

  return (
    <>
      <SEO title="Music Player" />
      <div className="project-wrapper">
        <div className="details">
          <div className="information">
            <div className="label">08.</div>
            <h2>Quarters Music Player</h2>
            <div className="tech-used">
              Technologies used:
              <span>React</span>
              <span>SASS</span>
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
                href="https://quarters-music-player.netlify.app/"
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
                href="https://github.com/triatetarta/quarteres-music"
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
              A <span>React</span> music player web app that fetches songs from
              local data via
              <span>Chillhop Music</span>. Styling was made with
              <span>SASS</span>. UI Design inspiration by
              <span>Glassmorphism</span> design trends. All animations were made
              with <span>CSS Animations</span>. Final build uploaded on{" "}
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

export default MusicPlayer

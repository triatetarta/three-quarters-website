import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "gatsby"
import { AiOutlineHome } from "react-icons/ai"

const items = [
  {
    key: "a",
    logo: "/images/ikos.svg",
    logoActive: "/images/ikos-hover.svg",
    video: "/videos/ikos.mp4",
    url: "/ikos",
  },
  {
    key: "b",
    logo: "/images/shopify.svg",
    logoActive: "/images/shopify-hover.svg",
    video: "/videos/shopify.mp4",
    url: "/shopify",
  },
  {
    key: "c",
    logo: "/images/blog.svg",
    logoActive: "/images/blog-hover.svg",
    video: "/videos/blog.mp4",
    url: "/blog",
  },
  {
    key: "d",
    logo: "/images/joelene.svg",
    logoActive: "/images/joelene-hover.svg",
    video: "/videos/joelene.mp4",
    url: "/joelene",
  },
  {
    key: "e",
    logo: "/images/game-dock.svg",
    logoActive: "/images/game-dock-hover.svg",
    video: "/videos/gamedock.mp4",
    url: "/gamedock",
  },
  {
    key: "f",
    logo: "/images/task-mic.svg",
    logoActive: "/images/task-mic-hover.svg",
    video: "/videos/speechly.mp4",
    url: "/tasktracker",
  },
  {
    key: "g",
    logo: "/images/ordering.svg",
    logoActive: "/images/ordering-hover.svg",
    video: "/videos/orders.mp4",
    url: "/ordersapp",
  },
  {
    key: "h",
    logo: "/images/player.svg",
    logoActive: "/images/player-hover.svg",
    video: "/videos/player.mp4",
    url: "/musicplayer",
  },
  {
    key: "i",
    logo: "/images/email.svg",
    logoActive: "/images/email-hover.svg",
    video: "/videos/MasterClass-Preview-Cropped.mp4",
    url: "/email",
  },
  {
    key: "j",
    logo: "/images/martina.svg",
    logoActive: "/images/martina-hover.svg",
    video: "/videos/martina.mp4",
    url: "/martina",
  },
  {
    key: "k",
    logo: "/images/tekton.svg",
    logoActive: "/images/tekton-hover.svg",
    video: "/videos/tekton.mp4",
    url: "/tektonjoinery",
  },
]

const ProjectsComp = () => {
  return (
    <>
      <ProjectStyles className="projects">
        <h2>My Projects</h2>
        <div className="row">
          {items.map((item, i) => {
            const { key, ...rest } = item
            return <Item key={item.key} {...rest} />
          })}
        </div>
      </ProjectStyles>
      <HomeButton className="back-home-row">
        <Link to="/">
          <button className="back-btn">
            <span className="hover"></span>
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="label">Back Home</span>
          </button>
        </Link>
      </HomeButton>
    </>
  )
}

const Item = ({ logo, logoActive, video, url, ...props }) => {
  const [isHover, setIsHover] = React.useState(false)
  let videoRef = React.useRef()

  const boxVariants = {
    inactive: {
      borderColor: "transparent",
    },
    active: {
      opacity: 1,
      borderColor: "white",
    },
  }
  const variants = {
    inactive: {
      opacity: 0,
    },
    active: {
      opacity: 1,
    },
  }

  const onMouseEnter = React.useCallback(() => {
    const promise = videoRef.current.play()
    if (promise !== undefined) {
      promise
        .then(_ => {
          console.log("autoplay started")
        })
        .catch(error => {
          console.log("autoplay prevented")
        })
    }
    setIsHover(true)
  }, [videoRef])

  const onMouseLeave = React.useCallback(() => {
    const promise = videoRef.current.pause()
    if (promise !== undefined) {
      promise
        .then(_ => {
          console.log("autoplay started")
        })
        .catch(error => {
          console.log("autoplay prevented")
        })
    }
    setIsHover(false)
  }, [videoRef])

  return (
    <ItemStyles className="cell">
      <Link to={`/projects${url}`}>
        <motion.div
          animate={isHover ? "active" : "inactive"}
          variants={boxVariants}
          className="aspectratio box"
          data-ratio="16:9"
          // whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <motion.div
            className="video-container"
            animate={isHover ? "active" : "inactive"}
            variants={variants}
          >
            <video
              ref={videoRef}
              className={`video`}
              width="320"
              height="240"
              loop
              autoPlay=""
              muted
              playsInline=""
            >
              <source src={video} type="video/mp4" />
            </video>
            <motion.div className="video-overlay" />
          </motion.div>
          <motion.img
            animate={isHover ? "inactive" : "active"}
            variants={variants}
            transition={{ duration: 0.25 }}
            src={logo}
            className="logo"
          />
          <motion.img
            src={logoActive}
            animate={isHover ? "active" : "inactive"}
            variants={variants}
            transition={{ duration: 0.25 }}
            className=".logo.logo--active"
          />
        </motion.div>
      </Link>
    </ItemStyles>
  )
}

const ProjectStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 1024px) {
    max-width: var(--width);
  }

  @media screen and (max-width: 600px) {
    margin-top: 1.5rem;
    margin-bottom: 0rem;
  }

  h2 {
    margin: 0 1rem 0.5rem 1rem;
    background: var(--clr-dark-grey);
    padding: 2rem 0;
    border-radius: 12px;
    text-align: center;

    @media screen and (max-width: 1024px) {
      font-size: 1.8rem;
      padding: 1.2rem 0;
    }

    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .row .cell {
    flex-basis: calc(100% / 3);
    float: left;
    padding: 1em;

    @media screen and (max-width: 600px) {
      flex-basis: calc(100% / 2);
    }
  }
  .row .cell > a > * {
    background: #222;
  }
  .row .cell > a > * > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ItemStyles = styled(motion.div)`
  .logo {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .video {
    position: absolute;
    /* top: 0;
  left: 0;
  bottom: 0;
  right: 0; */
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 140%;
    object-fit: cover;
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    opacity: 0;
    border-radius: 6px;
  }

  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .box {
    display: flex;
    border-radius: 8px;
    border: 3px solid transparent;
    cursor: pointer;
  }

  .aspectratio {
    width: 100%;
    height: 0;
    position: relative;
  }
  .aspectratio[data-ratio="16:9"] {
    padding-top: 56.25%;
  }
  .aspectratio[data-ratio="4:3"] {
    padding-top: 75%;
  }
  .aspectratio > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const HomeButton = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  .back-btn {
    margin-top: 4rem;
    background: var(--clr-primary-2);
  }

  @media screen and (max-width: 600px) {
    .back-btn {
      margin-top: 2rem;
    }
  }
`

export default ProjectsComp

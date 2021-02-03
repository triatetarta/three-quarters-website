import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const items = [
  {
    key: "a",
    logo: "/images/email.svg",
    logoActive: "/images/email-hover.svg",
    video: "/videos/MasterClass-Preview-Cropped.mp4",
  },
  {
    key: "c",
    logo: "/images/blog.svg",
    logoActive: "/images/blog-hover.svg",
    video: "/videos/blog.mp4",
  },
  {
    key: "d",
    logo: "/images/ordering.svg",
    logoActive: "/images/ordering-hover.svg",
    video: "/videos/orders.mp4",
  },
  {
    key: "b",
    logo: "/images/player.svg",
    logoActive: "/images/player-hover.svg",
    video: "/videos/player.mp4",
  },
  {
    key: "e",
    logo: "/images/task-mic.svg",
    logoActive: "/images/task-mic-hover.svg",
    video: "/videos/speechly.mp4",
  },
  {
    key: "f",
    logo: "/images/joelene.svg",
    logoActive: "/images/joelene-hover.svg",
    video: "/videos/joelene.mp4",
  },
  {
    key: "g",
    logo: "/images/martina.svg",
    logoActive: "/images/martina-hover.svg",
    video: "/videos/martina.mp4",
  },
]

const ProjectsComp = () => {
  return (
    <ProjectStyles className="projects">
      <h2 style={{ margin: "0 0 0.5rem 01rem" }}>My Projects</h2>
      <div className="row">
        {items.map((item, i) => {
          const { key, ...rest } = item
          return <Item key={item.key} {...rest} />
        })}
      </div>
    </ProjectStyles>
  )
}

const Item = ({ logo, logoActive, video, ...props }) => {
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
    </ItemStyles>
  )
}

const ProjectStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .row .cell {
    flex-basis: calc(100% / 3);
    float: left;
    padding: 1em;
  }
  .row .cell > * {
    background: #222;
  }
  .row .cell > * > * {
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

export default ProjectsComp

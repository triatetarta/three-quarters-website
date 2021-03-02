import React, { useContext } from "react"
import { IoClose } from "react-icons/io5"
import styled from "styled-components"
import { RiCodeBoxFill } from "react-icons/ri"
import { CgWebsite } from "react-icons/cg"
import { MdEmail } from "react-icons/md"
import { ImProfile } from "react-icons/im"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { Link } from "gatsby"
import { GatsbyContext } from "../context/context"

const MobileMenu = () => {
  const { isOpen, setIsOpen } = useContext(GatsbyContext)

  return (
    <MobileStyles className={`${isOpen ? "mobile-nav visible" : "mobile-nav"}`}>
      <div className="top-bar">
        <div className="title">
          <AiOutlineMenuUnfold /> Menu
        </div>
        <div className="close-btn">
          <button onClick={() => setIsOpen(false)}>
            <span className="hover"></span>
            <span className="icon">
              <IoClose />
            </span>
          </button>
        </div>
      </div>

      <div className="mobile-links">
        <ul>
          <li>
            <Link to="/projects">
              <button className="projects" onClick={() => setIsOpen(false)}>
                <span className="hover"></span>
                <span className="icon">
                  <RiCodeBoxFill />
                </span>
                <span className="label">Projects</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <button onClick={() => setIsOpen(false)}>
                <span className="hover"></span>
                <span className="icon">
                  <CgWebsite />
                </span>
                <span className="label">Skills</span>
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="contact" onClick={() => setIsOpen(false)}>
                <span className="hover"></span>
                <span className="icon">
                  <MdEmail />
                </span>
                <span className="label">Contact</span>
              </button>
            </Link>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1YCp0Z32LuS-45Oqx33jUVu1Y8qricPdN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button className="contact" onClick={() => setIsOpen(false)}>
                <span className="hover"></span>
                <span className="icon">
                  <ImProfile />
                </span>
                <span className="label">Resume</span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </MobileStyles>
  )
}

const MobileStyles = styled.div`
  position: fixed;
  top: 12px;
  right: 0;
  width: 80vw;
  min-height: 70vh;
  background: #0e0e0e;
  z-index: 999;
  border-radius: 12px;
  box-shadow: 0 14px 40px rgb(0 0 0 / 60%);
  overflow: hidden;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.53, 0.21, 0, 1);
  will-change: transform;

  .top-bar {
    background: #1a1a1a;
    padding: 1rem 1rem;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 1.3rem;
      color: #705df2;
      font-weight: 700;
      display: flex;
      align-items: center;

      svg {
        color: white;
        margin-right: 5px;
      }
    }

    .close-btn {
      .icon {
        margin-left: 10px;
        margin-right: 10px;
        svg {
          color: var(--clr-white);
        }
      }
    }
  }

  .mobile-links {
    margin-top: 3rem;
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      li {
        padding: 1rem 0;
      }
    }
  }
`

export default MobileMenu

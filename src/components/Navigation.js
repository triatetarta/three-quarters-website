import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import styled from "styled-components"
import { RiCodeBoxFill } from "react-icons/ri"
import { CgWebsite } from "react-icons/cg"
import { MdEmail } from "react-icons/md"

const Navigation = () => {
  return (
    <StyledNav>
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/projects">
              <button className="projects">
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
              <button>
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
              <button className="contact">
                <span className="hover"></span>
                <span className="icon">
                  <MdEmail />
                </span>
                <span className="label">Contact</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 5vh;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu {
    ul {
      display: flex;
      align-items: center;

      li {
        margin-left: 1.5rem;

        a {
          text-decoration: none;
          color: var(--clr-white);

          .projects {
            background: var(--clr-primary-1);
          }
        }
      }
    }
  }
`

export default Navigation

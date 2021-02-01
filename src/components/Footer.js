import React from "react"
import { Link } from "gatsby"
import Logo from "./Logo"
import styled from "styled-components"
import { IoMail, IoLogoTwitter } from "react-icons/io5"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner">
        <div className="navigation">
          <div className="title">Navigation</div>
          <ul>
            <li>
              <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
          <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="contact">
          <div className="title">Contact</div>
          <ul>
            <li>
              <a
                href="mailto:threequartersdev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <IoMail />
                </span>
                threequartersdev@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/threequartersDC"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <IoLogoTwitter />
                </span>
                @threequartersDC
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/threequartersdev/"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <AiFillInstagram />
                </span>
                @threequartersdev
              </a>
            </li>
          </ul>
        </div>
        <div className="social"></div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 50px 25px;
  background: var(--clr-footer);

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--max-width);
    margin: 0 auto;
    color: var(--clr-white);

    .logo {
      flex: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 0.8rem;
        opacity: 0.6;
      }
    }

    .navigation {
      text-align: left;
      flex: 1;

      .title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      ul {
        li {
          line-height: 1.5rem;

          a {
            color: var(--clr-white);

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }

    .contact {
      text-align: right;
      flex: 1;

      .title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
      }
      ul {
        li {
          line-height: 1.5rem;
          a {
            color: var(--clr-white);
            white-space: nowrap;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            &:hover {
              text-decoration: underline;
            }
            span {
              display: inline-block;
              width: 1.1rem;
              height: 1.1rem;
              margin-right: 6px;

              svg {
                color: var(--clr-light-grey);
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
`

export default Footer

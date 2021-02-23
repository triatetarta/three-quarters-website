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
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="contact">
          <div className="title">Contact</div>
          <ul>
            <li>
              <p>Dimitrios Chatziioannou</p>
            </li>
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
  position: relative;

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
          p {
            color: var(--clr-light-grey);
            letter-spacing: 1px;
            font-size: 1.2rem;
            border-bottom: 1px solid var(--clr-light-grey);
          }

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

  @media screen and (max-width: 1024px) {
    .inner {
      width: 80vw;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;

    .inner {
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .navigation {
        text-align: center;
      }

      .logo {
        a {
          svg {
            width: 130px;
          }
        }
      }

      .contact {
        text-align: center;

        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`

export default Footer

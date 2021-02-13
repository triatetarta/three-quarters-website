import React from "react"
import SEO from "./seo"
import styled from "styled-components"
import { MdEmail } from "react-icons/md"
import { IoMail, IoLogoTwitter } from "react-icons/io5"
import { AiFillInstagram, AiOutlineHome } from "react-icons/ai"
import img from "../images/contact.png"
import { Link } from "gatsby"

const Form = () => {
  return (
    <DetailsStyle className="container-details">
      <SEO title="Contact Me" />
      <div className="contact-text">
        <h2>Get In Touch</h2>
      </div>
      <div className="details">
        <div className="side form">
          <div className="img">
            <img src={img} alt="contact shape" />
          </div>
          <form
            data-netlify-recaptcha="true"
            data-netlify="true"
            netlify-honeypot="bot-field"
            method="POST"
            name="contact"
            action="/sucesss"
          >
            <input name="name" type="text" placeholder="Your Name" />
            <input name="email" type="email" placeholder="Your Email" />
            <textarea
              className="message-border"
              name="message"
              placeholder="Your Message"
              type="text"
              rows="6"
            ></textarea>
            <div className="captcha" data-netlify-recaptcha="true"></div>
            <button type="submit" className="contact-btn">
              <span className="hover"></span>
              <span className="icon">
                <MdEmail />
              </span>
              <span className="label">Send</span>
            </button>
          </form>
        </div>
        <div className="side info">
          <div className="contact">
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
        </div>
      </div>
      <div className="back-home-row">
        <Link to="/">
          <button className="back-btn">
            <span className="hover"></span>
            <span className="icon">
              <AiOutlineHome />
            </span>
            <span className="label">Back Home</span>
          </button>
        </Link>
      </div>
    </DetailsStyle>
  )
}

const DetailsStyle = styled.div`
  min-height: 75vh;
  max-width: var(--max-width);
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: var(--width);
  }

  @media screen and (max-width: 600px) {
    max-width: var(--width);
  }

  .contact-text {
    margin-top: 3rem;
    margin-bottom: 3rem;
    background: var(--clr-dark-grey);
    width: 100%;
    text-align: center;
    border-radius: 12px;

    @media screen and (max-width: 600px) {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      padding: 2rem 0;

      @media screen and (max-width: 600px) {
        font-size: 1.2rem;
        padding: 1rem 0;
      }
    }
  }

  .details {
    display: flex;
    width: 100%;
    background: var(--clr-primary-2);
    border-radius: 15px;

    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    .side {
      padding: 40px 45px 30px 45px;
    }

    .form {
      width: 60%;
      display: flex;

      @media screen and (max-width: 1024px) {
        width: 55%;
        align-items: center;
        justify-content: center;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
      }

      .img {
        width: 30%;
        margin-right: 2.5rem;
        margin-top: 2rem;

        @media screen and (max-width: 1024px) {
          display: none;
        }

        @media screen and (max-width: 600px) {
          display: none;
        }

        img {
          width: 100%;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        width: 70%;

        @media screen and (max-width: 1024px) {
          width: 100%;
        }

        @media screen and (max-width: 600px) {
          width: 100%;
        }

        input {
          margin-bottom: 1rem;
          height: 2rem;
          border-radius: 4px;
          outline: none;
          border: none;

          &:focus {
            border: 1px solid var(--clr-dark-grey);
          }
        }
        input[type="text"],
        input[type="email"] {
          padding: 0.5rem 0.5rem;
        }

        textarea {
          border-radius: 4px;
          outline: none;
          border: none;

          &:focus {
            border: 1px solid var(--clr-dark-grey);
          }
        }

        textarea[type="text"] {
          padding: 0.5rem 0.5rem;
        }

        .contact-btn {
          margin-top: 1rem;
          width: 150px;
          .label {
            margin-right: 30px;
          }
          .icon {
            margin-left: 30px;
          }
        }
      }
    }

    .info {
      width: 40%;
      background: rgba(0, 0, 0, 0.133);
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      display: flex;
      align-items: flex-start;
      justify-content: center;

      @media screen and (max-width: 1024px) {
        width: 45%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        border-top-right-radius: 15px;
        align-items: center;
      }

      .contact {
        margin-top: 2rem;

        @media screen and (max-width: 600px) {
          margin-top: 0rem;
        }

        ul {
          li {
            margin-top: 0.8rem;
            margin-bottom: 0.4rem;
            p {
              text-align: right;
              color: var(--clr-white);
              letter-spacing: 1px;
              font-size: 1.2rem;
              border-bottom: 1px solid var(--clr-light-grey);

              @media screen and (max-width: 1024px) {
                font-size: 1rem;
                line-height: 1.5rem;
              }
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
                  color: var(--clr-white);
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }

          @media screen and (max-width: 1024px) {
            font-size: 0.9rem;
          }
        }
      }
    }
  }

  .back-home-row {
    text-align: center;
    .back-btn {
      margin-top: 4rem;
      margin-bottom: 4rem;
      background: var(--clr-primary-2);

      @media screen and (max-width: 600px) {
        margin-top: 3rem;
      }
    }
  }
`

export default Form

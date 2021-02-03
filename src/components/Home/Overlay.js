import React from "react"
import "styled-components/macro"
import styled from "styled-components"

export default function Overlay() {
  return (
    <StyledSection>
      <div className="web-dev-cont">
        <div className="text-cont">
          <div className="three-quarters">
            <span>Web</span>
            {`Three`}
            {`\nQuarters`}
            <span>Developer</span>
          </div>
        </div>
      </div>
    </StyledSection>
  )
}

const StyledSection = styled.div`
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .web-dev-cont {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .text-cont {
      text-align: center;

      .three-quarters {
        white-space: pre;
        margin-bottom: 2.5rem;
        font-size: 13em;
        font-weight: 800;
        line-height: 0.6em;
        letter-spacing: -6px;
        color: var(--clr-primary-2);

        span {
          font-size: 2rem;
          letter-spacing: -2px;
          margin-left: 10px;
        }
      }
    }
  }
`

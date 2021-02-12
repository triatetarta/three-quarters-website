import React from "react"
import styled from "styled-components"
import { RiCodeBoxFill } from "react-icons/ri"
import { Link } from "gatsby"

const ProjectsButton = () => {
  return (
    <StyledBtn className="back-home-row">
      <Link to="/projects">
        <button className="back-btn">
          <span className="hover"></span>
          <span className="icon">
            <RiCodeBoxFill />
          </span>
          <span className="label">Back To Projects</span>
        </button>
      </Link>
    </StyledBtn>
  )
}

const StyledBtn = styled.div`
  text-align: center;
  .back-btn {
    margin-top: 3rem;
    margin-bottom: 4rem;
    background: var(--clr-primary-2);
  }
`

export default ProjectsButton

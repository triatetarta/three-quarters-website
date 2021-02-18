import React from "react"
import styled from "styled-components"

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h1>404: Not Found</h1>
      <p>The page you are looking for, doesn't exist.</p>
    </NotFoundWrapper>
  )
}

const NotFoundWrapper = styled.div`
  max-width: var(--max-width);
  min-height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFound

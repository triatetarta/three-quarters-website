import React from "react"
import SEO from "../components/seo"
import Home from "../components/Home/Home"
import styled from "styled-components"
import LoaderScreen from "../components/LoaderScreen"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <LoaderScreen />
      <HomepageStyled className="homepage">
        <Home />
      </HomepageStyled>
    </>
  )
}

const HomepageStyled = styled.div`
  width: 100%;
  height: 85vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: white;
  background: radial-gradient(
      ellipse at -200% 60%,
      rgba(209, 209, 209, 0.48) 22%,
      rgba(182, 182, 182, 0) 71%
    ),
    linear-gradient(160deg, rgb(233, 233, 233), hsl(0, 0%, 100%) 100%);
  overflow: auto;
`

export default IndexPage

import React, { useState, createContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const seoImage = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          image
        }
      }
    }
  `)

  return (
    <GatsbyContext.Provider
      value={{
        isOpen,
        setIsOpen,
        seoImage,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }

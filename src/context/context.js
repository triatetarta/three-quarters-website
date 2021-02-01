import React, { useState, createContext } from "react"

const GatsbyContext = createContext()

const GatsbyProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <GatsbyContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }

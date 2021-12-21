import React, { createContext } from 'react'

type AppContextData = {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const AppContext = createContext({} as AppContextData)

export const AppContextProvider: React.FC = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const toggleTheme = React.useCallback(() => {
    setIsDarkMode(state => !state)
  }, [])

  const appContextData: AppContextData = {
    isDarkMode,
    toggleTheme
  }

  return (
    <AppContext.Provider value={appContextData}>
      {children}
    </AppContext.Provider>)
}
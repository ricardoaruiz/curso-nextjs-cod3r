import React, { createContext } from 'react'

type AppContextData = {
  isDarkMode: boolean
  toggleTheme: () => void
}

export const AppContext = createContext({} as AppContextData)

export const AppContextProvider: React.FC = ({ children }) => {

  const [isDarkMode, setIsDarkMode] = React.useState(false)

  /**
   * Toggle theme
   */
  const toggleTheme = React.useCallback(() => {
    setIsDarkMode(state => {
      localStorage.setItem('isDarkMode', JSON.stringify({ value: !state }))
      return !state
    })
  }, [])

  /**
   * Load user preferences from localstorage
   */
  React.useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode')
    setIsDarkMode(isDarkMode ? JSON.parse(isDarkMode).value : false)
  }, [])

  // Context data
  const appContextData: AppContextData = {
    isDarkMode,
    toggleTheme
  }

  return (
    <AppContext.Provider value={appContextData}>
      {children}
    </AppContext.Provider>)
}
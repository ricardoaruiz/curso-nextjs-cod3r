import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const useAppContext = () => {
  const appContext = useContext(AppContext)

  if (!appContext) {
    throw new Error('useAppContext must be used with AppContextProvider')
  }

  return appContext

}

export default useAppContext
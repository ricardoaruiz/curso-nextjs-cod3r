import { useContext } from "react";
import { AuthContext } from './../context/AuthContext';

const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('useAuthContext must be used with AuthContextProvider')
  }

  return authContext
}

export default useAuthContext
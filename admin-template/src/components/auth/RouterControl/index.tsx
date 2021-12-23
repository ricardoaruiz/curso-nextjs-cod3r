import React from 'react'

import { useRouter } from 'next/router'
import { useAuthContext } from '../../../data'
import { Loader } from '../../template/Loader'

export const RouterControl: React.FC = ({ children }) => {
  const router = useRouter()
  const { user, isLoading } = useAuthContext()

  if (!user) {
    if (isLoading) {
      return <Loader />
    }
    router.push('/authentication')  
    return null
  } 

  return <>{children}</>
}


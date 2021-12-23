import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useAppContext, useAuthContext } from '../../data'
import { Form } from './components/Form'
import { FormMode } from './components/Form/types'
import { Loader } from '../../components/template/Loader'

const Authentication: NextPage = () => {
    const router = useRouter()
    const { isDarkMode } = useAppContext()
    const { user, isLoading } = useAuthContext()
    const [authMode, setAuthMode] = React.useState<FormMode>('signin')

    const isSignup = React.useMemo(() => {
        return authMode === 'signup'
    }, [authMode])

    const showPage = React.useMemo(() => {
        return !user && !isLoading
    }, [isLoading, user])

    React.useEffect(() => {
        user && router.push('/')
    }, [router, user])

    return (
        <div className={`
            flex
            ${isSignup ?  'flex-row-reverse' : ''}
            ${isDarkMode ? 'dark' : ''}
        `}>
            {showPage && (
                <>
                    {/* Image */}
                    <div className={`
                        relative
                        md:basis-1/2 lg:basis-2/3
                        hidden sm:block
                    `}>
                        <Image 
                            src="https://source.unsplash.com/random"
                            alt="Imagem da tela de autenticação" 
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
        
                    {/* Signin / Signup Forms */}
                    <Form 
                        onModeChange={setAuthMode}
                    />
                </>
            )}
            {!showPage && <Loader />}
        </div>
    )
}

export default Authentication

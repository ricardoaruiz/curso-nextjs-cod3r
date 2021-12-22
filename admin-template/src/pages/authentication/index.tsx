import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'

import { Form } from './components/Form'
import { FormMode } from './components/Form/types'

const Authentication: NextPage = () => {
    const [authMode, setAuthMode] = React.useState<FormMode>('signin')

    const isSignup = React.useMemo(() => {
        return authMode === 'signup'
    }, [authMode])

    return (
        <div className={`
            flex
            ${isSignup ?  'flex-row-reverse' : ''}
        `}>
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
        </div>
            
    )
}

export default Authentication

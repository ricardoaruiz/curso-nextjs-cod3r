import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'

import { Form } from './components/Form'

const Authentication: NextPage = () => {
    return (
        <div className={`
            flex
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

            <Form />
        </div>
            
    )
}

export default Authentication

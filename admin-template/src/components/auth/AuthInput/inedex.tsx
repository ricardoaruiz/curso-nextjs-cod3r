import React from 'react'

import { AuthInputProps } from './types'

export const AuthInput: React.VFC<AuthInputProps> = ({ label, className, isShow = true, ...props }) => {
    return !isShow ? null : (
        <div className={`
            flex flex-col
            mb-4
        `}>
            <label 
                htmlFor={props.id}
                className={`
                    mb-2
                `}
            >
                {label}
            </label>

            <input 
                type="text" 
                className={`
                    border-2
                    border-gray-200
                    outline-none
                    focus:border-gray-400
                    px-1 py-2
                    ${className}
                `}
                { ...props }
            />
        </div>
    )
}

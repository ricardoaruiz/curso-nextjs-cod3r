import React from 'react'

import { AuthInputProps } from './types'

export const AuthInput: React.VFC<AuthInputProps> = ({ label, className, isShow = true, ...props }) => {
    return !isShow ? null : (
        <div className={`
            flex flex-col
            mb-4
            w-full
        `}>
            <label 
                htmlFor={props.id}
                className={`
                    mb-2
                    text-sm
                    font-semibold
                `}
            >
                {label}
            </label>

            <input 
                type="text" 
                className={`
                    border-2
                    rounded-md
                    outline-none
                    border-gray-200
                    bg-gray-50
                    focus:bg-white
                    focus:border-blue-400
                    px-1 py-2
                    w-full
                    ${className}
                `}
                { ...props }
            />
        </div>
    )
}

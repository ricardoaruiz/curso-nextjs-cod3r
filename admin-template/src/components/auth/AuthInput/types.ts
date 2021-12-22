import React from "react";

export type AuthInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string
    isShow?: boolean
}
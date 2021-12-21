import React from 'react'

export const Content: React.FC = ({ children }) => {
  return (
    <main className={`
      flex flex-col mt-7
      dark:text-gray-200
    `}
    >
      {children}
    </main>
  )
}

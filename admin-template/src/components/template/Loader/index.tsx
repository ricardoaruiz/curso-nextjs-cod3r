import React from 'react'
import Image from 'next/image'

export const Loader = () => {
  return (
    <div className={`
        fixed
        h-screen
        w-screen
        flex justify-center items-center
        bg-gray-300 dark:bg-gray-800
        text-gray-800 dark:text-gray-300
        text-lg
        font-bold
      `}>
        <Image src="/images/loading.svg" width={300} height={300} alt="Loading..." />
    </div>
  )
}

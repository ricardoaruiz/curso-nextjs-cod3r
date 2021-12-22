import React from 'react'
import { AttentionIcon } from '../../../../components'
import { ErrorProps } from './types'

export const Error: React.VFC<ErrorProps> = ({ message, timeToVisible = 2500, onHide }) => {

  const timerRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (message) {
      clearTimeout(timerRef.current as NodeJS.Timeout)
      timerRef.current = setTimeout(() => {
        onHide && onHide()
      }, timeToVisible);
    }

    return () => clearTimeout(timerRef.current as NodeJS.Timeout)
  }, [message, onHide, timeToVisible])

  return (
    <div className={`
      flex items-center
      bg-red-400
      text-white    
      border border-red-700
      w-full my-3 px-4 py-2
      rounded
      transition-all duration-700
      ${message 
        ? 'visible opacity-100 h-auto' 
        : 'invisible opacity-0 h-0'
      }
    `}>      
      <div className={`
         flex items-center
         transition-all duration-700
        ${message 
          ? 'opacity-100' 
          : 'opacity-0'
        }
      `}>
        <AttentionIcon className={`
          w-8 mr-2
          ${message 
            ? 'opacity-100' 
            : 'opacity-0'
          }
        `}/>
        <span className={`font-medium text-md`}>
          {message}
        </span>        
      </div>      
    </div>
  )
}

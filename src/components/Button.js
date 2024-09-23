import React from 'react'

const Button = ({
    children,
    type = "button",
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className,
    onClick,
    ...props

}) => {
  return (
    <button className={` ${bgColor} ${textColor} ${className} `}
        {...props}    
    >
        {children}
    </button>
  )
}

export default Button

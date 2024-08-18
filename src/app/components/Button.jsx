"use client"
import React from 'react'

const Button = ({className,onClick,text}) => {
  return (
    <button
    onClick={onClick}  
    className={` px-4 py-2 bg-buttonLight dark:bg-buttonDark  hover:bg-red-500 dark:hover:bg-red-500 dark:hover:text-white    text-sm font-semibold text-textLight  dark:textDark shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${className}`}>
    {text} 
  </button>
  )
}

export default Button
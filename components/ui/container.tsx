import React from 'react'

interface ComponentProps {
  children: React.ReactNode
}

export default function Container({children}: ComponentProps) {
  return (
    <div className='mx-auto max-w-7xl'>
      {children}
    </div>
  )
}

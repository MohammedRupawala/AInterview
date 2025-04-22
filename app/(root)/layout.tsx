import React, { ReactNode } from 'react'

const RootLayout = ({children} : {children : ReactNode}) => {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default RootLayout
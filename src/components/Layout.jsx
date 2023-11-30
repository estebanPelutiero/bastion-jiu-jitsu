import React from 'react'

const Layout = ({children, className}) => {
  return (
    <div className={`min-h-screen mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-poppins py-20 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
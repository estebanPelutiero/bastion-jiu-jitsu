import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='mx-auto px-4 md:px-8 lg:px-0 lg:max-w-[1120px] font-poppins'>
      {children}
    </div>
  )
}

export default Layout
import React from 'react'

const Header = ({title}) => {
  return (
    <div className='text-gray text-6xl md:text-8xl font-medium pb-12 lg:pb-20'>{title}</div>
  )
}

export default Header
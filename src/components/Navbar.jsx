import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="bg-background text-foreground flex items-center justify-between h-16 px-4 ">
        <div className='logo '>
            <h2 className='text-foreground text-2xl font-medium font-sans-serif'>SlipSave</h2>
        </div>
        <div></div>

    </div>
  )
}

export default Navbar
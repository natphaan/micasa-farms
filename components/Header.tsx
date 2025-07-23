import React from 'react'
import Image from 'next/image'
import { ShoppingCart, User } from 'lucide-react';
import { UserRound } from 'lucide-react'
import { Globe } from 'lucide-react'


const Header = () => {
  return (
    <header className='w-full h-16 bg-white border-b border-gray-200'> 
        <div className='container mx-auto h-full flex items-center justify-between'>

                {/* nav links on left side of header*/}
                <nav className='flex items-center'>
                        <ul className='flex items-center space-x-4'>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>Products</a> </li>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>About Us</a> </li>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>Contact Us</a> </li> 
                        </ul>   
                </nav>


                {/* Micasa Farms logo --> just a placement for now */}
                <div>
                        <Image
                                src = "/images/js.svg"
                                alt = "Javascript logo"
                                width = {60}
                                height = {60} 
                        />
                </div>



                {/* nav links on right side of header*/}

                <div className='text-black'>
                        <nav className='flex items-center'>
                                <ul className='flex items-center space-x-4'>
                                        <li>  <a href = "#"> <ShoppingCart /> </a> </li>
                                        <li> <UserRound /> </li>
                                        <li> <Globe /> </li>


                                </ul>

                        </nav>

                </div>



                

             
        </div>



    </header>
  )
}

export default Header
import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-16 bg-white border-b border-gray-200'> 
        <div className='container mx-auto h-full flex items-center justify-between'>

                {/* nav links*/}
                <nav className='flex items-center'>
                        <ul className='flex items-center space-x-4'>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>Products</a> </li>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>About Us</a> </li>
                                <li> <a href = "#" className='text-gray-600 text-md hover:text-black'>Contact Us</a> </li> 
                        </ul>   
                </nav>

                <div className='text-black'>
                        Micasa Farms Logo
                </div>

                <div className='text-black'>
                        dwdwd

                </div>



                

             
        </div>



    </header>
  )
}

export default Header
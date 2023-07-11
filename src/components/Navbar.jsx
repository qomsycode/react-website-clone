import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import Logo from '../assets/Logo.png'

const Navbar=()=> {
    const [nav, setNav] = useState(false);

    const handleNav =()=>{
        setNav(!nav)
    }


    return (
        // desktop-menu
        <div className='nav  flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className='flex items-center'>
            <img className='w-15 h-15 p-2' src={Logo} alt="" />
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>ear1</h1>
            </div>
        <ul className='hidden md:flex'>
            <li className='p-4 text-[#00BF69]'>Home</li>
            <li className='p-4'>Features</li>
            <li className='p-4'>About</li>
            <li className='p-4'>FAQS</li>
            <li className='p-4'>Contact</li>
        </ul>


        {/*mobile-menu*/}
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>ear1</h1>
        <ul className='pt-24 uppercase'>
            <li className='p-4 border-b border-gray-600 text-[#00BF69]'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        </div>


        </div>

    )
}
export default Navbar
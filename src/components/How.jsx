import React from 'react'
import rectangle_3 from '../assets/rectangle_3.png'

const How=()=>{
    return(
        <div className='w-full text-[#121212] bg-[#F9F9F9]  py-10 mx-10'>
        
        
        <h1 className='font-bold text-3xl md:text-4xl text-center  pb-8'>How it works</h1>
        <div className='flex flex-col items-center lg:flex-row lg:justify-center lg:gap-4 mx-auto'>
        
        <div className=''>
        <img className='w-[250px] h-[500px]' src={rectangle_3} alt="" />
        </div>

        <div className='max-w-[400px]'>
        <h1 className='font-bold text-2xl md:4xl'>Getting started with ear1 <span className='text-[#00BF69] text-sm block'>in three steps</span></h1>
        <div className='py-6'>
            <ul className='list-decimal marker:text-[#00BF69] marker-color:var(--green) marker-size:50px pl-4'>
                <li className='pt-3'>Signup using your phone account </li>
                <li className='pt-3'>Simply find the influencer you want to chat with </li>
                <li className='pt-3'>Use your prefered payment option to pay a small fee </li>
            </ul>
        </div>
        <h1 className='pt-3'><span className='text-[#00BF69] font-bold'>ear1</span> allows you to chat with your prefered social media personality and get resonse quickly</h1>
        </div>
        </div>
        
        <div className='text-center items-center mt-8'>
        <h1 className='font-bold text-2xl md:text-4xl pt-2'>Get In Touch?</h1>
        <p className='text-[#00BF69] py-2'>Want to know when we launch?</p>
        </div>
        </div>
    )
}

export default How
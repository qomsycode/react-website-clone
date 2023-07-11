import React from 'react'
import PS_icon from '../assets/PS_icon.png'
import apple from '../assets/apple.png'
import rectangle_1 from '../assets/rectangle_1.png'
import rectangle_2 from '../assets/rectangle_2.png'

const Hero=()=>{
    return(
        <div className='hero-container grid md:grid-cols-2 mx-auto w-full text-white '>
            
            {/*hero text-area*/}
            
            <div className='max-w-[500px] md:max-w-[500px] pl-3 md:mx-6 mx-4 lg:mx-10  flex flex-col  justify-center'>
                <div className=''>
                <h1 className='text-3xl md:text-5xl font-bold pt-6'>Pay to chat with <span className='text-[#00BF69] block'>anyone</span></h1>
                <p className='text-sm md:xl text-[#F9F9F9] pt-6'>ear1 is a platform that allows you to chat with any top person in your field just for a small fee</p>
                </div>
             {/*rectangle housing ps and apple*/}
            <div className='max-w-[400px] flex flex-col md:flex-row justify-between py-4'>
                <div className='w-60 h-30 bg-contain bg-no-repeat flex p-0' style={{ backgroundImage: 'url("/src/assets/Rec_1.png")'}}>
                <img className='w-15 h-10 p-2' src={PS_icon} alt="" />
                   <p className='text-xs p-0 m-0'>Download on <span className='block text-xl'>Google Play</span></p>
                </div>
             {/*rectangle housing apple*/}
                <div className='w-60 h-30 bg-contain bg-no-repeat flex my-4 md:my-auto' style={{ backgroundImage: 'url("/src/assets/Rec_2.png")'}}>
                <img className='w-15 h-10 p-2' src={apple} alt="" />
                    <p className='text-xs p-0 m-0'>Download on <span className='block text-xl'>Apple Store</span></p>
                </div>
            </div>
        </div>

            {/*the phone column*/}
           <div className='flex md:bg-none  justify-center items-center stack mx-auto  '>
                <img className='mr-[50px] w-[350px] z-0' src={rectangle_1} alt="" />
                <img className='ml-[-250px] w-[350px] md:ml-[-400px] z-10' src={rectangle_2} alt="" />
           </div>


        </div>
    )
}

export default Hero
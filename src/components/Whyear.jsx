import React from 'react'
import simple from '../assets/simple.png'
import privacy from '../assets/privacy.png'
import access from '../assets/access.png'

const Whyear=()=>{
    return(
        <div className='w-full py-10 bg-[#F9F9F9]'>
        <h1 className='font-bold text-3xl md:text-4xl text-center  py-10'>Why ear1</h1>
        <div className='flex flex-col md:flex-row flex-wrap justify-center gap-8 items-center m-10 md:px-10'>       
            
            
            <div className='text-[#000] font-Poppins items-center text-center '>
            <img className='w-[100px] h-[100px] p-2 rounded-full bg-[#25BD6D] mx-auto ' src={simple} alt="" />
            <h1 className='text-center text-xl md:text-2xl text-[#25BD6D] font-bold pt-4'>Simple</h1>
            <h1 className='pt-2 max-w-[300px]'><span className='text-[#00BF69] font-bold'>ear1</span> is so simple a 2 year old can use it</h1>
            </div>

            <div className='text-[#000] font-Poppins text-center pt-4'>
            <img className='w-[100px] h-[100px] p-2 rounded-full border-4  bg-white  mx-auto ' src={privacy} alt="" />
            <h1 className='text-center text-xl md:text-2xl text-[#25BD6D] font-bold pt-4'>Simple</h1>
            <h1 className='pt-2 max-w-[300px]'>With <span className='text-[#00BF69] font-bold'>ear1</span> your privacy is guaranteed with our self destruct feature</h1>
            </div>

            <div className='text-[#000] font-Poppins text-center pt-4 '>
            <img className='w-[100px] h-[100px] p-2 rounded-full bg-[#25BD6D] mx-auto ' src={access} alt="" />
            <h1 className='text-center text-xl md:text-2xl text-[#25BD6D] font-bold pt-4'>Simple</h1>
            <h1 className='pt-2 max-w-[300px]'>Through <span className='text-[#00BF69] font-bold'>ear1</span> you get direct access to interact with elites in any field</h1>
            </div>


        </div>    
        </div>
    )
}
export default Whyear
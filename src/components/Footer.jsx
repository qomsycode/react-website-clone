import React from "react";
import Logo from '../assets/Logo.png'
import vector from '../assets/vector.png'


const Footer=()=>{
    return(
        <div className="w-full bg-[#121212] mt-10">
            
            
            <div className="grid grid-cols-2 gap-1 md:grid-cols-6 text-white justify-center py-20 ">

            <div className="col-span-2 md:col-span-2 text-center  md:pl-8 ">
                <div className="flex justify-center">
            <img className='w-15 h-15' src={Logo} alt="" />
            <h1 className="text-[#00BF69] font-bold text-xl md:text-3xl text-center">ear1</h1>
            </div>
            </div>

            <div className="md:cols-span-1 text-center">
            <h1 className="font-bold text-base md:text-xl">Company</h1>
            <p className="text-sm md:text-base">Features</p>
            <p className="text-sm md:text-base">Our team</p>
            <p className="text-sm md:text-base">Our team</p>
            </div>

            <div className="md:cols-span-1 text-center">
            <h1 className="font-bold md:text-xl text-base">Download</h1>
            <p className="text-sm md:text-base">Android</p>
            <p className="text-sm md:text-base">Apple</p>
            </div>

            <div className="md:cols-span-1 text-center">
            <h1 className="font-bold text-base md:text-xl ">Social</h1>
            <p>Twitter</p>
            <p className="text-sm md:text-base">Facebook</p>
            <p className="text-sm md:text-base">Whatsapp</p>
            </div>

            <div className="md:cols-span-1 text-center">
            <h1 className="font-bold text-base md:text-xl">Support</h1>
            <p className="text-sm md:text-base">Help</p>
            <p className="text-sm md:text-base">Updates</p>
            </div>

            </div>

        <div className="py-8 ">
        <div className="border-2 w-[90vw] mx-auto"></div>
        <p className="py-2 text-[#FFFFFF] text-center "><span className="inline-flex justify-center items-center "><img className='pr-2 pt-1 ' src={vector} alt="" /></span>All rights reserved</p>
        </div>
        </div>
    )
}
export default Footer
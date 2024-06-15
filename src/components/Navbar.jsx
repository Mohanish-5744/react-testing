import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaInstagram,
    Fa,
  } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/Logo(3).png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#000000] text-gray-300' style={{ paddingTop: '10px' }}>
            <div>
            <img src={logo} alt="Logo Image" style={{ width: '150px', height: '50px'}} />

            </div>
            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Work</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Education</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Experience</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/*Social Media */}
           <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                {/*LinkedIn */}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#0A66C2' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-4' href="https://www.linkedin.com/in/mak9582/" target="_blank">
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>

                {/*Github */}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#000000' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-4' href="https://github.com/Mohanish-5744" target="_blank">
                    Github <FaGithub size={30} />
                    </a>
                </li>


                {/*Email */}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#E95F52' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-4' href="mailto:mohanishkhambadkar@gmail.com" target="_blank">
                    Email <HiOutlineMail size={30} />
                    </a>
                </li>


                {/*Resume */}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#45474B' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-4' href="https://drive.google.com/drive/folders/12NIalTP_Rz3ErVX8e7c5wVabxwHL_9Gl?usp=sharing" target="_blank">
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>


                {/*Whatsapp */}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#39DA56' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-1' href="https://wa.me/+917822941461" target="_blank">
                    Whatsapp <FaWhatsapp size={30} />
                    </a>
                </li>

                {/*Instagram*/}
                <li className='w-[210px] h-[60px] flex justify-between items-center ml-[-155px] hover:ml-[-20px] duration-300 bg-blue-500' style={{ backgroundColor: '#EB008B' }}>
                    <a className='flex justify-between items-center w-full text-gray-300 font-medium pl-1' href="https://instagram.com/makmystery_0101" target="_blank">
                    Instagram <FaInstagram size={30} />
                    </a>
                </li>
            </ul>
           </div>
        </div>
    );
};

export default Navbar;

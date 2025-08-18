'use client';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[60px] sm:h-[70px] bg-gradient-to-r from-emerald-400 to-purple-500 flex justify-between items-center px-3 sm:px-6">
        
        {/* Logo with mobile-friendly touch effect */}
        <div className="flex items-center transition-all duration-300 cursor-pointer hover:scale-110 hover:opacity-90 active:scale-110 active:opacity-90">
          <Image 
            src="/eventlogo.png" 
            alt="Event Logo" 
            width={40} 
            height={40} 
            className="sm:w-[50px] sm:h-[50px] w-[40px] h-[40px]" 
          />
        </div>

        {/* Title */}
        <h1 className="text-lg sm:text-3xl font-bold text-gray-900 text-center">
          Event Scrapper
        </h1>

        {/* Login Button with mobile feedback */}
        <ul className="flex gap-2 sm:gap-4 m-0 p-0 list-none">
          <li>
            <Link href="/login">
              <button
                className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-white text-xs sm:text-sm bg-transparent 
                hover:bg-white hover:text-black 
                active:bg-white active:text-black 
                focus:bg-white focus:text-black 
                transition-all duration-300"
              >
                Login
              </button>
            </Link>
          </li>
             <li>
            <Link href="/signup">
              <button
                className="border border-slate-500 px-2 py-1 sm:px-3 sm:py-2 rounded-xl text-white text-xs sm:text-sm bg-transparent 
                hover:bg-white hover:text-black 
                active:bg-white active:text-black 
                focus:bg-white focus:text-black 
                transition-all duration-300"
              >
               SignUp
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



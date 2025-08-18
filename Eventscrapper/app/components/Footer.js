'use client';
import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 text-center text-slate-100 mt-auto">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center px-4">
        <p className="text-xs sm:text-sm">© 2025 Event Scrapper — All Rights Reserved</p>
        <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a
            href="#"
            className="text-white hover:text-emerald-600 transition-colors duration-300 text-xs sm:text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-emerald-600 transition-colors duration-300 text-xs sm:text-sm"
          >
            Terms of Service
          </a>

         <Link
           href="/contact"
           prefetch={false}
            className="text-white hover:text-emerald-600 transition-colors duration-300 text-xs sm:text-sm"
       >
         Contact
       </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

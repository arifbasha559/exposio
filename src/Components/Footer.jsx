import React from 'react'
import {   FaInstagram, FaRegCopyright } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Footer = () => {
  return (

      <footer className="py-8 border-t border-rose-200 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
          <p className="text-[#ff084a] font-light flex gap-4 items-center">
            <FaRegCopyright  /> {new Date().getFullYear()} <span className="font-exposio font-black"> Exposio</span> - Moments in Light. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-[#ff0081] hover:text-[#ff084a] transition"
            >
              <FaInstagram className="text-3xl" />
            </a>
            <a
              href="#"
              className="text-[#ff0081] hover:text-[#ff084a] transition"
            >
              <MdMail className="text-3xl" />
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
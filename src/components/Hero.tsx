import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-col p-4 m-2 md:m-4 md:p-16'>
      <h1 className="text-center md:text-left text-[32px] md:text-[50px] kode-mono-400 text-white" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
        Erick Lessing 
      </h1>
      <h2 className="text-center md:text-left text-[24px] md:text-[50px] font-semibold text-transparent text-shadow bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-200 kode-mono-700" >FULL STACK DEVELOPER</h2>
      <p className="text-center text-justify md:text-left text-[16px] md:text-[16px] text-gray-200 mt-8 md:mt-8 md:block kode-mono-400" >
        I&apos;m a Full Stack Developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies and frameworks, and I&apos;m always looking to learn more.
      </p>
    </div>
  )
}

export default Navbar
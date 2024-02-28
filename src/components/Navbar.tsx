import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavbarProps {
  scrollToHero: MouseEventHandler<HTMLButtonElement>;
  scrollToTechStack: MouseEventHandler<HTMLButtonElement>;
  scrollToTimeline: MouseEventHandler<HTMLButtonElement>;
  scrollToProjects: MouseEventHandler<HTMLButtonElement>;
  scrollToContactForm: MouseEventHandler<HTMLButtonElement>;
}
const Navbar: React.FC<NavbarProps> = ({
  scrollToHero,
  scrollToTimeline,
  scrollToProjects,
  scrollToContactForm,
}) => {
  return (
    <div className='fixed top-0 z-[40] pt-1 w-full h-[100px] flex justify-between items-center shadow-b-2 border-b-2 border-orange-400 px-10 md:px-20 bg-gray-800'>
        <div className='flex flex-row gap-3 items-center w-[200px]'>
            <div className='relative'>
              <Image src='/dev_port.jpg' alt='logo' width={40} height={40} className="w-full h-full object-contain rounded-full"/>
            </div>
            <div className='text-lg font-semibold text-white w-[200px] select-none'>Erick Lessing</div>
        </div>
        <div className="flex-col hidden md:flex md:flex-row mt-1 md:justify-between">
        <button onClick={scrollToHero} className="rounded-[20px] bg-transparent hover:glow hover:bg-orange-400 hover:text-gray-800 px-4 mx-2 py-3 text-sm font-semibold text-orange-400 w-[90px] flex justify-center items-center border-2 border-orange-400">
          Skills
        </button>
        <button onClick={scrollToTimeline} className="rounded-[20px] bg-transparent hover:bg-orange-400 hover:text-gray-800 px-4 py-1 text-sm mx-2 font-semibold text-orange-400 w-[90px] flex justify-center items-center border-2 border-orange-400">
          History
        </button>
        <button onClick={scrollToProjects} className="rounded-[20px] bg-transparent hover:bg-orange-400 hover:text-gray-800 px-4 py-1 text-sm mx-2 font-semibold text-orange-400 w-[90px] flex justify-center items-center border-2 border-orange-400">
          Projects
        </button>
        <button onClick={scrollToContactForm} className="rounded-[20px] bg-transparent hover:bg-orange-400 hover:text-gray-800 px-4 py-1 text-sm mx-2 font-semibold text-orange-400 w-[90px] flex justify-center items-center border-2 border-orange-400">
          Connect
        </button>
      </div>
    </div>
  )
}

export default Navbar
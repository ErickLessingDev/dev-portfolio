import React, { MouseEventHandler, useState, useEffect, useRef } from 'react';
import Image from 'next/image';

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
  const [showLinks, setShowLinks] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hamburgerRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) && (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node))) {
        setShowLinks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(showLinks)
    setShowLinks(!showLinks)
  };

  const navigate = (method: MouseEventHandler<HTMLButtonElement>) => {
    method({} as React.MouseEvent<HTMLButtonElement, MouseEvent>);
    setShowLinks(false);
  };

  return (
    <div className='w-full bg-gray-800'>
      <div className='mx-2 flex justify-between items-center py-4 px-6 md:px-10 md:py-8'>
        <div className='flex items-center'>
          <div className='relative'>
            <Image src='/dev_port.jpg' alt='logo' width={40} height={40} className="w-full h-full object-contain rounded-full" />
          </div>
          <div className='text-lg font-semibold text-white ml-8'>Erick Lessing</div>
        </div>
        <div className='flex items-center'>
          <div className="md:hidden">
            {/* Hamburger Icon */}
            <button onClick={toggleDropdown} ref={hamburgerRef} className={`text-orange-400 ${showLinks ? 'twirl' : 'anti-twirl'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className={`md:hidden absolute top-14 right-0 bg-gray-800 p-2 dropdown ${showLinks ? 'open' : 'closed'}`} ref={dropdownRef}>
              {/* Dropdown Menu */}
              <div className="button-wrapper" style={{zIndex: '20'}}>
                <button onClick={() => navigate(scrollToHero)} className="block w-full py-4 px-4 text-sm text-left text-orange-400 hover:bg-gray-700 hover:text-white">Skills</button>
                <button onClick={() => navigate(scrollToTimeline)} className="block w-full py-4 px-4 text-sm text-left text-orange-400 hover:bg-gray-700 hover:text-white">History</button>
                <button onClick={() => navigate(scrollToProjects)} className="block w-full py-4 px-4 text-sm text-left text-orange-400 hover:bg-gray-700 hover:text-white">Projects</button>
                <button onClick={() => navigate(scrollToContactForm)} className="block w-full py-4 px-4 text-sm text-left text-orange-400 hover:bg-gray-700 hover:text-white">Connect</button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:justify-end md:items-center">
            {/* Your navigation links */}
            <button onClick={scrollToHero} className="text-sm font-semibold text-orange-400 mr-8 border border-orange-400 rounded-xl px-4 py-2 hover:text-white hover:bg-orange-400">Skills</button>
            <button onClick={scrollToTimeline} className="text-sm font-semibold text-orange-400 mr-8 border border-orange-400 rounded-xl px-4 py-2 hover:text-white hover:bg-orange-400">History</button>
            <button onClick={scrollToProjects} className="text-sm font-semibold text-orange-400 mr-8 border border-orange-400 rounded-xl px-4 py-2 hover:text-white hover:bg-orange-400">Projects</button>
            <button onClick={scrollToContactForm} className="text-sm font-semibold text-orange-400 border border-orange-400 rounded-xl px-4 py-2 hover:text-white hover:bg-orange-400">Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
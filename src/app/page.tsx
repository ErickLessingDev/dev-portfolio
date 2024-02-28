"use client"
import { useRef, RefObject } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import TechStack from '@/components/TechStack';
import CustomCursor from '@/components/CustomCursor';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef: RefObject<HTMLDivElement> = useRef(null);
  const techStackRef: RefObject<HTMLDivElement> = useRef(null);
  const timelineRef: RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);
  const contactFormRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="relative flex flex-col custom-cursor kode-mono-400">
      {/* <CustomCursor /> */}
      <Navbar 
          scrollToHero={() => scrollToRef(heroRef)}
          scrollToTechStack={() => scrollToRef(techStackRef)}
          scrollToTimeline={() => scrollToRef(timelineRef)}
          scrollToProjects={() => scrollToRef(projectsRef)}
          scrollToContactForm={() => scrollToRef(contactFormRef)}
        />
      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center" >
        <div className='w-[80%] mt-16 md:w-[50%] mx-auto' >
          <Hero />
        </div>
        <div className='w-[80%] mb-16 p-4 md:w-[50%] h-[50%] md:mt-16 mx-auto md:p-16 ' ref={heroRef}>
          <TechStack />
        </div>
      </div>
      <div className='flex justify-center items-center mb-16 md:mb-32' ref={timelineRef}>
          <Timeline />
      </div>
      <div className='flex justify-center items-center mb-16 md:mb-32' ref={projectsRef}>
        <Projects />
      </div>
      <div className='flex justify-center items-center mb-16 md:mb-32' ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

"use client"
import { useRef, RefObject, useEffect } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef: RefObject<HTMLDivElement> = useRef(null);
  const techStackRef: RefObject<HTMLDivElement> = useRef(null);
  const timelineRef: RefObject<HTMLDivElement> = useRef(null);
  const projectsRef: RefObject<HTMLDivElement> = useRef(null);
  const contactFormRef: RefObject<HTMLDivElement> = useRef(null);

  const fadeIn = {
    opacity: 1,
    transition: { duration: 0.8 }
  };

  const fadeOut = {
    opacity: 0,
    transition: { duration: 0.8 }
  };

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  // Trigger animation when section comes into view
  const triggerAnimation = (controls: AnimationControls, inView: boolean) => {
    if (inView) {
      controls.start(fadeIn); // Start fade-in animation
    } else {
      controls.start(fadeOut); // Start fade-out animation (optional)
    }
  };

  // Attach scroll animations to each section
  useEffect(() => {
    triggerAnimation(controls5, inView5);
  }, [inView5]);

  useEffect(() => {
    triggerAnimation(controls1, inView1);
  }, [inView1]);

  useEffect(() => {
    triggerAnimation(controls2, inView2);
  }, [inView2]);

  useEffect(() => {
    triggerAnimation(controls3, inView3);
  }, [inView3]);

  useEffect(() => {
    triggerAnimation(controls4, inView4);
  }, [inView4]);




  return (
    <main className="flex flex-col custom-cursor kode-mono-400">
      <Navbar 
        scrollToHero={() => scrollToRef(heroRef)}
        scrollToTechStack={() => scrollToRef(techStackRef)}
        scrollToTimeline={() => scrollToRef(timelineRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
        scrollToContactForm={() => scrollToRef(contactFormRef)}
      />
      <div className="flex md:mt-8 flex-col md:flex-row w-full h-full justify-center items-center">
        <div className='w-[100%] md:w-[50%] mx-auto'>
          <motion.div ref={ref5} animate={controls5} initial={fadeOut} style={{ opacity: 0 }}>
            <Hero />
          </motion.div>
        </div>
        <div className='w-[100%] mb-16 p-4 md:w-[50%] h-[50%] mx-auto md:p-16' ref={heroRef}>
          <motion.div ref={ref1} animate={controls1} initial={fadeOut} style={{ opacity: 0 }}>
            <TechStack />
          </motion.div>
        </div>
      </div>
      <div ref={timelineRef}>
        <motion.div className='w-[100%] flex justify-center items-center mb-8 md:mb-16' ref={ref2} animate={controls2} initial={fadeOut} style={{ opacity: 0 }}>
          <Timeline />
        </motion.div>
      </div>
      <div ref={projectsRef}>
        <motion.div className='w-[100%] flex justify-center items-center mb-8 md:mb-16'  ref={ref3} animate={controls3} initial={fadeOut} style={{ opacity: 0 }}>
          <Projects />
        </motion.div>
      </div>
      <div ref={contactFormRef}>
        <motion.div className='w-[100%] flex justify-center items-center mb-8 md:mb-16' ref={ref4} animate={controls4} initial={fadeOut} style={{ opacity: 0 }}>
          <ContactForm />
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}

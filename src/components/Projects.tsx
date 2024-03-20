"use client"
import React from 'react';
import { MyProjects } from '@/constants';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GithubOriginal } from 'devicons-react';


const Projects = () => {
  // Configuration for react-slick carousel
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-[90%] md:w-[90%] p-4 md:px-8 md:py-4 max-h-xs' >
      <h1 className='text-3xl text-center text-orange-400 my-4 kode-mono-700 mb-8'>Github Projects</h1>
      
      {/* Render project cards */}
      <Slider {...settings} className="">
        {MyProjects.map((project, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-white p-4 pb-8 rounded-lg md:shadow-md md:block-shadow w-full" >
            <h2 className="text-xl text-center font-semibold text-gray-600">{project.title}</h2>
            <div className='w-full flex justify-center items-center'>
              <Image width={400} height={190} src={project.src} alt={project.title} className="my-4 rounded-lg border border-orange-400" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 my-2">
              {project.techstack.map((tech, idx) => (
                <span key={idx} className="bg-orange-200 text-gray-700 border-orange-300 text-xs md:text-sm py-0 px-3 rounded-full">{tech}</span>
              ))}
            </div>
            <p className="text-gray-600 mb-2 md:mb-4">{project.text}</p>
            <div className='flex flex-row justify-between items-center gap-2'>
              {
                (project.demo) && 
                <button className='rounded-xl border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-2 py-1 md:px-4 md:py-2' onClick={() => window.open(project?.demo, "_blank")}>
                  Demo
                </button>
              }
              {
                (project.github) && 
                <button className='rounded-xl border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-2 py-1 md:px-4 md:py-2' onClick={() => window.open(project?.github, "_blank")}>
                  Github
                </button>
              }
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;

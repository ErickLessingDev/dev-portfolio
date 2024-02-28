"use client"
import React from 'react';
import { MyProjects } from '@/constants';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  // Configuration for react-slick carousel
  var settings = {
    dots: true,
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
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-[90%] md:w-[80%] p-4 md:px-8 md:py-4 max-h-xs' >
      <h1 className='text-3xl text-center text-orange-400 my-4 kode-mono-700'>Github Projects</h1>
      
      {/* Render project cards */}
      <Slider {...settings} className="flex justify-center align-center rounded-lg focus:outline-none">
        {MyProjects.map((project, index) => (
          <div key={index} className="flex flex-col justify-center items-center bg-white p-6 md:rounded-lg md:shadow-md md:block-shadow m-4 max-w-md max-h-md" style={{height: '500px'}}>
            <h2 className="text-xl font-semibold text-gray-600">{project.title}</h2>
            <Image width={400} height={190} src={project.src} alt={project.title} className="my-4 rounded-lg border border-orange-400" />
            <p className="text-gray-600 mb-4">{project.text}</p>
            <div className="flex flex-wrap gap-2 my-2">
              {project.techstack.map((tech, idx) => (
                <span key={idx} className="bg-orange-200 text-gray-700 border-orange-300 text-xs md:text-sm py-0 px-3 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;

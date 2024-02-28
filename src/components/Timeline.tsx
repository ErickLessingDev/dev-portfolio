"use client";
import React from 'react';
import { WorkExperience } from '@/constants';
import { Timeline } from "keep-react";
import { Tag } from "keep-react";

const TimelineComponent = () => {
  return (
    <div className='w-[80%] md:w-[50%] bg-white p-4 md:px-8 md:py-4 block-shadow rounded'>
      <h1 className='text-3xl font-bold text-center text-gray-600 my-4 kode-mono-700'>Professional Experience</h1>
        <Timeline className='p-4'>
        {WorkExperience.map((experience, index) => (
          <Timeline.Item key={index}>
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time className='font-semibold text-orange-400'>{experience.start_date} - {experience.end_date}</Timeline.Time>
              <Timeline.Title className='text-gray-600 border-b-2' style={{ marginBottom: '0' }}>{experience.company}</Timeline.Title>
              <div className="flex flex-wrap gap-2 my-2">
                {experience.techstack.map((tech, idx) => (
                  <span key={idx} className="bg-orange-200 text-gray-700 border-orange-300 text-xs md:text-sm py-0 px-3 rounded-full">{tech}</span>
                ))}
              </div>
              <Timeline.Body>{experience.summary}</Timeline.Body>
              <a href={experience.readmore} target="_blank" rel="noopener noreferrer" className=' bg-gray-600 hover:bg-orange-500 inline-block px-4 py-2 rounded-md text-white'>
                Visit Website
              </a>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>

  );
}

export default TimelineComponent;

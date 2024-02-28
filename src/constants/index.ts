import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export interface WorkExperience {
  company: string;
  start_date: string;
  end_date: string;
  techstack: string[];
  readmore: string;
  summary: string;
}

export const WorkExperience = [
  {
    "company": "Belgium Campus",
    "start_date": "2017-01-01",
    "end_date": "2021-04-20",
    "techstack": ["C#","SQL", "Node.js", "Javascript", "PHP", "Python", "Machine Learning"],
    "readmore": "https://www.belgiumcampus.ac.za/",
    "summary": "Graduated with Honours from a specialized computor science university in Pretoria."
  },
  {
    "company": "DVT",
    "start_date": "2020-02-01",
    "end_date": "2022-02-01",
    "techstack": ["Java", "Spring Boot", "Spring Cloud", "Linux", "Elastic Search", "Atlassian Suite", "Jenkins", "AWS", "PostgeSQL"],
    "readmore": "https://www.dvt.co.za/",
    "summary": "Worked as a backend developer for a predominant health insurance company in South Africa. I worked across 20+ micro-services in a team of 22 developers, business analysts, testers and a project manager."
  },
  {
    "company": "Travel",
    "start_date": "2022-03-01",
    "end_date": "2022-11-01",
    "techstack": ["Turkey", "Georgia", "Egypt", "Malaysia"],
    "readmore": "https://www.workaway.info/",
    "summary": "I took a break from work to travel and explore the world. I volunteered at a few hostels and worked on a few personal projects."
  },
  {
    "company": "ETAPATH",
    "start_date": "2022-12-01",
    "end_date": "2023-10-25",
    "techstack": ["React", "Ruby on Rails", "PostgreSQL", "Heroku", "React Native", "Google Maps API"],
    "readmore": "https://www.etapath.com/",
    "summary": "Worked as a full-stack developer on web an mobile applications, designed to optimize large scale ridesharing."
  }
]

export const MyProjects = [
  {
    title: "Pokedex Website",
    text: "A simple website that fetches and displays pokemon data from an API. The website is built using React and TailwindCSS. The website is hosted on Vercel.",
    src: "/pokedex.png",
    techstack: ["CSS", "React", "Javascript", "TailwindCSS", "Node.js", "Vercel"],
  },
  {
    title: "Agri Aid",
    text: "A WIP ruby on rails application to keep track of cattle, their weight, location and health. The application is designed to help farmers make informed decisions.",
    src: "/agriaid.png",
    techstack: ["Ruby", "Postgres", "TailwindCSS", "Rails", "Sidekiq", "Vercel"],
  }
];
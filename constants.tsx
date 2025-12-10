import { 
  BookOpen, 
  Video, 
  Users, 
  MonitorPlay
} from "lucide-react";
import { Service, Experience, Project, Skill } from "./types";

export const PERSONAL_INFO = {
  name: "Bhanu Vedantam",
  title: "Senior Instructional Designer",
  bio: "I craft engaging learning experiences that bridge the gap between complex information and learner understanding. Specializing in e-learning development, curriculum design, and interactive media.",
  email: "vedantambhanusaran@gmail.com",
  location: "Bengaluru, India",
  phone: "+91 75692 10697",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    dribbble: "https://dribbble.com"
  }
};

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "E-Learning Development",
    description: "Creating interactive SCORM-compliant courses using Articulate Storyline and Rise 360.",
    icon: MonitorPlay
  },
  {
    id: "2",
    title: "Curriculum Design",
    description: "Structuring comprehensive learning paths and certification programs for corporate training.",
    icon: BookOpen
  },
  {
    id: "3",
    title: "Instructional Video",
    description: "Scripting, recording, and editing educational videos and software simulations.",
    icon: Video
  },
  {
    id: "4",
    title: "VILT & Workshop Materials",
    description: "Designing slide decks, facilitator guides, and participant workbooks for live training.",
    icon: Users
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Instructional Designer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading a team of 3 designers to overhaul the internal onboarding process. Reduced time-to-competency by 40% through gamified learning modules.",
    current: true
  },
  {
    id: "2",
    role: "eLearning Developer",
    company: "Global Ed Consultants",
    period: "2018 - 2021",
    description: "Developed over 50 hours of interactive e-learning content for Fortune 500 clients. Specialized in compliance and soft-skills training.",
    current: false
  },
  {
    id: "3",
    role: "Training Coordinator",
    company: "HealthFirst Hospital",
    period: "2016 - 2018",
    description: "Managed the LMS administration for 2,000+ employees and facilitated weekly new hire orientation sessions.",
    current: false
  }
];

export const EDUCATION: Experience[] = [
  {
    id: "edu1",
    role: "M.S. Instructional Design & Tech",
    company: "State University",
    period: "2016",
    description: "Focus on adult learning theory and multimedia design principles.",
    current: false
  },
  {
    id: "edu2",
    role: "B.A. English Literature",
    company: "Liberal Arts College",
    period: "2014",
    description: "Minor in Psychology.",
    current: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Warehouse Management System",
    category: "Instructional Video",
    image: "", // Used mediaItems instead
    description: "This project is a video module created on a Warehouse Management System, explaining basic logistics concepts and the application of the system in the process.",
    tools: ["Figma", "Video Editing", "Logistics"],
    mediaItems: [
      {
        type: "link",
        label: "Figma Storyboard",
        url: "https://drive.google.com/file/d/1Yi7SMdy9wh5h5NkRPwd2T1MyCSerO8UT/view?usp=sharing",
        thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80"
      },
      {
        type: "video",
        label: "Video Output",
        url: "https://www.youtube.com/embed/dX8BqjKuYic",
        thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
      }
    ]
  },
  {
    id: "p2",
    title: "AI Literacy at Work",
    category: "Microlearning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    link: "https://vedantambhanusaran-source.github.io/MicroLearning-Module/",
    description: "This is an interactive webpage with a microlearning module on AI Literacy at Work: What AI can and cannot do.",
    tools: ["HTML/CSS", "Interactive Design", "AI Concepts"]
  },
  {
    id: "p3",
    title: "Timekeeping User Guide",
    category: "Job Aid",
    image: "",
    description: "A User Guide for the 'Timekeeping' process on a HRM application; this is a downloadable PDF document that serves as a job-aid.",
    tools: ["Adobe InDesign", "Documentation"],
    mediaItems: [
      {
        type: "video",
        label: "PDF Preview",
        url: "https://drive.google.com/file/d/1lfL4sS0avUwyY-xFhRAXKLwBmd3OvzBT/preview"
      }
    ]
  },
  {
    id: "p4",
    title: "Process Flowcharts",
    category: "Technical Infographics",
    image: "https://drive.google.com/thumbnail?id=12z0-FIzRKhIGNeQujw85wXLrp8BZ8kQW&sz=w1000",
    gallery: [
      "https://drive.google.com/thumbnail?id=12z0-FIzRKhIGNeQujw85wXLrp8BZ8kQW&sz=w4000",
      "https://drive.google.com/thumbnail?id=1C8Y5ILjyiJtzdF-tfhayiwKqCKR0L1j1&sz=w4000"
    ],
    description: "Detailed process flowcharts designed to visualize complex technical workflows, ensuring clarity and consistency in operational procedures.",
    tools: ["Adobe Illustrator", "Visual Design", "Process Mapping"]
  },
  {
    id: "p5",
    title: "Marketing Ebook",
    category: "Digital Publication",
    image: "",
    description: "A comprehensive marketing ebook designed to engage readers and provide actionable insights. This project demonstrates proficiency in layout design and content structuring for digital publications.",
    tools: ["Adobe InDesign", "Visual Design", "Copywriting"],
    mediaItems: [
      {
        type: "video",
        label: "Ebook Preview",
        url: "https://drive.google.com/file/d/1YHVhTjzWZmJzmWj8Mma7tjo6g0G-7op7/preview"
      }
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Articulate Storyline", level: 95 },
  { name: "Adobe Creative Cloud", level: 85 },
  { name: "Camtasia/Snagit", level: 90 },
  { name: "LMS Administration", level: 80 },
  { name: "Adult Learning Theory", level: 90 },
  { name: "Project Management", level: 75 },
];
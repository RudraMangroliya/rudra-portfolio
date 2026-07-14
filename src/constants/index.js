import {
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  typescript,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  ssc,
  hsc,
  adit,
  brainybeam,
  fastapi,
  postman,
  githubTech,
  vercel,
  render,
  python,
  c,
  cplusplus,
  githubactions,
  restapi,
  java,
  skilllink,
  wanderlust,
  interviewAI,
  givehope,
  attendAI,
  campusx,
  nptel,
  ssip,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/web.png?raw=true",
  },
  {
    title: "Frontend Developer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/mobile.png?raw=true",
  },
  {
    title: "Backend Developer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/backend.png?raw=true",
  },
  {
    title: "Freelancer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/creator.png?raw=true",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: typescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    icon: python,
    href: "https://www.python.org/",
  },
  {
    name: "Java",
    icon: java,
    href: "https://www.oracle.com/java/",
  },
  {
    name: "C",
    icon: c,
    href: "https://en.cppreference.com/w/c",
  },
  {
    name: "C++",
    icon: cplusplus,
    href: "https://isocpp.org/",
  },
  {
    name: "HTML 5",
    icon: html,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React JS",
    icon: reactjs,
    href: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    href: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
    href: "https://getbootstrap.com/",
  },
  {
    name: "Node JS",
    icon: nodejs,
    href: "https://nodejs.org/",
  },
  {
    name: "FastAPI",
    icon: fastapi,
    href: "https://fastapi.tiangolo.com/",
  },
  {
    name: "REST API",
    icon: restapi,
    href: "https://restfulapi.net/",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    href: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    icon: mysql,
    href: "https://www.mysql.com/",
  },
  {
    name: "GitHub",
    icon: githubTech,
    href: "https://github.com/",
  },
  {
    name: "GitHub Actions",
    icon: githubactions,
    href: "https://github.com/features/actions",
  },
  {
    name: "Postman",
    icon: postman,
    href: "https://www.postman.com/",
  },
  {
    name: "Vercel",
    icon: vercel,
    href: "https://vercel.com/",
  },
  {
    name: "Render",
    icon: render,
    href: "https://render.com/",
  },
];

const experiences = [
  {
    title: "Secondary School (SSC)",
    company_name: "Sigma School of Science (GSEB), Amreli",
    icon: ssc,
    iconBg: "#ffffff",
    iconClass: "w-[85%] h-[85%] object-contain",
    date: "March 2021",
    points: [
      "Completed SSC with 73.33% under the Gujarat Secondary Education Board (GSEB).",
      "Built a strong foundation in Mathematics, Science, and logical problem-solving.",
      "Developed discipline, teamwork, and analytical thinking through academics and school activities.",
    ],
  },
  {
    title: "Higher Secondary (HSC - Science)",
    company_name: "Sarvoday High School (GSEB), Ankleshwar",
    icon: hsc,
    iconBg: "#ffffff",
    iconClass: "w-full h-full object-cover rounded-full",
    date: "March 2023",
    points: [
      "Completed Higher Secondary education in the Science stream with 64.15%.",
      "Strengthened concepts in Mathematics and Computer fundamentals.",
      "Developed a keen interest in programming and software development.",
    ],
  },
  {
    title: "Bachelor of Technology in Information Technology",
    company_name: "A. D. Patel Institute of Technology (CVMU), Anand",
    icon: adit,
    iconBg: "#ffffff",
    iconClass: "w-[80%] h-[80%] object-contain",
    date: "September 2023 - Present",
    points: [
      "Currently pursuing B.Tech in Information Technology with a CGPA of 9.12/10.",
      "Built multiple full-stack applications using React.js, Node.js, Express.js, MongoDB, and FastAPI.",
      "Strengthened knowledge of Data Structures, DBMS, Operating Systems, OOP, and Software Engineering.",
      "Actively participating in technical projects, coding practice, and campus placements.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    company_name: "Brainybeam Info-Tech Pvt. Ltd., Ahmedabad",
    icon: brainybeam,
    iconBg: "#ffffff",
    iconClass: "w-[80%] h-[80%] object-contain",
    date: "May 2026",
    points: [
      "Worked on real-world MERN Stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Developed responsive user interfaces and integrated RESTful APIs with backend services.",
      "Worked with MongoDB database integration, debugging, and modern development workflows.",
      "Collaborated with the development team while following industry-standard coding practices.",
    ],
  },
];

const certifications = [
  {
    certification: "FastAPI for Machine Learning",
    name: "CampusX",
    date: "March 2026",
    image: campusx,
  },
  {
    certification: "Cloud Computing (Elite)",
    name: "NPTEL - IIT Kharagpur",
    date: "Jan - Apr 2026",
    image: nptel,
  },
  {
    certification: "Future-Ready Engineers: Agentic AI & Automation",
    name: "SSIP & A. D. Patel Institute of Technology",
    date: "January 2026",
    image: ssip,
  },
  {
    certification: "MERN Stack Internship",
    name: "Brainybeam Info-Tech Pvt. Ltd.",
    date: "May 2026",
    image: brainybeam,
  },
];
const projects = [
  {
    name: "SkillLink - AI Professional Networking Platform",
    description:
      "A full-stack MERN application that connects job seekers and recruiters with AI-powered job recommendations, real-time chat, secure authentication, and recruiter-candidate collaboration.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "orange-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "blue-text-gradient",
      },
    ],
    image: skilllink,
    source_code_link: "https://github.com/RudraMangroliya/skilllink",
    live_demo: "https://www.skilllink-mr.online",
  },
  {
    name: "WanderLust - Travel Listing Platform",
    description:
      "A full-stack travel listing platform where users can explore, create, edit, and manage property listings with reviews, authentication, maps, and image uploads.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "EJS",
        color: "orange-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "green-text-gradient",
      },
    ],
    image: wanderlust,
    source_code_link: "https://github.com/RudraMangroliya/WanderLust-project",
    live_demo: "https://wanderlust-rm.onrender.com",
  },
  {
    name: "AI Interview Preparation Platform",
    description:
      "An AI-powered interview preparation platform that analyzes resumes and job descriptions to generate interview reports, skill-gap analysis, ATS-friendly resumes, and personalized preparation plans.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Gemini AI",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: interviewAI,
    source_code_link: "https://github.com/RudraMangroliya",
    live_demo: "https://interview-ai-mr.vercel.app",
  },
  {
    name: "GiveHope - Charity Donation Platform",
    description:
      "A full-stack charity donation platform where users can discover fundraising campaigns, donate money or essential items, track their donation history, and securely support meaningful causes. Administrators can manage campaigns, verify donations, and monitor platform activities.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Express.js",
        color: "orange-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
    ],
    image: givehope,
    source_code_link: "https://github.com/RudraMangroliya/GiveHope",
    live_demo: "https://give-hope-gilt.vercel.app",
  },
  {
    name: "AttendAI - Face Recognition Attendance System",
    description:
      "An AI-based attendance system that automatically marks attendance using real-time facial recognition with DeepFace, webcam capture, analytics dashboard, and secure authentication.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "DeepFace",
        color: "orange-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: attendAI,
    source_code_link:
      "https://github.com/RudraMangroliya/attendai",
  },
];

export { services, technologies, experiences, certifications, projects };


import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "HealthTrack Dashboard",
    description: "Patient management system with real-time analytics for healthcare providers to monitor patient outcomes.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    link: "#"
  },
  {
    title: "InvestorMatch Platform",
    description: "Connecting startup founders with investors through an AI-powered matching algorithm.",
    tags: ["React", "Node.js", "PostgreSQL", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    link: "#"
  },
  {
    title: "EcoShop Landing Page",
    description: "Conversion-optimized landing page for a sustainable products marketplace with 3.2% conversion rate.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    link: "#"
  },
  {
    title: "TaskFlow Project Management",
    description: "Internal tool for creative agencies to track projects, manage resources, and automate client reporting.",
    tags: ["React", "TypeScript", "Supabase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    link: "#"
  },
  {
    title: "EdTech Analytics Dashboard",
    description: "Comprehensive analytics platform for online course creators to monitor student engagement and performance.",
    tags: ["React", "D3.js", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#"
  },
  {
    title: "RemoteTeam App",
    description: "Virtual office platform for remote teams with integrated video conferencing and collaboration tools.",
    tags: ["React", "WebRTC", "Node.js", "Socket.io"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here's a selection of projects I've built, all delivered in record time. 
            From landing pages to complex web applications, I can build anything you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-gradient">{project.title}</h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

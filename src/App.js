import React, { useState, useEffect } from 'react';
import { Code2, Rocket, Brain, Database, Globe, Mail, Github, Linkedin, Download, ArrowRight, Sparkles, Terminal, Cloud, ExternalLink, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsMobileMenuOpen(false);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "CPL Automation Chatbot",
      subtitle: "IBM Watsonx.ai • RAG Pipeline",
      description: "Intelligent document processing system for Northeastern University with a conversational React UI that helps students determine course waiver eligibility through advanced NLP and context-aware retrieval.",
      tags: ["AI/ML", "RAG", "Watson", "NLP", "Python", "React"],
      metrics: "Capstone Project",
      gradient: "from-purple-500 to-pink-500",
      link: "https://github.com/yourusername/cpl-chatbot" // Replace with actual link
    },
    {
      title: "Production GenAI System",
      subtitle: "Enterprise Scale • Cloud Native",
      description: "High-performance GenAI solution with a modern dashboard frontend serving 10K+ requests daily with 99.9% uptime. Implemented advanced caching, load balancing, and MLOps best practices.",
      tags: ["GenAI", "Python", "AWS", "Docker", "CI/CD", "Next.js"],
      metrics: "10K+ API Calls/Day",
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/yourusername/genai-system" // Replace with actual link
    },
    {
      title: "Paramount Business Suite",
      subtitle: "LTIMindtree • Enterprise Systems",
      description: "Tax withholding portals and employee management systems serving thousands of users. Built responsive, accessible web UIs on top of full-stack services using C#, ASP.NET, and enterprise-grade security.",
      tags: ["C#", "ASP.NET", "SQL", "JavaScript", "React", "Enterprise"],
      metrics: "3+ Years Production",
      gradient: "from-orange-500 to-red-500",
      link: "#" // Replace with actual link or portfolio case study
    },
    {
      title: "T-Shirt E-Commerce Platform",
      subtitle: "Full-Stack Web Application",
      description: "Custom e-commerce solution with a responsive React storefront, shopping cart, payment integration, and inventory management.",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
      metrics: "Live Product",
      gradient: "from-green-500 to-teal-500",
      link: "https://github.com/yourusername/tshirt-store" // Replace with actual link
    },
    {
      title: "Cybersecurity Framework Analysis",
      subtitle: "NIST Framework Implementation",
      description: "Comprehensive security assessment and implementation project using NIST cybersecurity framework for enterprise systems.",
      tags: ["Security", "NIST", "Risk Analysis", "Compliance"],
      metrics: "Academic Project",
      gradient: "from-red-500 to-orange-500",
      link: "#" // Replace with actual link
    },
    {
      title: "Business Analytics Dashboard",
      subtitle: "Tableau • Power BI",
      description: "Interactive data visualization dashboards for business intelligence, featuring real-time analytics, drill-down interactions, and custom reporting solutions.",
      tags: ["Tableau", "Power BI", "SQL", "Analytics", "UX"],
      metrics: "Enterprise BI",
      gradient: "from-indigo-500 to-purple-500",
      link: "#" // Replace with actual link
    }
  ];

  const skills = [
    { 
      name: "Cloud & DevOps", 
      items: ["AWS (EC2, S3, Lambda)", "Oracle Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"], 
      icon: Cloud, 
      color: "from-blue-400 to-blue-600" 
    },
    { 
      name: "Frontend Engineering", 
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Component Design", "Design Systems"], 
      icon: Sparkles, 
      color: "from-pink-400 to-rose-600" 
    },
    { 
      name: "AI/ML Engineering", 
      items: ["GenAI", "RAG Pipelines", "IBM Watsonx", "LangChain", "PyTorch", "TensorFlow"], 
      icon: Brain, 
      color: "from-purple-400 to-purple-600" 
    },
    { 
      name: "Backend Development", 
      items: ["Python", "C#", "Node.js", "ASP.NET", "FastAPI", "Flask"], 
      icon: Code2, 
      color: "from-green-400 to-green-600" 
    },
    { 
      name: "Data & Analytics", 
      items: ["Oracle Database", "PostgreSQL", "MySQL", "Tableau", "Power BI", "Pandas"], 
      icon: Database, 
      color: "from-orange-400 to-orange-600" 
    }
  ];

  const experience = [
    {
      role: "AI/Frontend Engineer Intern",
      company: "Aosenuma",
      period: "April 2025 - September 2025",
      highlights: [
        "Built GenAI solutions with RAG pipelines serving 10K+ daily requests",
        "Designed and developed frontend applications using React and Next.js with Tailwind CSS",
        "Implemented CI/CD pipelines using GitHub Actions"
      ]
    },
    {
      role: "Full Stack Engineer",
      company: "LTIMindtree (Paramount Pictures)",
      period: "July 2021 - December 2023",
      highlights: [
        "Developed tax withholding and employee management portals",
        "Led UI implementation for complex workflows using React/JavaScript and modern UX patterns",
        "Built full-stack applications serving thousands of internal users"
      ]
    }
  ];

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/satyamsingh0101/",
    github: "https://github.com/SatymSingh01",
    email: "mailto:singh.satyamnortheastern.edu"
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 25%)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Terminal className="text-blue-400" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                satyam.dev
              </span>
            </button>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative group hover:text-blue-400 transition capitalize"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10 rounded-lg transition capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-8 animate-pulse">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span className="text-xs sm:text-sm text-green-400">Available for Full-Time • Starting Jan 2026</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Satyam Singh
              </span>
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <Sparkles className="text-yellow-400" size={20} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Cloud & AI/Frontend Engineer
              </h2>
              <Sparkles className="text-yellow-400" size={20} />
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed px-4">
              Frontend-focused engineer building production-scale GenAI solutions and cloud-native systems • 3+ years experience across React, Next.js, and backend services • MS in Cloud Computing @ Northeastern • 
              <span className="text-cyan-400"> Oracle Certified</span> • Shipping fast, accessible, and reliable experiences
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </button>
              <a
                href="/resume.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {['AWS', 'Python', 'GenAI', 'RAG', 'Docker', 'C#', 'Oracle', 'React'].map((tech) => (
                <span key={tech} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-white/5 to-white/10 rounded-lg text-xs sm:text-sm font-medium border border-white/10 hover:border-blue-400/50 transition backdrop-blur">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="text-cyan-400" size={28} />
              <h2 className="text-4xl sm:text-5xl font-black">About Me</h2>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-12 sm:mb-16">Passionate engineer building scalable solutions</p>
            
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Currently completing my <span className="text-blue-400 font-semibold">MS in Informatics (Cloud Computing)</span> at Northeastern University, graduating December 2025. I bring <span className="text-cyan-400 font-semibold">3+ years of software engineering experience</span> with a focus on cloud infrastructure, AI solutions, and modern web frontends.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  As an <span className="text-purple-400 font-semibold">AI/Frontend Engineer at Aosenuma</span>, I build GenAI solutions with RAG pipelines and production systems serving <span className="text-green-400 font-semibold">10,000+ API requests daily</span> with 99.9% uptime, paired with clean, performant React and Next.js interfaces.
                </p>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Previously at <span className="text-orange-400 font-semibold">LTIMindtree</span>, I worked on Paramount Pictures' internal business systems, developing enterprise-scale applications used by thousands of employees globally and collaborating closely with designers to deliver intuitive, responsive UIs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition backdrop-blur">
                  <h3 className="text-xl font-bold mb-4 text-blue-400">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">MS in Informatics - Cloud Computing</p>
                      <p className="text-sm text-slate-400">Northeastern University</p>
                      <p className="text-xs text-slate-500">Expected: December 2025</p>
                    </div>
                    <div>
                      <p className="font-semibold">BE in Electronics & Telecommunications</p>
                      <p className="text-sm text-slate-400">Mumbai University</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition backdrop-blur">
                  <h3 className="text-xl font-bold mb-4 text-purple-400">Certifications</h3>
                  <div className="flex items-start gap-3">
                    <Database className="text-orange-400 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold">Oracle Database@AWS</p>
                      <p className="text-sm text-slate-400">Oracle Certified Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-12 sm:mb-16">
              <Briefcase className="text-green-400" size={28} />
              <h2 className="text-4xl sm:text-5xl font-black">Experience</h2>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-blue-500/30">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-black"></div>
                  <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="px-4 py-2 bg-white/10 rounded-lg text-xs sm:text-sm font-semibold w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-400">
                          <ArrowRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="text-blue-400" size={28} />
              <h2 className="text-4xl sm:text-5xl font-black">Featured Work</h2>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-12 sm:mb-16">Production systems, AI solutions, and enterprise applications</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] backdrop-blur"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-xl`}>
                        <Code2 size={24} />
                      </div>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                        {project.metrics}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-blue-400 mb-3">{project.subtitle}</p>
                    <p className="text-sm sm:text-base text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-blue-950/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="text-purple-400" size={28} />
              <h2 className="text-4xl sm:text-5xl font-black">Technical Arsenal</h2>
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-12 sm:mb-16">Full-stack expertise across cloud, AI, and enterprise systems</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skillGroup, idx) => {
                const Icon = skillGroup.icon;
                return (
                  <div key={idx} className="group bg-gradient-to-br from-white/5 to-white/0 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.05] backdrop-blur">
                    <div className={`p-4 bg-gradient-to-br ${skillGroup.color} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-4">{skillGroup.name}</h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Let's Build Something
            </h2>
            <p className="text-xl sm:text-2xl text-slate-400 mb-12 sm:mb-16 px-4">
              Open to Full-stack/AI/ML Engineer roles • Starting January 2026
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 px-4">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
                <ArrowRight className="group-hover:translate-x-1 transition" size={16} />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
                <ArrowRight className="group-hover:translate-x-1 transition" size={16} />
              </a>
              <a
                href={socialLinks.email}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Email
                <ArrowRight className="group-hover:translate-x-1 transition" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
              <p>© 2025 Satyam Singh. All rights reserved.</p>
              <p className="text-xs sm:text-sm">Built with React • Tailwind • Passion 🚀</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
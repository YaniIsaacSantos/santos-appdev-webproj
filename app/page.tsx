"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const colorPalette = {
    primary: "#0A192F", // Navy blue - primary background
    secondary: "#112240", // Dark blue - cards/sections
    accent: "#64FFDA", // Teal - accents
    textPrimary: "#CCD6F6", // Light blue - main text
    textSecondary: "#8892B0", // Grayish blue - secondary text
    highlight: "#57CBFF", // Sky blue - highlights
    cardBorder: "#233554", // Border color
    gradientFrom: "#0A192F",
    gradientTo: "#112240"
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-500"
      style={{ 
        backgroundColor: colorPalette.primary,
        fontFamily: "'Inter', 'Segoe UI', sans-serif" 
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: colorPalette.accent }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5 animate-pulse"
          style={{ backgroundColor: colorPalette.highlight }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-12 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Profile Picture with Glow Effect */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500"
                style={{ 
                  background: `radial-gradient(circle, ${colorPalette.accent} 0%, transparent 70%)`,
                  filter: 'blur(20px)',
                  transform: 'scale(1.1)'
                }}
              ></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 group-hover:border-accent transition-all duration-500"
                style={{ borderColor: colorPalette.cardBorder }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-4xl"
                  style={{ color: colorPalette.accent }}>
                  YI
                </div>
                <Image 
                  src="/profile.jpg" 
                  alt="Yani Isaac U. Santos"
                  fill
                  className="transition-opacity duration-500"
                />
              </div>
            </div>
            
            {/* Header Text */}
            <div className="text-left flex-1">
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: colorPalette.accent }}></div>
                <span className="text-sm font-medium tracking-wider uppercase"
                  style={{ color: colorPalette.accent }}>
                  Available for Opportunities
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight"
                style={{ color: colorPalette.textPrimary }}>
                Yani Isaac U. <span className="text-gradient">Santos</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium mb-3"
                style={{ color: colorPalette.textSecondary }}>
                Computer Science Student • Full-Stack Developer
              </h2>
              
              <p className="text-lg max-w-2xl"
                style={{ color: colorPalette.textSecondary }}>
                Building elegant digital solutions at the intersection of design and engineering
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a 
              href="mailto:yani.santos@example.com" 
              className="px-6 py-3 rounded-lg border-2 font-medium group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform"
              style={{ 
                backgroundColor: colorPalette.secondary,
                borderColor: colorPalette.accent,
                color: colorPalette.accent
              }}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:animate-bounce">📧</span>
                Contact Me
              </span>
            </a>
            
            <a 
              href="https://github.com/YaniIsaacSantos" 
              target="_blank"
              className="px-6 py-3 rounded-lg border-2 font-medium group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform"
              style={{ 
                backgroundColor: colorPalette.secondary,
                borderColor: colorPalette.textSecondary,
                color: colorPalette.textPrimary
              }}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:rotate-12 transition-transform duration-300">💻</span>
                View GitHub
              </span>
            </a>
            
            <button 
              className="px-6 py-3 rounded-lg border-2 font-medium group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform"
              style={{ 
                backgroundColor: colorPalette.secondary,
                borderColor: colorPalette.highlight,
                color: colorPalette.highlight
              }}
              onClick={() => window.print()}
            >
              <span className="flex items-center gap-2">
                <span className="group-hover:animate-pulse">📄</span>
                Download CV
              </span>
            </button>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {["About", "Education", "Projects", "Skills", "Experience", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab.toLowerCase() 
                    ? "shadow-lg" 
                    : "hover:shadow-md"
                }`}
                style={{ 
                  backgroundColor: activeTab === tab.toLowerCase() 
                    ? colorPalette.secondary 
                    : 'transparent',
                  color: activeTab === tab.toLowerCase() 
                    ? colorPalette.textPrimary 
                    : colorPalette.textSecondary,
                  border: activeTab === tab.toLowerCase() 
                    ? `1px solid ${colorPalette.cardBorder}`
                    : `1px solid ${colorPalette.cardBorder}50`
                }}
              >
                <span className="relative z-10">{tab}</span>
                {activeTab === tab.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 animate-gradient"
                    style={{ 
                      background: `linear-gradient(90deg, ${colorPalette.accent}, ${colorPalette.highlight})`
                    }}
                  ></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-highlight/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            {activeTab === "about" && (
              <section className="card-gradient p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colorPalette.accent + '20' }}>
                    <span className="text-xl" style={{ color: colorPalette.accent }}>👨‍💻</span>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: colorPalette.textPrimary }}>
                    About Me
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed"
                    style={{ color: colorPalette.textSecondary }}>
                    Hello! I'm <span className="font-bold" style={{ color: colorPalette.textPrimary }}>
                      Yani Isaac U. Santos</span>, a passionate 2nd year Computer Science student at Ateneo de Davao University. 
                    I specialize in creating modern web applications with clean, efficient code and intuitive user experiences.
                  </p>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {[
                      { label: "Projects", value: "12+" },
                      { label: "Technologies", value: "15+" },
                      { label: "Years Learning", value: "3" },
                      { label: "Certifications", value: "5" }
                    ].map((stat, index) => (
                      <div 
                        key={index}
                        className="p-4 rounded-xl border text-center group hover:scale-105 transition-all duration-300"
                        style={{ 
                          backgroundColor: colorPalette.secondary,
                          borderColor: colorPalette.cardBorder
                        }}
                      >
                        <div className="text-2xl font-bold mb-1 group-hover:text-accent transition-colors duration-300"
                          style={{ color: colorPalette.accent }}>
                          {stat.value}
                        </div>
                        <div className="text-sm" style={{ color: colorPalette.textSecondary }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Interests Grid */}
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4" style={{ color: colorPalette.textPrimary }}>
                      Areas of Interest
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { icon: "⚡", title: "Web Performance", desc: "Optimizing speed and efficiency" },
                        { icon: "🎨", title: "UI/UX Design", desc: "Creating intuitive interfaces" },
                        { icon: "🔐", title: "Security", desc: "Building secure applications" },
                        { icon: "🤖", title: "AI Integration", desc: "Smart system implementations" }
                      ].map((interest, index) => (
                        <div 
                          key={index}
                          className="p-4 rounded-xl border group hover:border-accent transition-all duration-300 cursor-pointer"
                          style={{ 
                            backgroundColor: colorPalette.secondary,
                            borderColor: colorPalette.cardBorder
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="text-2xl" style={{ color: colorPalette.accent }}>{interest.icon}</div>
                            <div>
                              <h4 className="font-medium mb-1" style={{ color: colorPalette.textPrimary }}>
                                {interest.title}
                              </h4>
                              <p className="text-sm" style={{ color: colorPalette.textSecondary }}>
                                {interest.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Education Section */}
            {activeTab === "education" && (
              <section className="card-gradient p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colorPalette.accent + '20' }}>
                    <span className="text-xl" style={{ color: colorPalette.accent }}>🎓</span>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: colorPalette.textPrimary }}>
                    Education Timeline
                  </h2>
                </div>
                
                <div className="space-y-8 relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
                    style={{ backgroundColor: colorPalette.cardBorder }}></div>
                  
                  {[
                    {
                      year: "2023 - Present",
                      title: "Bachelor of Science in Computer Science",
                      institution: "Ateneo de Davao University",
                      description: "Specializing in Software Engineering and Web Technologies. Current GPA: 3.8/4.0",
                      highlight: true
                    },
                    {
                      year: "2021 - 2023",
                      title: "Science, Technology, Engineering & Mathematics",
                      institution: "Mapua Malayan Colleges Mindanao",
                      description: "Graduated with honors. Developed strong foundation in mathematics and programming",
                      highlight: false
                    },
                    {
                      year: "2017 - 2021",
                      title: "High School Diploma",
                      institution: "San Pedro College Basic Education",
                      description: "Active in programming clubs and science competitions",
                      highlight: false
                    }
                  ].map((edu, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-6 relative group"
                    >
                      {/* Timeline Dot */}
                      <div className={`w-6 h-6 rounded-full flex-shrink-0 mt-1 relative z-10 group-hover:scale-125 transition-transform duration-300 ${
                        edu.highlight ? 'ring-4 ring-accent/30' : ''
                      }`}
                        style={{ 
                          backgroundColor: edu.highlight ? colorPalette.accent : colorPalette.cardBorder
                        }}
                      ></div>
                      
                      {/* Content */}
                      <div className="flex-1 p-4 rounded-xl border group-hover:border-accent transition-all duration-300"
                        style={{ 
                          backgroundColor: colorPalette.secondary,
                          borderColor: colorPalette.cardBorder
                        }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                          <h3 className="text-lg font-medium group-hover:text-accent transition-colors duration-300"
                            style={{ color: colorPalette.textPrimary }}>
                            {edu.title}
                          </h3>
                          <span className="text-sm px-3 py-1 rounded-full border"
                            style={{ 
                              backgroundColor: colorPalette.primary,
                              borderColor: colorPalette.cardBorder,
                              color: colorPalette.textSecondary
                            }}>
                            {edu.year}
                          </span>
                        </div>
                        
                        <p className="font-medium mb-2" style={{ color: colorPalette.accent }}>
                          {edu.institution}
                        </p>
                        
                        <p className="text-sm" style={{ color: colorPalette.textSecondary }}>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects Section */}
            {activeTab === "projects" && (
              <section className="card-gradient p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: colorPalette.accent + '20' }}>
                    <span className="text-xl" style={{ color: colorPalette.accent }}>🚀</span>
                  </div>
                  <h2 className="text-2xl font-bold" style={{ color: colorPalette.textPrimary }}>
                    Featured Projects
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "E-Learning Platform",
                      description: "Interactive learning management system with real-time collaboration features",
                      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                      status: "In Progress",
                      accent: true
                    },
                    {
                      title: "Smart Expense Tracker",
                      description: "AI-powered personal finance app with predictive analytics",
                      tags: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
                      status: "Completed",
                      accent: false
                    },
                    {
                      title: "Portfolio CMS",
                      description: "Headless CMS for managing and showcasing creative portfolios",
                      tags: ["Vue.js", "Strapi", "GraphQL", "AWS"],
                      status: "Completed",
                      accent: false
                    },
                    {
                      title: "Health Analytics Dashboard",
                      description: "Data visualization platform for healthcare metrics and trends",
                      tags: ["D3.js", "Express", "MySQL", "Docker"],
                      status: "In Progress",
                      accent: false
                    }
                  ].map((project, index) => (
                    <div 
                      key={index}
                      className="group cursor-pointer"
                    >
                      <div className="h-full p-6 rounded-xl border hover:border-accent transition-all duration-300 hover:scale-[1.02]"
                        style={{ 
                          backgroundColor: colorPalette.secondary,
                          borderColor: colorPalette.cardBorder
                        }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-medium group-hover:text-accent transition-colors duration-300"
                            style={{ color: colorPalette.textPrimary }}>
                            {project.title}
                          </h3>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === "Completed" 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <p className="text-sm mb-4 leading-relaxed" style={{ color: colorPalette.textSecondary }}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="text-xs px-3 py-1 rounded-full border group-hover:border-accent transition-colors duration-300"
                              style={{ 
                                backgroundColor: colorPalette.primary,
                                borderColor: colorPalette.cardBorder,
                                color: colorPalette.textSecondary
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t flex justify-between items-center"
                          style={{ borderColor: colorPalette.cardBorder }}>
                          <span className="text-xs" style={{ color: colorPalette.textSecondary }}>
                            View Details
                          </span>
                          <span className="text-accent group-hover:translate-x-1 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Skills Section */}
            <section className="card-gradient p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colorPalette.accent + '20' }}>
                  <span className="text-xl" style={{ color: colorPalette.accent }}>💻</span>
                </div>
                <h2 className="text-xl font-bold" style={{ color: colorPalette.textPrimary }}>
                  Technical Stack
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    category: "Frontend",
                    skills: [
                      { name: "React", level: 85, color: colorPalette.accent },
                      { name: "Next.js", level: 75, color: colorPalette.highlight },
                      { name: "TypeScript", level: 70, color: colorPalette.accent },
                      { name: "Tailwind CSS", level: 90, color: colorPalette.highlight }
                    ]
                  },
                  {
                    category: "Backend",
                    skills: [
                      { name: "Node.js", level: 80, color: colorPalette.accent },
                      { name: "Python", level: 85, color: colorPalette.highlight },
                      { name: "Java", level: 75, color: colorPalette.accent },
                      { name: "PostgreSQL", level: 70, color: colorPalette.highlight }
                    ]
                  }
                ].map((category, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-medium mb-3 uppercase tracking-wider"
                      style={{ color: colorPalette.textSecondary }}>
                      {category.category}
                    </h3>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group">
                          <div className="flex justify-between text-sm mb-1">
                            <span style={{ color: colorPalette.textPrimary }}>{skill.name}</span>
                            <span style={{ color: skill.color }}>{skill.level}%</span>
                          </div>
                          <div className="h-2 rounded-full overflow-hidden"
                            style={{ backgroundColor: colorPalette.primary }}>
                            <div 
                              className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                              style={{ 
                                backgroundColor: skill.color,
                                width: `${skill.level}%`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact & Info */}
            <section className="card-gradient p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colorPalette.accent + '20' }}>
                  <span className="text-xl" style={{ color: colorPalette.accent }}>📱</span>
                </div>
                <h2 className="text-xl font-bold" style={{ color: colorPalette.textPrimary }}>
                  Contact Info
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: "🏫", label: "University", value: "Ateneo de Davao University" },
                  { icon: "📍", label: "Location", value: "Davao City, Philippines" },
                  { icon: "📧", label: "Email", value: "ysantos@addu.edu.ph", isLink: true },
                  { icon: "📱", label: "Phone", value: "+63 912 345 6789" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg border hover:border-accent transition-all duration-300 group"
                    style={{ 
                      backgroundColor: colorPalette.secondary,
                      borderColor: colorPalette.cardBorder
                    }}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: colorPalette.accent + '20' }}>
                      <span style={{ color: colorPalette.accent }}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: colorPalette.textSecondary }}>
                        {item.label}
                      </p>
                      {item.isLink ? (
                        <a 
                          href={`mailto:${item.value}`}
                          className="text-sm font-medium hover:text-accent transition-colors duration-300"
                          style={{ color: colorPalette.textPrimary }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: colorPalette.textPrimary }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t" style={{ borderColor: colorPalette.cardBorder }}>
                <h3 className="text-sm font-medium mb-3" style={{ color: colorPalette.textPrimary }}>
                  Connect With Me
                </h3>
                <div className="flex gap-3">
                  {[
                    { platform: "GitHub", icon: "💻", color: colorPalette.accent },
                    { platform: "LinkedIn", icon: "💼", color: colorPalette.highlight },
                    { platform: "Twitter", icon: "🐦", color: colorPalette.accent },
                    { platform: "Instagram", icon: "📸", color: colorPalette.highlight }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex-1 p-3 rounded-lg border text-center hover:scale-105 transition-all duration-300 group"
                      style={{ 
                        backgroundColor: colorPalette.secondary,
                        borderColor: colorPalette.cardBorder
                      }}
                    >
                      <div className="text-xl mb-1 group-hover:scale-125 transition-transform duration-300"
                        style={{ color: social.color }}>
                        {social.icon}
                      </div>
                      <span className="text-xs" style={{ color: colorPalette.textSecondary }}>
                        {social.platform}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Currently Learning */}
            <section className="card-gradient p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colorPalette.accent + '20' }}>
                  <span className="text-xl" style={{ color: colorPalette.accent }}>📚</span>
                </div>
                <h2 className="text-xl font-bold" style={{ color: colorPalette.textPrimary }}>
                  Currently Learning
                </h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { tech: "React Native", progress: 60, color: colorPalette.accent },
                  { tech: "GraphQL", progress: 40, color: colorPalette.highlight },
                  { tech: "AWS", progress: 30, color: colorPalette.accent }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between text-sm mb-2">
                      <span style={{ color: colorPalette.textPrimary }}>{item.tech}</span>
                      <span style={{ color: item.color }}>{item.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: colorPalette.primary }}>
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ 
                          backgroundColor: item.color,
                          width: `${item.progress}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: colorPalette.cardBorder }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm" style={{ color: colorPalette.textSecondary }}>
              © {new Date().getFullYear()} Yani Isaac U. Santos. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a 
                href="#"
                className="text-sm hover:text-accent transition-colors duration-300"
                style={{ color: colorPalette.textSecondary }}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-sm hover:text-accent transition-colors duration-300"
                style={{ color: colorPalette.textSecondary }}
              >
                Terms of Service
              </a>
              <a 
                href="#"
                className="text-sm hover:text-accent transition-colors duration-300"
                style={{ color: colorPalette.textSecondary }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .card-gradient {
          background: linear-gradient(135deg, ${colorPalette.secondary}, ${colorPalette.primary});
          border: 1px solid ${colorPalette.cardBorder};
        }
        
        .text-gradient {
          background: linear-gradient(135deg, ${colorPalette.accent}, ${colorPalette.highlight});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
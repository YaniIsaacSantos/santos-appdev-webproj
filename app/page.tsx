"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section with Profile */}
      <header className="text-center mb-12 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
          {/* Profile Picture Placeholder - Replace with your actual image */}
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl">
              YI
            </div>
            {/* Add your actual image like this: */}
            <Image 
              src="/profile.jpg" 
              alt="Yani Isaac U. Santos"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-800">
              Yani Isaac U. Santos
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">
              2nd Year Computer Science Student
            </h2>
            <p className="text-lg text-blue-600 font-medium">
              Ateneo de Davao University
            </p>
            <p className="text-gray-600 mt-2">Passionate about software development and technology innovation</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a 
            href="mailto:yani.santos@example.com" 
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
          >
            ✉️ Contact Me
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition flex items-center gap-2"
          >
            💻 GitHub
          </a>
          <button 
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
            onClick={() => window.print()}
          >
            📄 Download Resume
          </button>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* About Me Section */}
          <section id="about" className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 border-b pb-2 flex items-center gap-2">
              <span>👨‍💻</span> About Me
            </h2>
            <p className="mb-4 text-lg">
              Hi! I'm <span className="font-bold text-blue-700">Yani Isaac U. Santos</span>, a passionate 2nd year Computer Science student at Ateneo de Davao University. I'm deeply fascinated by technology and its potential to solve real-world problems.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg my-4">
              <p className="font-bold text-blue-700 mb-2">🌟 My Goals:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Master full-stack web development</li>
                <li>Contribute to open-source projects</li>
                <li>Develop innovative software solutions</li>
                <li>Learn cloud computing and DevOps</li>
                <li>Build a strong portfolio of projects</li>
              </ul>
            </div>
            
            <p className="mt-4">
              Currently exploring <span className="font-semibold text-blue-600">web development, mobile apps, and AI/ML</span>. 
              I enjoy collaborating on projects and learning new technologies to expand my skill set.
            </p>
          </section>

          {/* Education Timeline */}
          <section id="education" className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2 flex items-center gap-2">
              <span>🎓</span> Educational Journey
            </h2>
            
            <div className="space-y-8 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
              
              {/* College */}
              <div className="flex items-start md:items-center relative">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                  <span className="font-bold">C</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">College - Computer Science</h3>
                  <p className="text-blue-700 font-semibold">Ateneo de Davao University</p>
                  <p className="text-gray-600">2023 - Present (2nd Year)</p>
                  <p className="mt-2 text-gray-700">
                    Currently pursuing my Bachelor's degree in Computer Science. Learning Data Structures, Algorithms, Web Development, and Software Engineering.
                  </p>
                </div>
              </div>
              
              {/* Senior High */}
              <div className="flex items-start md:items-center relative">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                  <span className="font-bold">SHS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Senior High School</h3>
                  <p className="text-green-700 font-semibold">Mapua Malayan Colleges Mindanao</p>
                  <p className="text-gray-600">2021 - 2023</p>
                  <p className="mt-2 text-gray-700">
                    Completed senior high school with focus on STEM strand, which sparked my interest in programming and technology.
                  </p>
                </div>
              </div>
              
              {/* High School */}
              <div className="flex items-start md:items-center relative">
                <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                  <span className="font-bold">HS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">High School</h3>
                  <p className="text-purple-700 font-semibold">San Pedro College Basic Education Ulas</p>
                  <p className="text-gray-600">2017 - 2021</p>
                  <p className="mt-2 text-gray-700">
                    Developed foundational knowledge in mathematics and sciences that prepared me for computer science studies.
                  </p>
                </div>
              </div>
              
              {/* Elementary */}
              <div className="flex items-start md:items-center relative">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center mr-4 flex-shrink-0 z-10">
                  <span className="font-bold">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Elementary School</h3>
                  <p className="text-yellow-700 font-semibold">St. Francis Xavier Learning Center</p>
                  <p className="text-gray-600">1st - 6th Grade</p>
                  <p className="mt-2 text-gray-700">
                    Where my educational journey began. Developed early interest in computers and problem-solving.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section (Add your projects here) */}
          <section id="projects" className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2 flex items-center gap-2">
              <span>🚀</span> Academic Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">Student Management System</h3>
                <p className="text-gray-600 mb-3">A Java-based system for managing student records and grades</p>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Java</span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">MySQL</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">Personal Portfolio Website</h3>
                <p className="text-gray-600 mb-3">Responsive website built with HTML, CSS, and JavaScript</p>
                <div className="flex gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">HTML</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">CSS</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">JavaScript</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">Simple Calculator App</h3>
                <p className="text-gray-600 mb-3">Python GUI application with basic arithmetic operations</p>
                <div className="flex gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Tkinter</span>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <h3 className="font-bold text-lg mb-2">To-Do List Web App</h3>
                <p className="text-gray-600 mb-3">Interactive task manager with local storage</p>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">LocalStorage</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="https://github.com" 
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                View more projects on GitHub →
              </a>
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Technical Skills */}
          <section id="skills" className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b pb-2 flex items-center gap-2">
              <span>💻</span> Technical Skills
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Java", level: "Intermediate" },
                    { name: "JavaScript", level: "Intermediate" },
                    { name: "Python", level: "Intermediate" },
                    { name: "C#", level: "Beginner" },
                    { name: "C", level: "Beginner" },
                    { name: "HTML", level: "Advanced" },
                    { name: "CSS", level: "Advanced" }
                  ].map((lang, index) => (
                    <div key={index} className="relative group">
                      <span className={`px-3 py-2 rounded-lg ${getLangColor(lang.name)} text-white font-medium`}>
                        {lang.name}
                      </span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20">
                        {lang.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded">Next.js</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded">Bootstrap</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded">Git</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded">VS Code</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded">MySQL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded">MongoDB</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 rounded">Postman</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-bold text-gray-800 mb-3">Currently Learning</h3>
              <div className="flex items-center gap-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <span className="text-sm text-gray-600">React Native</span>
              </div>
            </div>
          </section>

          {/* Contact & Info */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 flex items-center gap-2">
              <span>📱</span> Contact & Info
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600">🏫</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">University</p>
                  <p className="font-semibold">Ateneo de Davao University</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600">📚</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Course & Year</p>
                  <p className="font-semibold">BS Computer Science, 2nd Year</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">Davao City, Philippines</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-white rounded-lg">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <span className="text-red-600">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:yani.santos@example.com" className="font-semibold hover:text-blue-600">
                    ysantos@addu.edu.ph
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-bold mb-3">Connect with me:</h3>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="flex-1 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2"
                >
                  <span>💼</span> LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  className="flex-1 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition flex items-center justify-center gap-2"
                >
                  <span>👨‍💻</span> GitHub
                </a>
              </div>
            </div>
          </section>

          {/* Certifications & Achievements */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600 flex items-center gap-2">
              <span>🏆</span> Certifications
            </h3>
            <div className="space-y-3">
              <div className="p-3 border border-gray-200 rounded-lg">
                <p className="font-semibold">Web Development Bootcamp</p>
                <p className="text-sm text-gray-500">FreeCodeCamp • 2024</p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <p className="font-semibold">Java Programming</p>
                <p className="text-sm text-gray-500">Coursera • 2023</p>
              </div>
              <div className="p-3 border border-gray-200 rounded-lg">
                <p className="font-semibold">Python for Beginners</p>
                <p className="text-sm text-gray-500">Udemy • 2023</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold mb-2">Awards</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Dean's Lister (2023-2024)</li>
                <li>Best Programming Project Award</li>
                <li>Academic Scholarship Grant</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Yani Isaac U. Santos • Last updated: {new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
        <p className="mt-2">This resume was built with Next.js and deployed on Vercel</p>
      </div>
    </div>
  );
}

// Helper function for language colors
function getLangColor(lang: string): string {
  const colors: { [key: string]: string } = {
    'Java': 'bg-red-500',
    'JavaScript': 'bg-yellow-500',
    'Python': 'bg-green-500',
    'C#': 'bg-purple-500',
    'C': 'bg-blue-500',
    'HTML': 'bg-orange-500',
    'CSS': 'bg-blue-400'
  };
  return colors[lang] || 'bg-gray-500';
}
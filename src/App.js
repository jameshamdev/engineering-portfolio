import React, { useState, useEffect } from 'react';
// Correct way to import Lucide icons after installing 'lucide-react'
import { Github, Linkedin, Mail, Code, Lightbulb, User } from 'lucide-react';

const fitnessAppImages = [
  '/IMG_9773.jpg',
  '/IMG_9774.jpg',
  '/IMG_9775.jpg',
  '/IMG_9776.jpg',
  '/IMG_9777.jpg',
  '/IMG_9778.jpg',
  '/IMG_9779.jpg',
  '/IMG_9780.jpg',
  '/IMG_9781.jpg',
  '/IMG_9782.jpg',
];

const cardiologyImages = [
  '/Web Agent 1.jpg',
  '/Web Agent 2.jpg',
  '/Web Agent 3.jpg',
];
const racingImages = [
  '/image(2).jpg',
  '/image(3).jpg',
];
const rocketImages = [
  '/Rocket.jpg',
];

const App = () => {
  const [activeSection, setActiveSection] = useState('about'); // State to manage active section for navigation
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryType, setGalleryType] = useState(''); // 'fitness', 'cardiology', 'racing', 'rocket'

  // Smooth scrolling for navigation
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    // Main container for the entire portfolio application
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-inter text-gray-800 antialiased">
      {/*
        Removed Tailwind CSS CDN and Google Fonts CDN links from here.
        These are now handled by your local Tailwind CSS setup and src/index.css.
      */}

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 shadow-lg backdrop-blur-sm p-4 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          {/* Portfolio Title/Name */}
          <h1 className="text-2xl font-bold text-blue-600">James Hammers</h1>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <button
              onClick={() => scrollToSection('about')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors duration-300 ${activeSection === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors duration-300 ${activeSection === 'skills' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors duration-300 ${activeSection === 'projects' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-lg font-medium hover:text-blue-600 transition-colors duration-300 ${activeSection === 'contact' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
        {/* Background image/gradient with overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/portfoliobackground.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-40"></div> {/* Less dark overlay */}

        <div className="relative z-10 p-8 rounded-lg max-w-4xl mx-auto">
          {/* Profile Picture */}
          <img
            src="/IMG_9715.jpg"
            alt="James Hammers"
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg object-cover"
          />
          {/* Hero Heading */}
          <h2 className="text-5xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-blue-400">James Hammers</span>
          </h2>
          {/* Hero Subtitle/Tagline */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Bridging hardware and code to power real-world innovation.
          </p>
          {/* Call to Action Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white rounded-lg shadow-xl mx-auto my-12 max-w-6xl px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
            <User className="text-blue-600" size={36} /> About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            I am a dedicated Electrical and Computer Engineering student at Princeton University, with a strong interest in the intersection of hardware and software. My academic journey and hands-on projects have equipped me with a solid foundation in programming, data structures, algorithms, and digital logic design.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            My experience ranges from developing AI-powered healthcare assistants and designing PCBs for electric race cars to building mobile fitness trackers. I thrive on challenges and am always eager to learn new technologies and apply them to real-world problems. I'm actively seeking opportunities to contribute to innovative projects and grow my skills in both hardware engineering and software development.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-xl mx-auto my-12 max-w-6xl px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-3">
            <Lightbulb className="text-blue-600" size={36} /> My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programming Languages</h3>
              <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                <li>JavaScript (React, modern ES6+)</li>
                <li>Python (LLM Development, Flask, AI/ML)</li>
                <li>Java (COS 126, Algorithms & Data Structures)</li>
                <li>C++ (Embedded Systems)</li>
                <li>Swift/SwiftUI (iOS Development)</li>
              </ul>
            </div>
            {/* Technologies & Frameworks */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technologies & Frameworks</h3>
              <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                <li>React (SPA development, hooks, state)</li>
                <li>Tailwind CSS (utility-first styling)</li>
                <li>PostCSS (CSS tooling)</li>
                <li>npm & Create React App</li>
                <li>Firebase (Firestore, Auth)</li>
                <li>Ollama, LLaMA 3, FAISS</li>
                <li>Flask</li>
                <li>Altium PCB Design, KiCad, Siemens NX</li>
                <li>AVFoundation</li>
                <li>ESP32, Arduino IDE (for upcoming project)</li>
                <li>INA219, SSD1306 (for upcoming project)</li>
              </ul>
            </div>
            {/* Core Concepts & Tools */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Core Concepts & Tools</h3>
              <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
                <li>Responsive Web Design & Accessibility</li>
                <li>Modal/Lightbox UI patterns</li>
                <li>Image gallery implementation</li>
                <li>Semantic HTML</li>
                <li>Version Control (Git & GitHub)</li>
                <li>Debugging and troubleshooting build tools (npm, PostCSS, Tailwind)</li>
                <li>Documentation and code organization</li>
                <li>Data Structures & Algorithms</li>
                <li>Logic Design</li>
                <li>Embedded Systems</li>
                <li>Circuit Design & Analysis</li>
                <li>Soldering</li>
                <li>Agile Development (implicit from team projects)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white rounded-lg shadow-xl mx-auto my-12 max-w-6xl px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-3">
            <Code className="text-blue-600" size={36} /> My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Project 1: Healthcare AI Assistant */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              {/* Image Gallery for Cardiology AI Assistant */}
              <div className="flex overflow-x-auto space-x-4 mb-4">
                {cardiologyImages.map((src, i) => (
                  <div key={i} className="h-64 w-96 rounded overflow-hidden shadow-md border border-gray-200 flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105">
                    <img
                      src={src}
                      alt={`Cardiology AI Screenshot ${i+1}`}
                      className="h-full w-full object-cover object-top"
                      onClick={() => { setGalleryIndex(i); setGalleryType('cardiology'); setGalleryOpen(true); }}
                    />
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Web-based Cardiology AI Assistant</h3>
              <p className="text-gray-700 mb-4">
                Developed a web-based clinical AI assistant using Flask, FAISS, Ollama, and LLaMA 3.2. Simulates patient intake and delivers context-aware cardiology diagnoses using RAG over MIMIC-III data.
              </p>
              <ul className="text-left list-disc list-inside mb-4 text-gray-600">
                <li>Structured patient intake with age, sex, history, symptoms, and questions</li>
                <li>FAISS-based retrieval of real clinical cases</li>
                <li>Diagnosis generation using LLaMA 3.2 via Ollama</li>
                <li>Local embeddings with SentenceTransformers (MiniLM-L6-v2)</li>
                <li>Flask backend with Jinja2 templating and HTML/CSS frontend</li>
                <li>Modular architecture with future vision model support</li>
              </ul>
            </div>

            {/* Project 2: Fitness Tracking Mobile Application */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
              {/* Image Gallery for Fitness App */}
              <div className="flex overflow-x-auto space-x-4 mb-4">
                {fitnessAppImages.map((src, i) => (
                  <div key={i} className="h-64 w-36 rounded overflow-hidden shadow-md border border-gray-200 flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105">
                    <img
                      src={src}
                      alt={`iOS Fitness App Screenshot ${i+1}`}
                      className="h-full w-full object-cover object-top"
                      onClick={() => { setGalleryIndex(i); setGalleryType('fitness'); setGalleryOpen(true); }}
                    />
                  </div>
                ))}
              </div>
              {galleryOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
                    onClick={() => setGalleryOpen(false)}
                    aria-label="Close gallery"
                  >
                    &times;
                  </button>
                  <button
                    className="absolute left-4 text-white text-3xl font-bold focus:outline-none"
                    onClick={() => setGalleryIndex((galleryIndex - 1 + fitnessAppImages.length) % fitnessAppImages.length)}
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>
                  <div className="max-h-[80vh] max-w-[90vw] rounded shadow-lg border-4 border-white overflow-hidden flex items-center justify-center bg-black">
                    <img
                      src={fitnessAppImages[galleryIndex]}
                      alt={`iOS Fitness App Screenshot ${galleryIndex+1}`}
                      className="h-[70vh] w-auto object-cover object-top"
                    />
                  </div>
                  <button
                    className="absolute right-4 text-white text-3xl font-bold focus:outline-none"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                    onClick={() => setGalleryIndex((galleryIndex + 1) % fitnessAppImages.length)}
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">iOS Fitness Tracking Mobile Application</h3>
              <p className="text-gray-700 mb-4">
                Engineered a comprehensive iOS fitness tracker using SwiftUI, Firebase, Firestore, and AVFoundation. Features personalized goals, real-time sync, cross-device logging, and a robust background timer with audio alerts.
              </p>
              <ul className="text-left list-disc list-inside mb-4 text-gray-600">
                <li>Personalized fitness goals and progress tracking</li>
                <li>Real-time data sync across devices</li>
                <li>Background timer with audio alerts</li>
                <li>Integration with Firebase and Firestore</li>
                <li>Modern SwiftUI interface</li>
                <li>Comprehensive workout and activity logging</li>
              </ul>
            </div>

            {/* Project 3: Princeton Racing Electric - PCB Design */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              {/* Image Gallery for Princeton Racing Electric */}
              <div className="flex overflow-x-auto space-x-4 mb-4">
                {racingImages.map((src, i) => (
                  <div key={i} className="h-64 w-96 rounded overflow-hidden shadow-md border border-gray-200 flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105">
                    <img
                      src={src}
                      alt={`Princeton Racing PCB Screenshot ${i+1}`}
                      className="h-full w-full object-cover object-top"
                      onClick={() => { setGalleryIndex(i); setGalleryType('racing'); setGalleryOpen(true); }}
                    />
                  </div>
                ))}
              </div>
              {galleryOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                  <button
                    className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
                    onClick={() => setGalleryOpen(false)}
                    aria-label="Close gallery"
                  >
                    &times;
                  </button>
                  <button
                    className="absolute left-4 text-white text-3xl font-bold focus:outline-none"
                    onClick={() => {
                      let images = racingImages;
                      setGalleryIndex((galleryIndex - 1 + images.length) % images.length);
                    }}
                    aria-label="Previous image"
                  >
                    &#8592;
                  </button>
                  <div className="max-h-[80vh] max-w-[90vw] rounded shadow-lg border-4 border-white overflow-hidden flex items-center justify-center bg-black">
                    <img
                      src={racingImages[galleryIndex]}
                      alt={`Princeton Racing PCB Screenshot ${galleryIndex+1}`}
                      className="h-[70vh] w-auto object-cover object-top"
                    />
                  </div>
                  <button
                    className="absolute right-4 text-white text-3xl font-bold focus:outline-none"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                    onClick={() => {
                      let images = racingImages;
                      setGalleryIndex((galleryIndex + 1) % images.length);
                    }}
                    aria-label="Next image"
                  >
                    &#8594;
                  </button>
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Princeton Racing Electric Cell Monitoring Flex PCB | Hardware Design</h3>
              <p className="text-gray-700 mb-4">
                Created a flexible printed circuit board (PCB) in Altium for real-time battery cell temperature monitoring
              </p>
              <ul className="text-left list-disc list-inside mb-4 text-gray-600">
                <li>Integrated thermal sensing and trace routing to optimize performance of lithium-ion cells in high-load systems</li>
                <li>Ensured manufacturability by balancing bend radii, layer stack-up, and connector constraints for flex operation</li>
                <li>Verified schematic capture, layout rules, and design-for-assembly to support prototyping and testability</li>
                <li>Documented BOM, netlists, and layer plots for fabrication and JLCPCB export</li>
              </ul>
            </div>

            {/* Project 4: Upcoming Embedded System Project */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-orange-500 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Upcoming: USB-C Power Monitoring System</h3>
              <p className="text-gray-700 mb-4">
                Developing a low-cost embedded system using ESP32, INA219, and SSD1306 to monitor real-time current and voltage from USB-C sources. This project involves firmware development in C/C++ and custom PCB fabrication.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="text-gray-500 font-medium">In Progress</span>
              </div>
            </div>

            {/* Project 5: Zephyr Rocket - Princeton Rocketry */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md border-b-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 w-full rounded overflow-hidden mb-4 shadow-md border border-gray-200 cursor-pointer flex items-center justify-center" onClick={() => { setGalleryIndex(0); setGalleryType('rocket'); setGalleryOpen(true); }}>
                <img
                  src="/Rocket.jpg"
                  alt="Zephyr Rocket"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Zephyr Rocket | Princeton High-Power Rocketry</h3>
              <p className="text-gray-700 mb-4">
                Integrated custom Arduino-based telemetry and altimeter systems to monitor real-time flight data
              </p>
              <ul className="text-left list-disc list-inside mb-4 text-gray-600">
                <li>Optimized and tested a dual-stage recovery system for improved reliability and rocket reusability</li>
                <li>Assembled and launched high-power rocket, applying principles of aerodynamics, electronics, and system integration</li>
                <li>Gained hands-on experience with high-altitude launch prep, stability tuning, and field diagnostics</li>
              </ul>
              <a
                href="https://drive.google.com/file/d/1kWwaCXWaxZ05P7KvFJ1yui8LDNqU7wqU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 hover:text-blue-800 font-medium underline"
              >
                Launch Video
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-l from-blue-50 to-indigo-50 rounded-lg shadow-xl mx-auto my-12 max-w-6xl px-8 sm:px-12 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Get In Touch</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, collaborations, or internship opportunities. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/james-hammers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-105"
            >
              <Linkedin size={30} />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
            {/* GitHub Link */}
            <a
              href="https://github.com/jameshamdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-800 hover:text-gray-900 transition-colors duration-300 transform hover:scale-105"
            >
              <Github size={30} />
              <span className="text-lg font-medium">GitHub</span>
            </a>
            {/* Email Link */}
            <a
              href="mailto:james.hammers@princeton.edu"
              className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors duration-300 transform hover:scale-105"
            >
              <Mail size={30} />
              <span className="text-lg font-medium">Email Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12 rounded-t-xl">
        <div className="container mx-auto text-center px-4">
          <p>&copy; {new Date().getFullYear()} James Hammers. All rights reserved.</p>
          <p className="text-sm text-gray-400 mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>

      {/* Modal Gallery for all projects */}
      {galleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            onClick={() => setGalleryOpen(false)}
            aria-label="Close gallery"
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl font-bold focus:outline-none"
            onClick={() => {
              let images =
                galleryType === 'fitness' ? fitnessAppImages :
                galleryType === 'cardiology' ? cardiologyImages :
                galleryType === 'racing' ? racingImages :
                rocketImages;
              setGalleryIndex((galleryIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            &#8592;
          </button>
          <div className="max-h-[80vh] max-w-[90vw] rounded shadow-lg border-4 border-white overflow-hidden flex items-center justify-center bg-black">
            <img
              src={
                galleryType === 'fitness' ? fitnessAppImages[galleryIndex]
                : galleryType === 'cardiology' ? cardiologyImages[galleryIndex]
                : galleryType === 'racing' ? racingImages[galleryIndex]
                : rocketImages[galleryIndex]
              }
              alt="Project Screenshot"
              className="h-[70vh] w-auto object-cover object-top"
            />
          </div>
          <button
            className="absolute right-4 text-white text-3xl font-bold focus:outline-none"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => {
              let images =
                galleryType === 'fitness' ? fitnessAppImages :
                galleryType === 'cardiology' ? cardiologyImages :
                galleryType === 'racing' ? racingImages :
                rocketImages;
              setGalleryIndex((galleryIndex + 1) % images.length);
            }}
            aria-label="Next image"
          >
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

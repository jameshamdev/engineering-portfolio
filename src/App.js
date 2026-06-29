import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Code, User, Cpu, Binary, Layers, Gauge,
  Lightbulb, Briefcase, ExternalLink, Menu, X, ArrowUp, Download,
} from 'lucide-react';

const PLACEHOLDER_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%230f1722'/%3E%3Cg stroke='%232dd4bf' stroke-width='2' opacity='0.5' fill='none'%3E%3Ccircle cx='200' cy='150' r='28'/%3E%3Cpath d='M200 122v-30M200 178v30M172 150h-30M228 150h30M180 130l-20-20M220 130l20-20M180 170l-20 20M220 170l20 20'/%3E%3C/g%3E%3C/svg%3E";

const fitnessAppImages = [
  process.env.PUBLIC_URL + '/IMG_9773.jpg',
  process.env.PUBLIC_URL + '/IMG_9774.jpg',
  process.env.PUBLIC_URL + '/IMG_9775.jpg',
  process.env.PUBLIC_URL + '/IMG_9776.jpg',
  process.env.PUBLIC_URL + '/IMG_9777.jpg',
  process.env.PUBLIC_URL + '/IMG_9778.jpg',
  process.env.PUBLIC_URL + '/IMG_9779.jpg',
  process.env.PUBLIC_URL + '/IMG_9780.jpg',
  process.env.PUBLIC_URL + '/IMG_9781.jpg',
  process.env.PUBLIC_URL + '/IMG_9782.jpg',
];
const cardiologyImages = [
  process.env.PUBLIC_URL + '/Web_Agent_1.jpg',
  process.env.PUBLIC_URL + '/Web_Agent_2.jpg',
  process.env.PUBLIC_URL + '/Web_Agent_3.jpg',
];
const racingImages = [
  process.env.PUBLIC_URL + '/RacingPCB_1.jpg',
  process.env.PUBLIC_URL + '/RacingPCB_2.jpg',
  process.env.PUBLIC_URL + '/image(2).jpg',
  process.env.PUBLIC_URL + '/image(3).jpg',
];
const rocketImages = [
  process.env.PUBLIC_URL + '/Rocket.jpg',
];
// Drop your two breadboard photos into the /public folder with these exact
// filenames and they'll show up here automatically.
const gestureImages = [
  process.env.PUBLIC_URL + '/GestureMP3_1.jpg',
  process.env.PUBLIC_URL + '/GestureMP3_2.jpg',
];

const galleryMap = {
  fitness: fitnessAppImages,
  cardiology: cardiologyImages,
  racing: racingImages,
  rocket: rocketImages,
  gesture: gestureImages,
};

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const experience = [
  {
    role: 'Electrical Engineering Intern',
    org: 'Second Order Effects (SOE) — El Segundo, CA',
    date: 'Incoming Summer 2026',
    bullets: [
      'Will contribute to end-to-end development of custom electronics across aerospace, automotive, and industrial sectors — schematic capture, multi-layer PCB layout in Altium Designer, and signal integrity analysis.',
      'Will perform board bring-up, hardware validation, and debug using lab instrumentation (oscilloscopes, logic analyzers, spectrum analyzers), resolving hardware-firmware interactions on client-facing prototypes.',
    ],
  },
  {
    role: 'Undergraduate Researcher — Healthcare AI Laboratory',
    org: 'Penn Medicine Medical Center, under Dr. Jonathan Woo (Chair, Dept. of Medicine)',
    date: 'Jan. 2025 – Mar. 2026',
    bullets: [
      'Built a low-latency cardiology AI assistant using Flask, FAISS, and LLaMA 3 (via Ollama), with RAG-based semantic search over the MIMIC-III clinical dataset for real-time diagnoses and treatment recommendations.',
      'Developing multi-agent systems modeling specialized clinical roles and applying reinforcement learning to optimize the clinical decision pipeline and diagnostic reward signal design.',
    ],
  },
  {
    role: 'High Voltage and Accumulator Engineering Team Member',
    org: 'Princeton Racing Electric (FSAE)',
    date: 'Aug. 2024 – Present',
    bullets: [
      'Designed custom flexible PCBs in Altium Designer for real-time battery cell monitoring, iterating through full prototyping and test cycles — panelization, bring-up, validation, and design revision.',
      'Fabricated a custom manufacturing jig to precisely attach flex PCBs to battery cells, and developed main board wiring and Altium schematics for the power distribution system to FSAE high-voltage safety requirements.',
    ],
  },
  {
    role: 'High Power Rocketry and Avionics Team Member',
    org: 'Princeton Rocketry',
    date: 'Aug. 2024 – Feb. 2026',
    bullets: [
      'Designed and CAD-modeled a pan-and-tilt Yagi antenna tracker in Onshape, engineering 3D-printed mechanical components for real-time telemetry tracking of active rocket flights.',
      'Built and launched Zephyr Rockets, integrating Arduino-based telemetry systems for real-time flight data collection.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Hardware & Embedded',
    icon: Cpu,
    items: [
      'PCB Design (Altium Designer, KiCad)',
      'Flex PCB Design',
      'Microcontrollers (ESP32, Arduino)',
      'Embedded C/C++',
      'Sensor Interfacing (I2C, Analog)',
      'Soldering · Onshape · Siemens NX',
    ],
  },
  {
    title: 'HDL & Digital Design',
    icon: Binary,
    items: [
      'Verilog & RTL Design',
      'FSM Design',
      'FPGA Synthesis & Deployment',
      'LC-3 ISA',
      'Waveform Debugging',
    ],
  },
  {
    title: 'Languages',
    icon: Code,
    items: [
      'Python (Flask)',
      'C++ (Embedded)',
      'Java',
      'Swift / SwiftUI',
      'JavaScript (ES6+)',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    items: [
      'React',
      'Flask',
      'FAISS',
      'LLaMA 3 (via Ollama)',
      'Firebase (Firestore, Auth)',
    ],
  },
  {
    title: 'Lab & Tools',
    icon: Gauge,
    items: [
      'Oscilloscopes & Logic Analyzers',
      'Spectrum Analyzers',
      'Waveform Analysis',
      'Git & GitHub · VS Code',
    ],
  },
  {
    title: 'Concepts',
    icon: Lightbulb,
    items: [
      'Data Structures & Algorithms',
      'Retrieval-Augmented Generation (RAG)',
      'Reinforcement Learning',
      'Circuit Design & Analysis',
    ],
  },
];

const projects = [
  {
    id: 'gesture',
    badge: 'Featured · ECE 203',
    title: 'Gesture-Controlled MP3 Player',
    subtitle: 'Hardware Build · Arduino Uno, IR Sensing, DFPlayer Mini',
    description:
      "Built with Abhinav Devpura. A fully customizable MP3 player controlled entirely by hand gestures over a proximity sensor — no screen required. The idea: drivers shouldn't have to look at a touchscreen to change a song.",
    bullets: [
      'Sharp GP2Y0A21YK IR distance sensor feeds an analog signal into the Arduino Uno on A0, smoothed by averaging 8 samples to filter electrical noise',
      'Approach = previous track, retreat = next track, a 2-second hover toggles play/pause — all tuned through threshold and cooldown logic',
      'Commands drive a DFPlayer Mini over SoftwareSerial (1kΩ resistors level-shift the 5V Arduino lines), decoding MP3s off a microSD card',
      'PAM8403 amplifier (chosen for efficient 5V USB operation) powers dual 4Ω/3W speakers; an SSD1306 OLED over I2C shows the live track name, track number, and volume',
      'Song titles stored in PROGMEM flash memory to work around the Uno\'s 2KB RAM limit',
    ],
    tags: ['Arduino Uno', 'C/C++', 'IR Sensing', 'I2C', 'DFPlayer Mini'],
    status: 'Completed — Spring 2026',
    gallery: 'gesture',
    links: [
      { label: 'Demo Video', href: 'https://drive.google.com/file/d/1UHei0sMGTyBKTOHXGcaoK4sdOKeRXE8w/view?usp=sharing' },
    ],
  },
  {
    id: 'punc',
    badge: 'Verilog · FPGA',
    title: 'PUnC — 16-Bit Microprocessor',
    subtitle: 'Nov. 2025 – Dec. 2025',
    description:
      'Designed and implemented a 16-bit microprocessor in Verilog covering a substantial subset of the LC-3 instruction set architecture, built from the ground up in RTL.',
    bullets: [
      'Full datapath, controller FSM, ALU, PC logic, condition codes, and register-file integration',
      'Validated through an automated test suite, waveform debugging, and an original LC-3 assembly program',
      'Synthesized and deployed to FPGA, confirming end-to-end CPU functionality',
    ],
    tags: ['Verilog', 'FPGA', 'LC-3 ISA', 'RTL Design'],
    status: 'Completed',
  },
  {
    id: 'simon',
    badge: 'Verilog HDL',
    title: 'Simon Memory Game Machine',
    subtitle: 'Nov. 2025',
    description:
      'A two-player Simon game built entirely in Verilog, designed around a custom datapath and control FSM rather than any pre-built game logic.',
    bullets: [
      '64-entry pattern memory, comparators, legality-checking logic, counters, and LED display drivers',
      'Wrote modular testbenches for the datapath, controller, and full gameplay loop — design passed all verification tests',
    ],
    tags: ['Verilog', 'FSM Design', 'RTL', 'Testbenches'],
    status: 'Completed',
  },
  {
    id: 'racing',
    badge: 'Princeton Racing Electric',
    title: 'Flex PCB Cell Monitoring | Hardware Design',
    subtitle: 'High Voltage & Accumulator Team',
    description:
      'Designed a flexible printed circuit board in Altium for real-time battery cell temperature monitoring on an FSAE electric race car.',
    bullets: [
      'Integrated thermal sensing and trace routing to optimize performance of lithium-ion cells in high-load systems',
      'Balanced bend radii, layer stack-up, and connector constraints for flex operation to ensure manufacturability',
      'Verified schematic capture, layout rules, and design-for-assembly to support prototyping and testability',
      'Documented BOM, netlists, and layer plots for fabrication and JLCPCB export',
    ],
    tags: ['Altium Designer', 'Flex PCB', 'Battery Systems'],
    status: 'Completed',
    gallery: 'racing',
  },
  {
    id: 'rocket',
    badge: 'Princeton Rocketry',
    title: 'Zephyr Rocket | Avionics & Telemetry',
    subtitle: 'High Power Rocketry & Avionics Team',
    description:
      'Integrated custom Arduino-based telemetry and altimeter systems to monitor real-time flight data on a high-power rocket.',
    bullets: [
      'Optimized and tested a dual-stage recovery system for improved reliability and rocket reusability',
      'Assembled and launched a high-power rocket, applying aerodynamics, electronics, and system integration',
      'Gained hands-on experience with high-altitude launch prep, stability tuning, and field diagnostics',
    ],
    tags: ['Arduino', 'Telemetry', 'Avionics'],
    status: 'Completed',
    gallery: 'rocket',
    links: [
      { label: 'Launch Video', href: 'https://drive.google.com/file/d/1kWwaCXWaxZ05P7KvFJ1yui8LDNqU7wqU/view?usp=sharing' },
    ],
  },
  {
    id: 'cardiology',
    badge: 'Healthcare AI Lab',
    title: 'Web-Based Cardiology AI Assistant',
    subtitle: 'Flask · FAISS · LLaMA 3 · RAG',
    description:
      'A web-based clinical AI assistant that simulates patient intake and delivers context-aware cardiology diagnoses using RAG over MIMIC-III data.',
    bullets: [
      'Structured patient intake with age, sex, history, symptoms, and follow-up questions',
      'FAISS-based retrieval of real clinical cases and local embeddings via SentenceTransformers (MiniLM-L6-v2)',
      'Diagnosis generation using LLaMA 3.2 via Ollama, served through a Flask + Jinja2 backend',
    ],
    tags: ['Flask', 'FAISS', 'LLaMA 3', 'RAG'],
    status: 'Completed',
    gallery: 'cardiology',
  },
  {
    id: 'fitness',
    badge: 'iOS · SwiftUI',
    title: 'iOS Fitness Tracking App',
    subtitle: 'SwiftUI · Firebase · AVFoundation',
    description:
      'A comprehensive iOS fitness tracker with personalized goals, real-time sync, cross-device logging, and a background timer with audio alerts.',
    bullets: [
      'Real-time data sync across devices via Firebase and Firestore',
      'Background timer with audio alerts built on AVFoundation',
      'Modern SwiftUI interface for workout and activity logging',
    ],
    tags: ['Swift', 'SwiftUI', 'Firebase'],
    status: 'Completed',
    gallery: 'fitness',
  },
  {
    id: 'usbc',
    badge: 'In Progress',
    title: 'USB-C Power Monitoring System',
    subtitle: 'ESP32 · INA219 · SSD1306',
    description:
      'A low-cost embedded system to monitor real-time current and voltage from USB-C sources, with custom firmware and PCB fabrication.',
    bullets: [
      'Firmware development in C/C++ to read and display live power metrics',
      'Custom PCB fabrication planned around the ESP32, INA219, and SSD1306',
    ],
    tags: ['ESP32', 'INA219', 'SSD1306'],
    status: 'In Progress',
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [galleryType, setGalleryType] = useState('');

  const currentGallery = galleryMap[galleryType] || [];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  const openGallery = (type, index) => {
    setGalleryType(type);
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  const stepGallery = (dir) => {
    setGalleryIndex((prev) => (prev + dir + currentGallery.length) % currentGallery.length);
  };

  // Scroll-spy: highlight the nav link for whichever section is in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Show "back to top" button once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-ink-950 font-inter text-slate-200 antialiased selection:bg-circuit-500/30">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4 max-w-6xl">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-semibold tracking-tight text-white hover:text-circuit-400 transition-colors"
          >
            James<span className="text-circuit-400">.</span>Hammers
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-mono text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === link.id ? 'text-circuit-400' : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={process.env.PUBLIC_URL + '/James_Hammers_Resume.pdf'}
              download
              className="flex items-center gap-1.5 rounded-full border border-circuit-500/40 px-4 py-1.5 font-mono text-sm text-circuit-400 hover:bg-circuit-500/10 hover:shadow-glow transition-all"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-slate-200"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile nav panel */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-ink-950 px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left font-mono text-sm ${
                  activeSection === link.id ? 'text-circuit-400' : 'text-slate-400'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={process.env.PUBLIC_URL + '/James_Hammers_Resume.pdf'}
              download
              className="flex items-center gap-1.5 text-circuit-400 font-mono text-sm"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0 bg-ink-950" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(45,212,191,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="absolute -left-32 top-1/3 w-[28rem] h-[28rem] rounded-full bg-circuit-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-1/4 w-[28rem] h-[28rem] rounded-full bg-signal-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-950/40 to-ink-950" />

        <div className="relative z-10 px-6 max-w-4xl lg:max-w-5xl mx-auto animate-fadeUp">
          <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full mx-auto mb-8 p-1 bg-gradient-to-br from-circuit-400/60 via-circuit-500/20 to-transparent shadow-glow-lg">
            <img
              src={process.env.PUBLIC_URL + '/IMG_9715.jpg'}
              alt="James Hammers"
              className="w-full h-full rounded-full border-2 border-ink-950 object-cover object-center"
            />
          </div>
          <p className="font-mono text-sm lg:text-base text-circuit-400 mb-4 tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-circuit-400 mr-2 animate-pulseSlow align-middle" />
            Electrical &amp; Computer Engineering · Princeton University
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            James Hammers
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-12 max-w-xl lg:max-w-2xl mx-auto">
            I design circuit boards and the code that wakes them up — lately that's meant
            flex boards for a race car and a gesture-controlled MP3 player just for fun.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-circuit-500 hover:bg-circuit-400 text-ink-950 font-semibold py-3.5 px-8 text-base lg:text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white/15 hover:border-circuit-400/60 text-slate-200 font-medium py-3.5 px-8 text-base lg:text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="scroll-mt-24 py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <span className="block font-mono text-xs text-circuit-500 mb-3 tracking-widest">01 / ABOUT</span>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <User className="text-circuit-400" size={28} /> About Me
          </h2>
          <div className="rounded-2xl border border-white/10 bg-ink-900 p-8 sm:p-10 space-y-5">
            <p className="text-lg leading-relaxed text-slate-300">
              I'm an Electrical &amp; Computer Engineering student at Princeton University
              (B.S.E., Class of 2028, minor in Computer Science), focused on the boundary
              between hardware and the code that drives it. My coursework spans digital logic
              design, semiconductor devices, and computer architecture — and most of my time
              outside of class is spent in Altium, KiCad, and Verilog: designing PCBs, writing
              embedded firmware, and getting hardware to talk to software.
            </p>
            <p className="text-lg leading-relaxed text-slate-300">
              Recent work includes a 16-bit LC-3 microprocessor synthesized to FPGA, flexible
              PCBs for battery cell monitoring on Princeton's Formula SAE electric race car,
              and a gesture-controlled MP3 player built around a Sharp IR sensor and a DFPlayer
              Mini. This summer I'll be joining{' '}
              <span className="text-circuit-400 font-medium">Second Order Effects (SOE)</span>{' '}
              in El Segundo, CA as an Electrical Engineering Intern, working on schematic
              capture, PCB layout, and hardware validation for aerospace, automotive, and
              industrial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24 py-24 px-6 bg-ink-900/40">
        <div className="container mx-auto max-w-4xl">
          <span className="block font-mono text-xs text-circuit-500 mb-3 tracking-widest">02 / EXPERIENCE</span>
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Briefcase className="text-circuit-400" size={28} /> Experience
          </h2>
          <div className="relative border-l border-white/10 ml-3 space-y-12">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-8">
                <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-ink-950 border-2 border-circuit-400" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <span className="font-mono text-xs text-circuit-400 whitespace-nowrap">{job.date}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{job.org}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="text-slate-300 text-sm leading-relaxed flex gap-2">
                      <span className="text-circuit-500 mt-1">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24 py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <span className="block font-mono text-xs text-circuit-500 mb-3 tracking-widest">03 / SKILLS</span>
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Lightbulb className="text-circuit-400" size={28} /> Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-ink-900 p-7 hover:border-circuit-500/40 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-circuit-400" size={22} />
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-sm text-slate-400 flex gap-2">
                        <span className="text-circuit-500">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 py-24 px-6 bg-ink-900/40">
        <div className="container mx-auto max-w-6xl">
          <span className="block font-mono text-xs text-circuit-500 mb-3 tracking-widest">04 / PROJECTS</span>
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <Code className="text-circuit-400" size={28} /> Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-white/10 bg-ink-900 p-7 hover:border-circuit-500/40 hover:shadow-glow transition-all duration-300 flex flex-col"
              >
                {p.gallery && (
                  <div
                    className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 mb-5 cursor-pointer group"
                    onClick={() => openGallery(p.gallery, 0)}
                  >
                    <img
                      src={galleryMap[p.gallery][0]}
                      alt={`${p.title} preview`}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMG; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {galleryMap[p.gallery].length > 1 && (
                      <span className="absolute bottom-2 right-2 font-mono text-xs px-2 py-1 rounded-full bg-ink-950/80 border border-white/10 text-slate-300">
                        +{galleryMap[p.gallery].length - 1} more
                      </span>
                    )}
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wide text-circuit-400">{p.badge}</span>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full border ${
                      p.status === 'In Progress'
                        ? 'border-amber-400/40 text-amber-300'
                        : 'border-circuit-500/30 text-circuit-400'
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{p.subtitle}</p>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">{p.description}</p>
                {p.bullets && (
                  <ul className="space-y-2 mb-4">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-circuit-500 mt-0.5">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-circuit-500/10 text-circuit-400 border border-circuit-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.links && (
                  <div className="flex gap-4 mt-4">
                    {p.links.map((l, j) => (
                      <a
                        key={j}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-circuit-400 hover:text-circuit-300 font-medium"
                      >
                        {l.label} <ExternalLink size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="block font-mono text-xs text-circuit-500 mb-3 tracking-widest">05 / CONTACT</span>
          <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            I'm always open to discussing new projects, research collaborations, or hardware
            builds. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/james-hammers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-full border border-white/10 px-6 py-3 text-slate-200 hover:border-circuit-400/60 hover:text-circuit-400 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/jameshamdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-full border border-white/10 px-6 py-3 text-slate-200 hover:border-circuit-400/60 hover:text-circuit-400 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="mailto:james.hammers@princeton.edu"
              className="flex items-center space-x-2 rounded-full border border-white/10 px-6 py-3 text-slate-200 hover:border-circuit-400/60 hover:text-circuit-400 transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span className="font-medium">Email Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="container mx-auto text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} James Hammers. All rights reserved.</p>
          <p className="font-mono text-xs text-slate-600 mt-2">Built with React &amp; Tailwind CSS</p>
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => scrollToSection('hero')}
          className="fixed bottom-6 right-6 z-40 bg-ink-800 border border-white/10 text-circuit-400 p-3 rounded-full shadow-glow hover:bg-ink-700 transition-all"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Lightbox gallery (shared across all projects) */}
      {galleryOpen && currentGallery.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            onClick={() => setGalleryOpen(false)}
            aria-label="Close gallery"
          >
            &times;
          </button>
          {currentGallery.length > 1 && (
            <button
              className="absolute left-4 text-white text-3xl font-bold focus:outline-none"
              onClick={() => stepGallery(-1)}
              aria-label="Previous image"
            >
              &#8592;
            </button>
          )}
          <div className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-glow-lg border border-white/10 overflow-hidden flex items-center justify-center bg-black">
            <img
              src={currentGallery[galleryIndex]}
              alt="Project screenshot"
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src = PLACEHOLDER_IMG; }}
            />
          </div>
          {currentGallery.length > 1 && (
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-slate-400">
              {galleryIndex + 1} / {currentGallery.length}
            </span>
          )}
          {currentGallery.length > 1 && (
            <button
              className="absolute right-4 text-white text-3xl font-bold focus:outline-none"
              onClick={() => stepGallery(1)}
              aria-label="Next image"
            >
              &#8594;
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

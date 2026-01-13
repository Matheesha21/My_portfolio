import React, { cloneElement, Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import profilePic from "./assets/profile.jpg";
import cvFile from "./assets/Matheeshacv.pdf";




declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
// --- Types ---
interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  link: string;
}
interface Skill {
  category: string;
  items: string[];
}
// --- Data ---
const experienceData: Experience[] = [{
  year: '2024 — 2025',
  role: 'IT TRAINING COORDINATOR',
  company: 'SENURA CIVIL ENGINEERING',
  description: 'Coordinating IT training programs and technical workshops. Managing technology infrastructure and supporting digital transformation initiatives.'
}];
const projectsData: Project[] = [{
  id: '01',
  title: 'HOME ENERGY SAVING KIT',
  category: 'IOT / EMBEDDED SYSTEMS',
  description: 'First-year university project developing an intelligent energy monitoring system using Arduino and IoT sensors for real-time power consumption tracking and optimization.',
  tags: ['C/C++', 'ARDUINO', 'IOT', 'EMBEDDED', 'CIRCUIT DESIGN', 'CLOUD'],
  link: 'https://youtu.be/3EipPmKdW1w?si=pgnECe0se0gCO-Ak'
}];
const skillsData: string[] = ['FULL STACK DEVELOPMENT', 'REACT / NEXT.JS', 'NODE.JS / EXPRESS', 'TYPESCRIPT', 'EMBEDDED SYSTEMS', 'IOT INTEGRATION', 'C/C++ (ARDUINO)', 'CIRCUIT DESIGN'];
// --- Components ---
const Section = ({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) => <motion.section initial={{
  opacity: 0,
  y: 20
}} whileInView={{
  opacity: 1,
  y: 0
}} viewport={{
  once: true,
  margin: '-100px'
}} transition={{
  duration: 0.6,
  ease: 'easeOut'
}} className={`py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto ${className}`}>
    {children}
  </motion.section>;
const Divider = () => <div className="w-full h-px bg-white/10 max-w-6xl mx-auto" />;
const ProjectCard = ({
  project
}: {
  project: Project;
}) => <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block border-2 border-white/20 p-8 hover:border-[#00F0FF] hover:bg-white/5 transition-all duration-300 relative overflow-hidden">
    <div className="flex justify-between items-start mb-8">
      <span className="font-mono text-[#00F0FF] text-sm tracking-widest">
        {project.id} — {project.category}
      </span>
      <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-[#00F0FF] transition-colors" />
    </div>

    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
      {project.title}
    </h3>

    <p className="text-gray-400 mb-8 leading-relaxed">{project.description}</p>

    <div className="flex flex-wrap gap-3 mt-auto">
      {project.tags.map(tag => <span key={tag} className="text-xs font-mono border border-white/10 px-2 py-1 text-gray-500 group-hover:border-[#00F0FF]/30 group-hover:text-[#00F0FF] transition-colors">
          {tag}
        </span>)}
    </div>

    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-[#00F0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>;
export function App() {
  return <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00F0FF] selection:text-black overflow-x-hidden">
      {/* Navigation / Header - Minimal */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference">
        <span className="font-bold text-xl tracking-widest">MATHZ.DEV</span>
        <a href="mailto:as20240947@sci.sjp.ac.lk" className="hidden md:block text-sm font-mono hover:text-[#00F0FF] transition-colors">
          AVAILABLE FOR WORK
        </a>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}>
          {/* Profile Photo */}
          <div className="mb-12">
            <img 
            src={profilePic} 
            alt="Matheesha Weerawansha" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#00F0FF] object-cover" />
          </div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            FULL STACK
            <br />
            <span className="text-transparent stroke-text hover:text-[#00F0FF] transition-colors duration-300" style={{
            WebkitTextStroke: '2px white'
          }}>
              DEVELOPER
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12 border-t border-white/20 pt-8">
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl leading-relaxed">
              Undergraduate at
              <span className="text-[#00F0FF]">
                {' '}
                University of Sri Jayewardenepura
              </span>{' '}
              building innovative solutions with
              <span className="text-[#00F0FF]"> full stack expertise</span>.
            </p>

            <div className="flex flex-col gap-6 items-start md:items-end">
              <div className="flex gap-6">
                <SocialLink icon={<Github />} href="https://github.com/Matheesha21" label="Github" />
                <SocialLink icon={<Linkedin />} href="https://www.linkedin.com/in/matheesha-weerawansha-17a9b52b9/" label="LinkedIn" />
                <SocialLink icon={<Mail />} href="mailto:as20240947@sci.sjp.ac.lk" label="Email" />
              </div>

              <a
                href={cvFile}
                download
                target="_blank"
                rel="noopener noreferrer">
                DOWNLOAD CV <Download className="w-4 h-4" />
              </a>

            </div>
          </div>
        </motion.div>
      </section>

      <Divider />

      {/* Experience Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-wider uppercase sticky top-32">
              Experience
              <span className="block w-12 h-2 bg-[#00F0FF] mt-4" />
            </h2>
          </div>

          <div className="md:col-span-8 space-y-16 border-l-2 border-[#00F0FF] pl-8 md:pl-12 py-4">
            {experienceData.map((exp, index) => <div key={index} className="group">
                <span className="font-mono text-[#00F0FF] text-sm tracking-widest mb-2 block">
                  {exp.year}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                  {exp.role}
                </h3>
                <p className="text-xl text-gray-400 mb-4">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>)}
          </div>
        </div>
      </Section>

      <Divider />

      {/* Projects Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-wider uppercase sticky top-32">
              Projects
              <span className="block w-12 h-2 bg-[#00F0FF] mt-4" />
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 gap-6">
              {projectsData.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Skills Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-4xl font-bold tracking-wider uppercase">
              Capabilities
              <span className="block w-12 h-2 bg-[#00F0FF] mt-4" />
            </h2>
          </div>

          <div className="md:col-span-8">
            <ul className="space-y-4">
              {skillsData.map((skill, index) => <li key={index} className="border-b border-white/10 pb-4 last:border-0">
                  <span className="text-3xl md:text-5xl font-bold hover:text-[#00F0FF] hover:pl-4 transition-all duration-300 cursor-default block">
                    {skill}
                  </span>
                </li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Contact Section */}
      <Section className="pb-32">
        <div className="flex flex-col items-start max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-bold leading-none mb-12">
            LET'S BUILD
            <br />
            <span className="text-[#00F0FF]">THE FUTURE.</span>
          </h2>

          <a href="mailto:as20240947@sci.sjp.ac.lk" className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white border-2 border-white overflow-hidden transition-colors duration-300 hover:text-black hover:border-[#00F0FF] focus:outline-none focus:ring-2 focus:ring-[#00F0FF] focus:ring-offset-2 focus:ring-offset-black rounded-none">
            <span className="absolute inset-0 w-full h-full bg-[#00F0FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-4">
              START A PROJECT <ArrowRight className="w-6 h-6" />
            </span>
          </a>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-sm font-mono text-gray-500">
            <div>
              <h4 className="text-white mb-4">SOCIALS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/matheesha-weerawansha-17a9b52b9/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors">
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Matheesha21" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F0FF] transition-colors">
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">CONTACT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:as20240947@sci.sjp.ac.lk" className="hover:text-[#00F0FF] transition-colors">
                    AS20240947@SCI.SJP.AC.LK
                  </a>
                </li>
                <li>
                  <a href="tel:+94778689175" className="hover:text-[#00F0FF] transition-colors">
                    +94 77 868 9175
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">LOCATION</h4>
              <p>COLOMBO, SRI LANKA</p>
              <p>REMOTE AVAILABLE</p>
            </div>
            <div>
              <h4 className="text-white mb-4">VERSION</h4>
              <p>2024 EDITION</p>
              <p>V 1.0.0</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full py-8 px-6 md:px-12 border-t border-white/10 flex justify-between items-end">
        <div className="text-[10rem] leading-[0.8] font-bold text-white/5 select-none pointer-events-none -mb-12 -ml-4 hidden md:block">
          MATHZ
        </div>
        <div className="text-xs font-mono text-gray-600">
          © 2024 MATHZ.DEV — ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>;
}
function SocialLink({
  icon,
  href,
  label
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="p-2 border border-white/20 hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-black transition-all duration-300 rounded-none">
      {cloneElement(icon as React.ReactElement, {
      size: 20
    })}
    </a>;
}
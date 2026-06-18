"use client";
import { motion } from "framer-motion";
import { Shield, Brain, Cpu, Terminal, ExternalLink, Mail, ShieldAlert, Award } from "lucide-react";
import BinaryBackground from "../components/BinaryBackground";
// Animation Configs
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0c] text-[#ececed] selection:bg-[#00ff66] selection:text-black z-10">
      <BinaryBackground />

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md border-b border-neutral-900 bg-[#0a0a0c]/70 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#00ff66] font-bold tracking-wider text-sm flex items-center gap-2"
          >
            <Terminal size={16} /> VIGNESH_MADINENI // CORE
          </motion.div>
          <nav className="flex gap-6 text-xs uppercase tracking-widest text-neutral-400">
            <a href="#about" className="hover:text-[#00ff66] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#00ff66] transition-colors">Stack</a>
            <a href="#projects" className="hover:text-[#00ff66] transition-colors">Deployments</a>
            <a href="#certifications" className="hover:text-[#00ff66] transition-colors">Credentials</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="about" className="max-w-4xl mx-auto px-6 pt-24 pb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 text-xs text-neutral-400 bg-neutral-900/50">
            <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></span>
            Seeking Opportunities | Systems & AI Specialist[cite: 1]
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-sans">
            Hi, I'm <span className="text-[#00ff66]">Vignesh Madineni</span>.
          </h1>
          
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed font-sans">
            Computer Science Engineering student (Class of 2028) specializing in the convergence of 
            <span className="text-[#ececed] font-medium"> Cyber Security, Deep Learning, and Systems Programming</span>. 
            I reverse engineer malware, architect threat classification structures, and build robust software from the bare metal up[cite: 1].
          </p>

          {/* Social CTAs */}
<div className="flex flex-wrap gap-4 pt-4 text-xs font-mono">
  <a href="mailto:vigneshmadineni@gmail.com" className="flex items-center gap-2 px-4 py-3 bg-[#00ff66] text-black font-bold rounded hover:bg-emerald-400 transition-all transform hover:-translate-y-0.5 glow-effect">
    <Mail size={14} /> Establish Connection[cite: 1]
  </a>
  
  {/* GitHub Link with inline SVG */}
  <a href="https://github.com/Vignesh606" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-neutral-800 rounded hover:border-neutral-600 transition-colors">
    <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
    GitHub[cite: 1]
  </a>

  {/* LinkedIn Link with inline SVG */}
  <a href="https://linkedin.com/in/vigneshmadineni" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-neutral-800 rounded hover:border-neutral-600 transition-colors">
    <svg className="w-[14px] h-[14px] fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
    LinkedIn[cite: 1]
  </a>
</div>
        </motion.div>
      </section>

      {/* METRICS DISCOVERY METERS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div {...fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/40 rounded">
            <div className="text-2xl font-bold text-[#00ff66] mb-1">96.58%</div>
            <div className="text-xs tracking-widest text-neutral-400 uppercase">CNN Classification Peak Accuracy[cite: 1]</div>
          </motion.div>
          <motion.div {...fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/40 rounded">
            <div className="text-2xl font-bold text-[#00ff66] mb-1">10,427+</div>
            <div className="text-xs tracking-widest text-neutral-400 uppercase">High-Entropy Malware Samples Handled[cite: 1]</div>
          </motion.div>
          <motion.div {...fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/40 rounded">
            <div className="text-2xl font-bold text-[#00ff66] mb-1">2024 - 2028</div>
            <div className="text-xs tracking-widest text-neutral-400 uppercase">B.Tech CSE - VIT Bhopal[cite: 1]</div>
          </motion.div>
        </div>
      </section>

      {/* TECHNICAL MATRIX SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-xs tracking-widest text-neutral-500 uppercase mb-8 font-mono">// Core Skill Matrix</h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Skill Blocks */}
          <motion.div variants={fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/60 rounded flex flex-col justify-between">
            <div>
              <div className="p-2 w-fit bg-red-950/30 text-red-400 border border-red-900/50 rounded mb-4">
                <Shield size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Malware Analysis & RE[cite: 1]</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4">
                Static & Dynamic Malware Analysis, Reverse Engineering, IDA Pro, Ghidra, PEStudio, x64dbg, Steganography, PE Architecture[cite: 1].
              </p>
            </div>
            <div className="h-1 w-full bg-neutral-900 rounded overflow-hidden"><div className="h-full bg-red-500 w-[90%]"></div></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/60 rounded flex flex-col justify-between">
            <div>
              <div className="p-2 w-fit bg-blue-950/30 text-blue-400 border border-blue-900/50 rounded mb-4">
                <Brain size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Artificial Intelligence[cite: 1]</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4">
                Deep Learning, Computer Vision, PyTorch, TensorFlow, ResNet-50, ResNet-101, DCGANS, Dataset Engineering[cite: 1].
              </p>
            </div>
            <div className="h-1 w-full bg-neutral-900 rounded overflow-hidden"><div className="h-full bg-blue-500 w-[85%]"></div></div>
          </motion.div>

          <motion.div variants={fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/60 rounded flex flex-col justify-between">
            <div>
              <div className="p-2 w-fit bg-emerald-950/30 text-emerald-400 border border-emerald-900/50 rounded mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-3">Software & Systems[cite: 1]</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-4">
                C++, Python, LAMP Stack (Linux, Apache, MySQL, PHP), 8086 Assembly, Bash Scripting, Infrastructure Virtualization[cite: 1].
              </p>
            </div>
            <div className="h-1 w-full bg-neutral-900 rounded overflow-hidden"><div className="h-full bg-emerald-500 w-[92%]"></div></div>
          </motion.div>
        </motion.div>
      </section>

      {/* TECHNICAL PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-900">
        <h2 className="text-xs tracking-widest text-neutral-500 uppercase mb-8 font-mono">// Verified Projects</h2>
        <div className="space-y-8">
          
          {/* Project 1 */}
          <motion.div {...fadeInUp} className="p-6 md:p-8 border border-neutral-900 bg-neutral-950/30 rounded-lg hover:border-neutral-800 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 bg-emerald-950/40 border border-emerald-900 px-2 py-0.5 rounded">Featured Core</span>
                <h3 className="text-lg font-bold group-hover:text-[#00ff66] transition-colors mt-2">Deep Learning-Driven Static Malware Analysis Framework[cite: 1]</h3>
              </div>
              <span className="text-xs text-neutral-500 font-mono">Jan 2026 - Apr 2026[cite: 1]</span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
              Engineered a zero-risk static analysis pipeline mapping raw Windows executable binary data byte-by-byte into dynamic 2D grayscale textures, bypassing fragile header parsing vulnerabilities[cite: 1]. Fine-tuned deep convolutional neural network backbones (<span className="text-neutral-200">ResNet-50 and ResNet-101</span>) to classify polymorphic malware families based on visual geometric anomalies with a peak classification accuracy of <span className="text-[#00ff66]">96.58%</span>[cite: 1].
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
              {['Python', 'PyTorch', 'TensorFlow', 'ResNet-50/101', 'Ghidra', 'HTML5', 'JS'].map((tech) => (
                <span key={tech} className="bg-neutral-900/60 border border-neutral-800/80 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div {...fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/30 rounded-lg hover:border-neutral-800 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
              <h3 className="text-base font-bold text-neutral-200">Password Security Assessment & Resilience Analyzer[cite: 1]</h3>
              <span className="text-xs text-neutral-500 font-mono">Feb 2026[cite: 1]</span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
              Designed and developed an automated security assessment engine built explicitly to evaluate end-to-end credential durability for the Cyber Carnival 2026 hackathon, implementing checks for entropy and common vulnerability vectors[cite: 1].
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
              {['Python', 'Cryptographic Hashing', 'Security Frameworks'].map((tech) => (
                <span key={tech} className="bg-neutral-900/60 border border-neutral-800/80 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div {...fadeInUp} className="p-6 border border-neutral-900 bg-neutral-950/30 rounded-lg hover:border-neutral-800 transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
              <h3 className="text-base font-bold text-neutral-200">Advanced Threats & Metadata Forensics Infrastructure[cite: 1]</h3>
              <span className="text-xs text-neutral-500 font-mono">Jul 2025 - Sep 2025[cite: 1]</span>
            </div>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
              Conducted structural threat dissection and behavioral mapping on evasion vectors like Venom RAT[cite: 1]. Isolated IOCs from complex PE architecture headers using PEStudio and IDA Pro, while mapping footprint characteristics of WannaCry Ransomware variants[cite: 1].
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-neutral-500">
              {['PEStudio', 'IDA Pro', 'Malware Forensics', 'Threat Mapping'].map((tech) => (
                <span key={tech} className="bg-neutral-900/60 border border-neutral-800/80 px-2 py-1 rounded">{tech}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* CERTIFICATIONS & EXPERIENCES */}
      <section id="certifications" className="max-w-6xl mx-auto px-6 py-16 border-t border-neutral-900 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Leadership Pillar */}
        <div>
          <h2 className="text-xs tracking-widest text-neutral-500 uppercase mb-6 font-mono">// Operations & Leadership</h2>
          <div className="space-y-6">
            <div className="p-4 border-l-2 border-neutral-800 bg-neutral-950/20">
              <h4 className="text-sm font-bold">BashCraft Club | Core Recruitment[cite: 1]</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Led high-impact technical recruitment drives for onboarding engineers at VIT Bhopal[cite: 1].</p>
              <span className="text-[10px] text-neutral-500 block mt-2 font-mono">April 2026[cite: 1]</span>
            </div>
            <div className="p-4 border-l-2 border-neutral-800 bg-neutral-950/20">
              <h4 className="text-sm font-bold">Cyber Security Job Simulations[cite: 1]</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans">Deloitte, Mastercard, Tata — Analyzed defense topologies, ran incident mitigation playbooks[cite: 1].</p>
              <span className="text-[10px] text-neutral-500 block mt-2 font-mono">July 2025[cite: 1]</span>
            </div>
          </div>
        </div>

        {/* Certifications Pillar */}
        <div>
          <h2 className="text-xs tracking-widest text-neutral-500 uppercase mb-6 font-mono">// Cryptographic Credentials & Honors</h2>
          <ul className="space-y-3 text-xs text-neutral-400 font-sans">
            {[
              "Cyber Security and Privacy - NPTEL (2026)",
              "Advent of Cyber '25 - TryHackMe",
              "National Financial Literacy Quiz Winner - SEBI (Dec 2025)",
              "India Space Week Participant - ISRO (Apr 2025)",
              "Introduction to Cybersecurity - Cisco Academy",
              "Cybersecurity Basics - IBM Security",
              "MATLAB Certified - MathWorks Studio"
            ].map((cert) => (
              <li key={cert} className="flex items-center gap-2 p-2 border border-neutral-900/50 bg-neutral-950/10 rounded">
                <Award size={12} className="text-[#00ff66]" />
                <span>{cert}[cite: 1]</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FOOTER METADATA */}
      <footer className="border-t border-neutral-950 bg-neutral-950/80 px-6 py-8 text-center text-[10px] font-mono text-neutral-600">
        <p>© 2026 Vignesh Madineni. All parameters verified. Built with Next.js & Framer Motion.</p>
      </footer>
    </main>
  );
}

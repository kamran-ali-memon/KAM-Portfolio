 "use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github,
  Mail, Menu, X, Code2, Layers3, Database, Terminal, Sparkles,
  ExternalLink, Download, Send, CheckCircle2, MapPin
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Sastazon.pk",
    type: "FULL-STACK E-COMMERCE",
    description: "A full-stack shopping experience with product browsing, authentication, cart management, checkout and COD order flow, alongside admin functionality.",
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB"],
    url: "https://sastazonpk.vercel.app/",
    github: "https://github.com/kamran-ali-memon/Sastazon.pk",
    className: "sastazon",
    mark: "S.",
    note: "Commerce · End-to-end workflow"
  },
  {
    number: "02",
    name: "ResumeCraft",
    type: "RESUME BUILDER",
    description: "A resume-focused web project designed around a clear interface and a straightforward user flow.",
    stack: ["JavaScript", "React", "CSS"],
    url: "https://resume-craft-project.vercel.app/",
    github: "https://github.com/kamran-ali-memon/ResumeCraft",
    className: "resumecraft",
    mark: "RC",
    note: "Productivity · Resume creation"
  }
];

const skillGroups = [
  { icon: Code2, title: "Frontend", description: "Responsive, accessible interfaces and reusable UI.", skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"] },
  { icon: Terminal, title: "Backend", description: "Server-side functionality and API integration.", skills: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { icon: Database, title: "Database", description: "Application data and common CRUD workflows.", skills: ["MongoDB", "Mongoose"] },
  { icon: Layers3, title: "Tools & workflow", description: "Version control, debugging and deployment.", skills: ["Git", "GitHub", "Vercel", "Railway", "Postman"] }
];
const navItems = [["About", "#about"], ["Projects", "#projects"], ["Skills", "#skills"], ["Resume", "#resume"], ["Contact", "#contact"]];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeRole, setActiveRole] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formError, setFormError] = useState("");
  const [formReady, setFormReady] = useState(false);
  const roles = ["Frontend Developer", "MERN Stack Developer", "Full-Stack Developer"];

  useEffect(() => {
    const timer = window.setInterval(() => setActiveRole((current) => (current + 1) % roles.length), 2100);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    setFormReady(false);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please fill in your name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(form.subject.trim() || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    setFormReady(true);
    window.location.href = `mailto:kamrankam@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kamran Ali Memon home">
          <span className="brand-mark">K<span>.</span></span>
          <span className="brand-name">KAMRAN<span>ALI MEMON</span></span>
        </a>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>Kamran Ali<br /><span className="gradient-text">Memon.</span></h1>
          <div className="role-line"><span className="role-prefix">I build as a</span><span className="role-slot" key={activeRole}>{roles[activeRole]}</span><span className="typing-cursor" /></div>
          <p className="hero-description">I turn ideas into thoughtful digital experiences — from polished user interfaces to full-stack web applications built for real people.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-ghost" href="/KAM_Full_Stack_Developer_CV_final.pdf" download="Kamran-Ali-Memon-CV.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download CV</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/kamran-ali-memon" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
            <span className="social-divider" /><a href="mailto:kamrankam@gmail.com"><Mail size={17} /> Email me <ArrowUpRight size={13} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="profile-halo"><div className="profile-frame">
            <img src="/images/profile.jpg" alt="Portrait of Kamran Ali Memon" className="profile-image" onError={(event) => { event.currentTarget.style.display = "none"; const fallback = event.currentTarget.nextElementSibling; if (fallback) fallback.style.display = "flex"; }} />
            <div className="profile-placeholder"><span>KM</span><small>YOUR PHOTO</small></div>
          </div></div>
          <div className="floating-chip chip-code"><Code2 size={16} /><span>Clean code</span></div>
          <div className="floating-chip chip-stack"><Layers3 size={16} /><span>MERN / Next.js</span></div>
          <div className="visual-caption"><span className="caption-line" /> BUILDING THE WEB, ONE IDEA AT A TIME</div>
          <div className="visual-index">01 / DEVELOPER PORTFOLIO</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span>CURIOUS MIND.</span><span className="strip-star">✳</span><span>THOUGHTFUL CODE.</span><span className="strip-star">✳</span><span>USEFUL PRODUCTS.</span><span className="strip-star">✳</span><span>CONTINUOUS GROWTH.</span></div></section>

      <section className="section-wrap content-section about-section reveal" id="about">
        <div className="section-heading"><p className="eyebrow"><span>01</span> / A LITTLE ABOUT ME</p><h2>Developer by craft.<br /><span className="muted-heading">Problem-solver by nature.</span></h2></div>
        <div className="about-grid">
          <div className="about-lead"><span className="large-quote">“</span><p>I enjoy creating web experiences that look considered, feel intuitive, and work the way people expect.</p></div>
          <div className="about-copy"><p>I&apos;m Kamran, a web developer focused on the React, Next.js and MERN ecosystem. I learn by building, testing and improving real projects — from interactive interfaces to applications that connect the frontend with databases and APIs.</p><p>My current focus is strengthening my full-stack skills, writing maintainable code, and building products that demonstrate practical problem-solving.</p><a className="text-link" href="#projects">See what I&apos;ve built <ArrowRight size={16} /></a></div>
        </div>
        <div className="about-values"><div><Sparkles size={19} /><span>Detail-minded design</span></div><div><Code2 size={19} /><span>Learn by building</span></div><div><Layers3 size={19} /><span>End-to-end thinking</span></div></div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap content-section reveal">
        <div className="section-heading heading-row"><div><p className="eyebrow"><span>02</span> / SELECTED WORK</p><h2>Less talk.<br /><span className="muted-heading">More things built.</span></h2></div><p className="heading-aside">A closer look at projects where I&apos;ve turned ideas into working web experiences.</p></div>
        <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.className}`} key={project.number}>
          <div className="project-topline"><span>{project.number} / FEATURED PROJECT</span><ArrowUpRight size={18} /></div>
          <a className="project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} live website`}>
            <div className="preview-window"><div className="preview-browser"><span /><span /><span /><i>{project.name.toLowerCase()}</i><ExternalLink size={13} /></div>
              <div className="preview-art"><div className="preview-grid" /><div className="preview-mark">{project.mark}</div><div className="preview-copy"><span>{project.type}</span><strong>{project.name}</strong><small>{project.note}</small></div><div className="preview-orb" /></div>
            </div><span className="preview-visit">VISIT LIVE SITE <ArrowUpRight size={14} /></span>
          </a>
          <div className="project-info"><p className="project-type">{project.type}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="project-links"><a className="button button-primary project-live" href={project.url} target="_blank" rel="noreferrer">Live Demo <ArrowUpRight size={16} /></a><a className="button button-ghost project-github" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a></div>
          </div>
        </article>)}</div>
        <p className="projects-footnote"><span className="footnote-dot" /> Two focused projects. Real links. More in progress.</p>
      </div></section>

      <section className="section-wrap content-section reveal" id="skills">
        <div className="section-heading"><p className="eyebrow"><span>03</span> / MY TOOLKIT</p><h2>Tools I use to<br /><span className="muted-heading">make ideas real.</span></h2><p className="section-subtitle">A growing toolkit for designing, building and shipping web applications.</p></div>
        <div className="skills-grid">{skillGroups.map((group, index) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div><h3>{group.title}</h3><p>{group.description}</p><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}</div>
      </section>

      <section className="journey-section"><div className="section-wrap content-section reveal"><div className="journey-card"><div className="journey-decoration"><div /><div /><div /></div><p className="eyebrow"><span>04</span> / THE MINDSET</p><h2>Always learning.<br /><span className="gradient-text">Always building.</span></h2><p className="journey-copy">I build independently and learn through practical projects: connecting frontend interfaces to backend APIs, working with databases, deploying applications, and debugging real workflows. I’m looking for a team where I can contribute and grow through real-world collaboration.</p><div className="journey-bottom"><span><span className="availability-dot" /> CURRENTLY GROWING</span><span>REACT · NEXT.JS · MERN</span></div></div></div></section>

      <section className="section-wrap content-section resume-section reveal" id="resume"><div className="resume-panel"><div className="resume-icon"><Download size={24} /></div><div className="resume-copy"><p className="eyebrow"><span>05</span> / EXPERIENCE AT A GLANCE</p><h2>Want the details?</h2><p>Get my CV for a concise overview of my education, full-stack skills and featured project work.</p></div><a className="button button-primary resume-button" href="/KAM_Full_Stack_Developer_CV_final.pdf" download="Kamran-Ali-Memon-CV.pdf" target="_blank" rel="noopener noreferrer">Download my CV <Download size={17} /></a></div><p className="resume-note">CV includes education, full-stack skills and featured projects.</p></section>

      <section className="contact-section" id="contact"><div className="section-wrap content-section reveal">
        <div className="section-heading"><p className="eyebrow"><span>06</span> / GET IN TOUCH</p><h2>Have a role in mind?<br /><span className="muted-heading">Let&apos;s start a conversation.</span></h2></div>
        <div className="contact-grid"><div className="contact-copy"><p>I&apos;m interested in opportunities where I can contribute, keep learning, and build useful products with a great team.</p><a className="contact-email" href="mailto:kamrankam@gmail.com"><Mail size={19} /> kamrankam@gmail.com <ArrowUpRight size={16} /></a><div className="contact-detail"><MapPin size={17} /><span>Karachi, Pakistan</span></div><a className="contact-detail contact-github" href="https://github.com/kamran-ali-memon" target="_blank" rel="noreferrer"><Github size={17} /><span>Explore my GitHub</span><ArrowUpRight size={15} /></a><div className="contact-note"><span className="note-line" /> I aim to reply as soon as I can.</div></div>
          <form className="contact-form" onSubmit={handleSubmit}><div className="form-title"><span>YOUR MESSAGE</span><Send size={17} /></div>
            <div className="form-row"><label>Your name<input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Jane Smith" autoComplete="name" required /></label><label>Email address<input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="jane@company.com" autoComplete="email" required /></label></div>
            <label>Subject <span className="optional">(optional)</span><input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} placeholder="Full-stack developer opportunity" /></label>
            <label>Message<textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me a little about the opportunity..." rows={5} required /></label>
            {formError && <p className="form-message form-error">{formError}</p>}{formReady && <p className="form-message form-success"><CheckCircle2 size={16} /> Your email app should open with the message drafted. Send it there to contact me.</p>}
            <button className="button button-primary submit-button" type="submit">Prepare message <ArrowUpRight size={17} /></button><p className="form-disclaimer">This opens your email app to send the message; it does not send it automatically.</p>
          </form>
        </div>
      </div></section>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KAMRAN<span>ALI MEMON</span></span></a><p>Designed with intent. Built with curiosity.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a><span className="footer-copy">© {new Date().getFullYear()} KAMRAN ALI MEMON</span></div></footer>
    </main>
  );
}

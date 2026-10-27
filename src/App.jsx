import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
const projects = [
  { number: '01', name: 'Sastazon.pk', category: 'E-COMMERCE · LIVE', description: 'A live online shopping experience built to make discovering everyday products feel simple and enjoyable.', tags: ['E-commerce', 'Live store'], href: 'https://sastazonpk.vercel.app' },
  { number: '02', name: 'ResumeCraft', category: 'CAREER TOOL · LIVE', description: 'A resume crafting experience designed to help people shape their next career move with confidence.', tags: ['Career', 'Web application'], href: 'https://resume-craft-project.vercel.app' },
  { number: '03', name: 'PeopleDesk', category: 'HUMAN CAPITAL MANAGEMENT · LIVE', description: 'An enterprise-ready human capital management platform bringing AI-assisted HR workflows, payroll, attendance, and leave management together, with secure role-based access for multi-tenant teams.', tags: ['Next.js', 'HR platform', 'AI workflows'], href: 'https://people-deskfrontend.vercel.app' },
];
const roles = ['Full Stack Developer', 'MERN Stack Developer', 'Shopify Developer', 'AI-Assisted Developer', 'Software Engineer'];
const skillGroups = [
  { label: 'FRONTEND DEV', skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'Context API', 'Redux Toolkit'] },
  { label: 'BACKEND DEV', skills: ['Node.js', 'Express.js', 'RESTful API Architecture', 'JWT & CORS Auth', 'Server-Side Rendering (SSR)'] },
  { label: 'DATABASE & STORAGE', skills: ['MongoDB', 'Mongoose ORM', 'PostgreSQL', 'Cloudinary Media Services', 'Multer Memory Management'] },
  { label: 'TOOLS & DEPLOYMENT', skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Railway', 'Render', 'Postman API Testing', 'Axios', 'Figma UI/UX'] },
  { label: 'AI-ASSISTED TOOLS', skills: ['ChatGPT', 'Gemini CLI', 'OpenAI Codex', 'Cursor', 'Google Antigravity', 'Automated Testing & Debugging'] },
];

function Arrow({ diagonal = false }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>; }

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="header">
    <a className="wordmark" href="#home" onClick={close} aria-label="Kamran Ali Memon home"><span className="wordmark-icon"><span>K</span></span><span>KAMRAN ALI MEMON</span></a>
    <button className={open ? 'menu-button is-open' : 'menu-button'} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
    <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Main navigation"><a href="#work" onClick={close}>Work</a><a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Expertise</a><a className="nav-cta" href="#contact" onClick={close}>Let’s talk <Arrow diagonal /></a></nav>
  </header>;
}

function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = roles[roleIndex];
    const delay = deleting ? 34 : typed.length === word.length ? 850 : 58;
    const timer = window.setTimeout(() => {
      if (!deleting && typed.length < word.length) setTyped(word.slice(0, typed.length + 1));
      else if (!deleting) setDeleting(true);
      else if (typed.length > 0) setTyped(typed.slice(0, -1));
      else { setDeleting(false); setRoleIndex((roleIndex + 1) % roles.length); }
    }, delay);
    return () => window.clearTimeout(timer);
  }, [typed, deleting, roleIndex]);
  return <span className="role-cycler" aria-label={roles[roleIndex]}>{typed}<i aria-hidden="true" /></span>;
}

function Hero() {
  return <section className="hero section" id="home">
    <div className="hero-copy reveal"><p className="eyebrow"><span className="availability"><i /> OPEN TO OPPORTUNITIES</span><span className="eyebrow-location">PAKISTAN · AVAILABLE REMOTELY</span></p>
      <h1>Building digital<br />ideas into <span className="color-text">reality<span className="period">.</span></span></h1>
      <p className="hero-intro">I’m <strong>Kamran Ali Memon</strong><span className="role-intro"><br />I work as a <RoleRotator /></span></p>
      <div className="hero-buttons"><a className="button button-bright" href="#work">Explore my work <Arrow /></a><a className="button button-quiet" href="#contact">Let’s connect <Arrow diagonal /></a><a className="resume-request" href="/KAM_Full_Stack_Developer_CV_final.pdf" target="_blank" rel="noreferrer">View CV <Arrow diagonal /></a><a className="resume-request" href="/KAM_Full_Stack_Developer_CV_final.pdf" download="Kamran-Ali-Memon-CV.pdf" target="_blank" rel="noopener noreferrer"><Download size={16} /> Download CV</a></div>
      <div className="hero-stack"><span>FOCUSED ON</span><i /><b>REACT</b><b>NODE.JS</b><b>SHOPIFY</b><b>AI TOOLS</b></div>
    </div>
    <div className="hero-portrait reveal reveal-late"><div className="portrait-frame"><img src="/kamran-profile.jpg" alt="Portrait of Kamran Ali Memon" /><span className="portrait-corner corner-tl" /><span className="portrait-corner corner-br" /></div><div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" /><div className="portrait-note"><span className="note-dot" /> DESIGNING · BUILDING · LEARNING</div><span className="hero-decoration deco-plus">✳</span><span className="hero-decoration deco-star">✦</span><div className="portrait-index">KAMRAN<br /><span>01 / 26</span></div></div>
    <a className="scroll-indicator" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE</a><span className="hero-index">PORTFOLIO <b>—</b> 2026</span>
  </section>;
}

function ProjectArtwork({ project }) {
  return <div className="artwork live-artwork"><iframe src={project.href} title={project.name + ' live homepage preview'} loading="lazy" tabIndex="-1" aria-hidden="true" /><span className="artwork-caption">{project.name} · LIVE HOMEPAGE</span><span className="artwork-orb" /></div>;
}

function Projects() {
  return <section className="work section" id="work"><div className="section-heading reveal"><div><p className="section-kicker"><span>01</span> / SELECTED WORK</p><h2>Work that<br /><span className="color-text">speaks for itself.</span></h2></div><p className="heading-note">Three live products. Ideas turned into real experiences, built with intention and care.</p></div>
    <div className="project-list">{projects.map((project) => <article className="project-card reveal" key={project.number}>
      <a className="project-art-link" href={project.href} target="_blank" rel="noreferrer" aria-label={'Visit ' + project.name + ' live demo'}><ProjectArtwork project={project} /><span className="project-open">OPEN LIVE DEMO <Arrow diagonal /></span></a>
      <div className="project-detail"><div className="project-number">{project.number}<span> / 03</span></div><div className="project-main"><p className="project-category">{project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={'Visit ' + project.name + ' live demo'}><Arrow diagonal /></a></div>
    </article>)}</div><div className="work-foot reveal"><span>MORE IN THE WORKS</span><span className="work-foot-line" /><span>ALWAYS BUILDING WHAT’S NEXT <b>✳</b></span></div>
  </section>;
}

function About() {
  return <section className="about section" id="about">
    <div className="about-visual reveal"><div className="about-photo-frame"><img src="/kamran-about.png" alt="Kamran Ali Memon in a black and white portrait" /><span>THE DEVELOPER, OFF-SCREEN</span></div><blockquote className="code-quote"><span>“</span>Good code is built for people first.<cite>— A principle I bring to every project</cite></blockquote></div>
    <div className="about-copy reveal reveal-late"><p className="section-kicker"><span>02</span> / THE PERSON BEHIND THE CODE</p><h2>Hey, I’m<br /><span className="color-text">Kamran.</span></h2><p className="about-lead">I build things for the web that feel as good to use as they are to look at.</p><p className="about-text">From full-stack applications to Shopify storefronts, I enjoy the whole process: understanding a problem, shaping the experience, and bringing it to life. I use AI-assisted tools thoughtfully to move faster, explore ideas, and spend more time on the details that matter.</p><p className="about-text">I’m always learning, always iterating, and ready for the next good challenge.</p><a href="#contact" className="inline-link">LET’S BUILD SOMETHING <Arrow /></a></div>
  </section>;
}

function Skills() {
  return <section className="skills section" id="skills"><div className="section-heading reveal"><div><p className="section-kicker"><span>03</span> / WHAT I BRING</p><h2>Technology<br /><span className="color-text">stack.</span></h2></div><p className="heading-note">A growing toolkit for taking a project from first idea to shipped experience.</p></div>
    <div className="skills-cloud-panel reveal"><div className="skills-tabs">{skillGroups.map((group) => <a key={group.label} href={'#skill-' + group.label.toLowerCase().replaceAll(' ', '-')}>{group.label}</a>)}</div>
      {skillGroups.map((group, groupIndex) => <div className="skill-cloud-row" id={'skill-' + group.label.toLowerCase().replaceAll(' ', '-')} key={group.label}><span className="skill-category">{group.label}</span><div className="skill-cloud">{group.skills.map((skill, index) => <span className={'skill-pill skill-size-' + ((index + groupIndex) % 3)} key={skill}>{skill}</span>)}</div></div>)}
      <p className="skills-aside">TOOLS I USE IN MY WORKFLOW · SKILL SET GROWS WITH EVERY PROJECT</p>
    </div>
  </section>;
}

function Experience() {
  return <section className="experience section" id="experience"><div className="section-heading reveal"><div><p className="section-kicker"><span>04</span> / EXPERIENCE</p><h2>Learning by<br /><span className="color-text">building.</span></h2></div><p className="heading-note">My professional experience across internship and remote work.</p></div>
    <div className="experience-list reveal"><article className="experience-item"><span className="experience-index">01</span><div><p>INTERNSHIP</p><h3>Software Developer Intern</h3><span>6 months [Ovex Tech]</span></div><span className="experience-type">EARLY CAREER</span></article><article className="experience-item"><span className="experience-index">02</span><div><p>FREELANCING</p><h3>Full-Stack Web Developer</h3><span>2+ years · Freelance</span></div><span className="experience-type">REMOTE WORK</span></article></div>
  </section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  async function sendMessage(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setSending(true);
    setError('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/kamrankam0331@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      if (!response.ok || (result.success !== 'true' && result.success !== true)) {
        throw new Error(result.message || 'Message could not be sent. Please try again.');
      }
      setSent(true);
      form.reset();
    } catch (sendError) {
      setError(sendError.message || 'Message could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
  }
  return <section className="contact section" id="contact"><div className="contact-glow" /><div className="contact-heading reveal"><p className="section-kicker"><span>05</span> / MAKE SOMETHING GOOD</p><h2>Let’s build<br />the <span className="color-text">next thing.</span></h2><p>Have a role, a project, or a good idea? My inbox is open.</p><div className="contact-availability"><i /> OPEN TO FULL-TIME · FREELANCE · COLLABORATION</div></div>
    <div className="contact-panel reveal reveal-late"><form className="contact-form" onSubmit={sendMessage}><input type="hidden" name="_subject" value="New portfolio contact message" /><label>Your name<input name="name" type="text" placeholder="Name" autoComplete="name" required /></label><label>Your email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label><label className="form-wide">Subject<input name="subject" type="text" placeholder="What would you like to discuss?" required /></label><label className="form-wide">Message<textarea name="message" placeholder="Tell me a little about it..." rows="4" required /></label><button className="button button-bright form-submit" type="submit" disabled={sending}>{sending ? 'Sending…' : sent ? 'Send another message' : 'Send a message'} <Arrow diagonal /></button><span className="form-note" role="status">{error || (sent ? 'Thanks! Your message has been sent.' : 'Your message will be sent from this page.')}</span></form>
      <div className="contact-socials"><a href="mailto:kamrankam0331@gmail.com">EMAIL <b>kamrankam0331@gmail.com</b><Arrow diagonal /></a><a href="https://github.com/kamran-ali-memon" target="_blank" rel="noreferrer">GITHUB <b>github.com/kamran-ali-memon</b><Arrow diagonal /></a><a href="https://linkedin.com/in/kamran-ali-memon-31a90a430" target="_blank" rel="noreferrer">LINKEDIN <b>linkedin.com/in/kamran-ali-memon-31a90a430</b><Arrow diagonal /></a></div>
    </div>
  </section>;
}
export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.13 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Header /><main><Hero /><Projects /><About /><Skills /><Experience /><Contact /></main><footer className="footer section"><a className="footer-logo" href="#home">K<span>.</span></a><span>CRAFTED WITH CURIOSITY <b>✳</b> © {new Date().getFullYear()} KAMRAN ALI MEMON</span><a className="back-top" href="#home">BACK TO TOP ↑</a></footer></>;
}



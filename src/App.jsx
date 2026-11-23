import React, { useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  GithubIcon,
  LinkedinIcon,
  Mail,
  Menu,
  X,
  Code2,
  Layers3,
  Workflow,
  Smartphone,
  Copy,
  Check,
  Download,
  Sparkles
} from "lucide-react";
import { profile, skills, projects, experience } from './data';

const IconMap = [Workflow, Layers3, Code2, Smartphone];

function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Work', '#work'], ['About', '#about'], ['Skills', '#skills'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#top" aria-label="Abhay Raj home"><span className="brand-mark">a.</span><span>abhay raj<span className="brand-dot">/</span>dev</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a></nav>
  </header>;
}

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span><i/></div>;
}

function Hero() {
  return <section className="hero" id="top">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse"/> SOFTWARE DEVELOPER <span className="eyebrow-line"/> {profile.location.toUpperCase()}</div>
        <h1>Building the<br/><em>connections</em><br/>behind great<br/>digital products<span className="lime">.</span></h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a></div>
      </div>
      <div className="hero-art" aria-label="Abstract code-inspired illustration">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
        <div className="art-core"><span className="core-bracket">{'{'}</span><span className="core-letters">AR</span><span className="core-bracket">{'}'}</span></div>
        <div className="floating-card card-top"><span className="tiny-dot"/> API_CONNECTED <b>200 OK</b></div>
        <div className="floating-card card-bottom"><span className="card-code">01</span><span>Build · Integrate · Improve</span></div>
        <div className="art-cross cross-one">✳</div><div className="art-cross cross-two">+</div>
      </div>
    </div>
    <div className="hero-footer"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/><span className="hero-note">BACKEND SYSTEMS / API INTEGRATIONS / PRODUCT ENGINEERING</span></div>
  </section>;
}

function Work() {
  return <section className="section work-section" id="work">
    <SectionLabel number="01">SELECTED WORK</SectionLabel>
    <div className="section-heading"><h2>Projects with<br/><em>purpose.</em></h2><p>A selection of platform, integration and product work focused on making systems work better together.</p></div>
    <div className="project-list">{projects.map((p, i) => {
      const Icon = IconMap[i] || Code2;
      return <article className={`project-card ${p.tone}`} key={p.number}>
        <div className="project-top"><span className="project-number">{p.number} / 04</span><span className="project-status">{p.status}</span></div>
        <div className="project-main"><div className="project-icon"><Icon size={25}/></div><div className="project-content"><p className="project-type">{p.type}</p><h3>{p.name}</h3><p className="project-summary">{p.summary}</p>
          <ul>{p.points.map(point => <li key={point}>{point}</li>)}</ul>
          <div className="tags">{p.stack.map(t => <span key={t}>{t}</span>)}</div>
        </div></div>
      </article>;
    })}</div>
  </section>;
}

function About() {
  return <section className="section about-section" id="about">
    <SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel>
    <div className="about-layout">
      <div><h2>Curious by nature.<br/><em>Builder by choice.</em></h2><div className="about-stamp"><Sparkles size={18}/><span>THINK<br/>IN SYSTEMS</span></div></div>
      <div className="about-copy"><p className="about-lead">{profile.about}</p><p>I enjoy understanding how products work end to end — from the first API request to the background job that keeps data in sync. I value clear implementation, dependable workflows, and continuous improvement.</p><div className="experience-card"><span className="mini-label">EXPERIENCE SNAPSHOT</span>{experience.map((e, i) => <div className="experience-row" key={i}><div><h4>{e.role}</h4><p>{e.company}</p><small>{e.detail}</small></div><span>{e.period}</span></div>)}</div></div>
    </div>
  </section>;
}

function Skills() {
  const groups = [...new Set(skills.map(s => s.group))];
  return <section className="section skills-section" id="skills">
    <SectionLabel number="03">TOOLS OF THE TRADE</SectionLabel>
    <div className="section-heading"><h2>My technical<br/><em>toolkit.</em></h2><p>Technologies and platform concepts used across recent development work.</p></div>
    <div className="skill-groups">{groups.map(g => <div className="skill-group" key={g}><h3>{g}</h3><div className="skill-pills">{skills.filter(s => s.group === g).map(s => <span key={s.name}>{s.name}</span>)}</div></div>)}</div>
  </section>;
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { window.location.href = `mailto:${profile.email}`; }
  };
  return <section className="contact-section" id="contact">
    <div className="contact-inner"><SectionLabel number="04">HAVE A PROJECT IN MIND?</SectionLabel>
      <h2>Let's make<br/><em>it happen.</em></h2><p>Have an opportunity, an interesting problem, or an idea worth building? I'd love to hear about it.</p>
      <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={17}/></a><button className="copy-button" onClick={copyEmail}>{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? 'Copied' : profile.email}</button></div>
      <div className="social-links"><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon size={17}/> GitHub <ArrowUpRight size={13}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={17}/> LinkedIn <ArrowUpRight size={13}/></a><a href={`mailto:${profile.email}`}><Mail size={17}/> Email <ArrowUpRight size={13}/></a></div>
    </div>
    <div className="contact-decoration">AR<span>✳</span></div>
  </section>;
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#top"><span className="brand-mark">a.</span><span>abhay raj<span className="brand-dot">/</span>dev</span></a><span>DESIGNED & BUILT WITH INTENTION · © {new Date().getFullYear()}</span><a href="#top">BACK TO TOP ↑</a></footer>;
}

export default function App() {
  return <><Header/><main><Hero/><Work/><About/><Skills/><Contact/></main><Footer/></>;
}

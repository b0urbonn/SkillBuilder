import { useEffect, useState } from 'react'
import { animate } from 'animejs'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const collegeUrl = 'https://marsu.edu.ph/school-of-information-and-computing-sciences/'
const facultyUrl = 'https://sites.google.com/marsu.edu.ph/internsynccicsojt/home'
const universityUrl = 'https://marsu.edu.ph/'
const directoryUrl = 'https://marsu.edu.ph/university-officials-designations-and-contact-information/'
const email = 'cics@marsu.edu.ph'
const logo = '/marsu-logo.png'
const navItems = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/faculty', label: 'Faculty & Structure' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setMenuOpen(false), [location.pathname])
  return <header className="site-header">
    <div className="container header-inner">
      <Link to="/" className="brand" aria-label="CICS Santa Cruz home"><img src={logo} alt="Marinduque State University seal"/><span><strong>CICS</strong><small>Santa Cruz Campus</small></span></Link>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <nav className={menuOpen ? 'navigation open' : 'navigation'} aria-label="Main navigation">
        <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
        {navItems.map(item => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}
      </nav>
      <a className="header-link" href={universityUrl} target="_blank" rel="noreferrer">MarSU website ↗</a>
    </div>
  </header>
}

function PageFrame({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const animation = animate('.page-content', { opacity: [0, 1], y: [8, 0], duration: 280, ease: 'outQuad' })
      return () => { animation.revert() }
    }
  }, [location.pathname])
  return <main className="page-content">{children}</main>
}

function PageTitle({ eyebrow, title, summary }: { eyebrow: string; title: string; summary: string }) {
  return <div className="page-title"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-summary">{summary}</p></div>
}

function Home() {
  return <>
    <section className="home-hero"><div className="container hero-content"><p className="eyebrow">MARINDUQUE STATE UNIVERSITY · SANTA CRUZ CAMPUS</p><h1>College of Information<br/>and Computing Sciences</h1><p className="hero-copy">Explore the BS Information Systems program at Marinduque State University’s Santa Cruz Campus.</p><Link className="button" to="/programs">Explore the BSIS program <span>→</span></Link><p className="hero-location">Santa Cruz, Marinduque, Philippines</p></div></section>
    <section className="intro-strip"><div className="container strip-inner"><p>Information and technology<br/>education in Marinduque.</p><p>CICS brings together learning, research, and community service to help prepare future computing professionals.</p><Link to="/about" className="simple-link">About the college <span>→</span></Link></div></section>
    <section className="section home-program"><div className="container"><p className="eyebrow">STUDY AT SANTA CRUZ</p><div className="home-program-row"><div><h2>Bachelor of Science<br/>in Information Systems</h2><p>Explore how people, information, and technology work together.</p></div><div className="program-code">BS<span>IS</span></div></div><Link to="/programs" className="simple-link">See program details <span>→</span></Link></div></section>
    <section className="home-contact"><div className="container home-contact-inner"><div><p className="eyebrow">HAVE A QUESTION?</p><h2>We can help you get started.</h2></div><Link className="button button-light" to="/contact">Contact CICS <span>→</span></Link></div></section>
  </>
}

function About() {
  return <div className="container content-page"><PageTitle eyebrow="ABOUT CICS" title="Learning with purpose." summary="The College of Information and Computing Sciences at Marinduque State University."/>
    <div className="prose-columns"><div><h2>About the college</h2><p>The College of Information and Computing Sciences (CICS) aims to develop competitive IT professionals and IT-enabled individuals who can contribute to innovation in Marinduque and beyond.</p><p>The college contributes through instruction, research, and extension activities.</p><a className="simple-link" href={collegeUrl} target="_blank" rel="noreferrer">Read the official college profile <span>↗</span></a></div><aside className="fact-block"><p className="eyebrow">A BRIEF HISTORY</p><p>CICS traces its beginnings to the Institute of Information and Computing Sciences, established in 1998. Information Management was also offered at the Sta. Cruz campus before the program became BS Information Systems.</p></aside></div>
    <div className="plain-note"><span className="note-number">01</span><p><strong>Our work</strong><br/>Information technology education, research, and community extension.</p><span className="note-number">02</span><p><strong>Our campus</strong><br/>Marinduque State University, Santa Cruz, Marinduque.</p></div>
  </div>
}

function Programs() {
  return <div className="container content-page"><PageTitle eyebrow="ACADEMIC PROGRAM" title="A degree for a connected world." summary="Study Information Systems at the MarSU Santa Cruz Campus."/>
    <article className="program-detail"><div className="degree-tag">UNDERGRADUATE · SANTA CRUZ CAMPUS</div><p className="degree-short">BS<span>IS</span></p><h2>Bachelor of Science in<br/>Information Systems</h2><p className="detail-copy">Information Systems brings people, organizations, information, and technology together. The program prepares students to understand how information systems can support organizations and help solve practical problems.</p><a className="button" href={collegeUrl} target="_blank" rel="noreferrer">Official program information <span>↗</span></a></article>
    <div className="prose-columns program-note"><div><h2>Want to know more?</h2><p>Ask the college about the current curriculum, course offerings, and program requirements.</p></div><a className="simple-link" href={`mailto:${email}`}>Email CICS <span>→</span></a></div>
  </div>
}

function Faculty() {
  const coordinators = ['Doreena Joy C. Borja', 'Kevin H. Jasmin', 'Aldrin R. Requiz']
  const faculty = ['Melvin M. Carpio', 'Eunice G. De Luna-Malinao', 'Jayvi M. Mandalihan', 'Janebhet R. Nagutom', 'Raphael Dale Ogbac', 'Jet Francis Podaca', 'Christopher Rebistual', 'Mark Carlo Valenzuela']
  return <div className="container content-page">
    <PageTitle eyebrow="FACULTY & STRUCTURE" title="The people behind CICS." summary="Meet the college leadership and explore the core work that supports CICS students." />
    <section className="dean-profile" aria-labelledby="dean-name">
      <div className="dean-initials" aria-hidden="true">RM</div>
      <div className="dean-info">
        <p className="eyebrow">COLLEGE LEADERSHIP</p>
        <h2 id="dean-name">Dr. Ronjie Mar L. Malinao</h2>
        <p>Dean, College of Information and Computing Sciences</p>
      </div>
      <a className="simple-link" href={directoryUrl} target="_blank" rel="noreferrer">Official university directory <span>↗</span></a>
    </section>
    <section className="faculty-structure" aria-labelledby="structure-title">
      <div className="structure-heading"><p className="eyebrow">HOW THE COLLEGE SERVES</p><h2 id="structure-title">Three core functions.</h2><p>MarSU describes CICS’s major functions as education, research, and extension.</p></div>
      <div className="structure-list">
        <article><span>01</span><div><h3>Instruction</h3><p>Faculty support teaching and learning in information and computing sciences, including the BS Information Systems program at Santa Cruz.</p></div></article>
        <article><span>02</span><div><h3>Research</h3><p>Faculty and students engage in research, presentations, and publications.</p></div></article>
        <article><span>03</span><div><h3>Extension</h3><p>The college shares its knowledge through community projects and service.</p></div></article>
      </div>
    </section>
    <section className="faculty-directory" aria-labelledby="faculty-directory-title">
      <div className="faculty-directory-heading"><div><p className="eyebrow">CICS OJT MONITORING</p><h2 id="faculty-directory-title">Faculty & coordinators</h2><p>Names as listed on the college’s OJT coordination page.</p></div><a className="simple-link" href={facultyUrl} target="_blank" rel="noreferrer">View source page <span>↗</span></a></div>
      <div className="faculty-groups">
        <div className="faculty-group"><h3>OJT coordinators</h3><ul>{coordinators.map(name => <li key={name}>{name}</li>)}</ul></div>
        <div className="faculty-group"><h3>OJT faculty</h3><ul>{faculty.map(name => <li key={name}>{name}</li>)}</ul></div>
      </div>
    </section>
    <aside className="faculty-note"><p>For other faculty, staff, and current program contacts, please contact the college directly.</p><a className="button" href={`mailto:${email}`}>Email CICS <span>→</span></a></aside>
  </div>
}

function Admissions() {
  return <div className="container content-page"><PageTitle eyebrow="ADMISSIONS" title="Your next step starts here." summary="Find current application and enrollment information from Marinduque State University."/>
    <div className="admissions-block"><div><p className="eyebrow">FUTURE MARSU STUDENTS</p><h2>Get the latest requirements from the university.</h2><p>Admission periods, application requirements, and enrollment schedules can change. Check the official MarSU website for the latest announcements, or contact CICS with questions about studying at Santa Cruz.</p></div><div className="admissions-actions"><a className="button" href={universityUrl} target="_blank" rel="noreferrer">Visit MarSU website <span>↗</span></a><a className="simple-link" href={`mailto:${email}`}>Ask CICS a question <span>→</span></a></div></div>
    <p className="admissions-footnote">For campus-specific program information, contact the College of Information and Computing Sciences.</p>
  </div>
}

function Contact() {
  return <div className="container content-page"><PageTitle eyebrow="CONTACT" title="Talk to the college." summary="For program and campus inquiries, contact the College of Information and Computing Sciences."/>
    <div className="contact-rows"><a href={`mailto:${email}`}><span className="contact-label">EMAIL</span><span>{email}</span><span className="contact-arrow">↗</span></a><a href={directoryUrl} target="_blank" rel="noreferrer"><span className="contact-label">PHONE</span><span>(042) 332-2853 / (042) 704-0193</span><span className="contact-arrow">↗</span></a><div><span className="contact-label">CAMPUS</span><span>Santa Cruz, Marinduque, Philippines</span></div></div>
    <p className="admissions-footnote">Official details are published in the <a href={directoryUrl} target="_blank" rel="noreferrer">MarSU directory ↗</a>.</p>
  </div>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><Link className="brand footer-brand" to="/"><img src={logo} alt=""/><span><strong>CICS</strong><small>Santa Cruz Campus</small></span></Link><p>College of Information and Computing Sciences<br/>Marinduque State University</p><a href={collegeUrl} target="_blank" rel="noreferrer">Official college page ↗</a></div></footer>
}

export default function App() {
  return <><Header/><PageFrame><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/programs" element={<Programs/>}/><Route path="/faculty" element={<Faculty/>}/><Route path="/admissions" element={<Admissions/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></PageFrame><Footer/></>
}

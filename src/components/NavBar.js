import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo2 from '../assets/img/logo2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/mail.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        } 

        window.addEventListener("scroll",onScroll);
        // return ()=>removeEventListener('scroll',onScroll);
        },[])

        const onUpdateActiveLink=(value)=>{
            setActiveLink(value);
        }
    return (
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo2} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {/* <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link as={Link} to="/React_portfolio" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link as={Link} to="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>

          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/priya-kotagiriwar/'><img src={navIcon1} alt=""/></a>
              <a href='mailto:kotagiriwarpriya@gmail.com'><img src={navIcon2} alt=""/></a>
              <a href='https://www.instagram.com/k_priya7773/'><img src={navIcon3} alt=""/></a>
            </div>
            {/* <Link to="/connect" className="vvd"><span>Let's Connect</span></Link> */}
            <button className="vvd"><Link to='/connect' ><span>Let’s Connect</span></Link></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

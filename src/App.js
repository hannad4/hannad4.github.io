import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer'; 

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "Danny's Website",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Documents', path: '/documents' },
        { title: 'Contact Me', path: '/contact' }
      ],
      home: {
        title: 'Hey there!',
        subtitle: 'Welcome to my personal website.',
        text: 'Placeholder text for now',
      },
      projects: {
        title: 'My Projects',
        subtitle: "From app development to tinkering with robots, I've tried it all",
      },
      documents: {
        title: 'So you wanna see my deets, huh?',
      },
      contact: {
        title: "Let's get in touch",
      }
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true} className='p-0'>  { /*Fluid false = Huge left margin. Change padding via "className='p-0'" */}
          
          <Navbar expand="lg" bg="light" variant="light" className="border-bottom">
            <Navbar.Brand href="#home" class="center">
              <img 
                alt=""
                src="/siteLogo.png" 
                width="30px" 
                height="30px"
                className="d-inline-block align-left"/>{' '}
              Daniel Hanna
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/documents">Documents</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container fluid={false} className='p-1'>
            <p className="">Adding placeholder text for future reference</p>
          </Container>

          <Footer />
          
        </Container>
      </Router>
    );
  }
}

export default App;
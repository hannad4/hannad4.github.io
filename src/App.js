import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer'; 
import HomePage from './pages/HomePage'; 
import ProjectsPage from './pages/ProjectsPage';
import DocumentsPage from './pages/DocumentsPage';
import ContactPage from './pages/ContactPage';

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
        subTitle: 'Welcome to my personal website.',
        text: 'Placeholder text for now',
      },
      projects: {
        title: 'My Projects',
        subTitle: "From app development to tinkering with robots, I've tried it all",
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
            <Navbar.Brand href="/" class="center">
              <img 
                alt="Daniel Hanna Logo"
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

          <Route path="/" exact render={() => 
                          <HomePage title={this.state.home.title} 
                          subTitle={this.state.home.subTitle} 
                          text={this.state.home.text}
                         />} />
          
          <Route path="/projects" exact render={() => 
                          <ProjectsPage title={this.state.projects.title} 
                          subTitle={this.state.projects.subTitle} 
                         />} />

          <Route path="/documents" exact render={() => 
                          <DocumentsPage title={this.state.documents.title}  
                         />} />
          
          <Route path="/contact" exact render={() => 
                          <ContactPage title={this.state.contact.title} 
                         />} />

          <Footer />
          
        </Container>
      </Router>
    );
  }
}

export default App;
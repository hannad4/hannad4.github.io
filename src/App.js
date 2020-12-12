// Site's skeleton (aka start here). Defines pages, page headings, routing, nav bar header, & footer
// Although there are JS files for each page, they will inherit their content from the components section

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage'; 
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: "Danny's Website",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact Me', path: '/contact' }
      ],
      home: {
        title: 'Daniel Hanna',
        subTitle: 'Engineer | Programmer | Problem-Solver',
      },
      projects: {
        title: 'Projects',
      },
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true} className='p-0'>  { /*Fluid false = Huge left margin. Padding via "className='p-0'" */}
          
          <Navbar expand="lg" bg="light" variant="light" className="border-bottom">
            <Navbar.Brand href="/" class="center">
              <img 
                alt="Daniel Hanna Logo"
                src="/siteLogo.png" 
                width="30px" 
                height="30px"
                className="d-inline-block align-left"/>{}
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">My Projects</Link>
                <Link className="nav-link" to="/contact">Contact Me</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => 
                          <HomePage title={this.state.home.title} 
                          subTitle={this.state.home.subTitle} 
                         />} />
          
          <Route path="/projects" exact render={() => 
                          <ProjectsPage title={this.state.projects.title}  
                         />} />
          
          <Route path="/contact" exact render={() => 
                          <ContactPage/>}/>
          
        </Container>
      </Router>
    );
  }
}

export default App;
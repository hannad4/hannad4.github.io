import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


import ProjectsCarousel from '../components/ProjectsCarousel';


function ProjectsPage(props) {
    return (
            <Container fluid={true}>
                    <center>
                    <Col xs={8} className="p-0">
                        <br></br>
                        {props.title && <h1 className="display-4 font-weight-bold">{props.title}</h1>}
                        <p className="display-6 font-weight-light">These are just some highlights. You can find some more good ones <b><a href="https://github.com/hannad4" target="_blank" rel="noopener noreferrer">here</a></b> 😉</p>
                    </Col>
                    <ProjectsCarousel></ProjectsCarousel>
                    </center>
                


            </Container>
    );
}

export default ProjectsPage; 
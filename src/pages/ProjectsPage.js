import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'


function ProjectsPage(props) {
    return (
        <Jumbotron className="bg-transparent justify-content-center p-5" >
            <Container fluid={false}>
                <Carousel>
                    <Carousel.Item>
                        <a href="https://github.com/hannad4/acsAssist" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block w-100"
                                src="../acsAssist.png"
                                alt="ACS Assist Project Slide Image"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>The ACS Assist</h3>
                            <p>A project to aid in Adhesive Capsulitis of Shoulder</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://www.github.com">
                            <img
                                className="d-block w-100"
                                src="../acsAssist.png"
                                alt="ACS Assist Project Slide Image"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>The ACS Assist</h3>
                            <p>A project to aid in Adhesive Capsulitis of Shoulder</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <a href="https://www.github.com">
                            <img
                                className="d-block w-100"
                                src="../acsAssist.png"
                                alt="ACS Assist Project Slide Image"
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>The ACS Assist</h3>
                            <p>A project to aid in Adhesive Capsulitis of Shoulder</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Jumbotron>

    );
}

export default ProjectsPage; 
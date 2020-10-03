import React from 'react';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'

import '../App.css';


function ProjectsCarousel(props) {
    return (
        <Container>
        <Jumbotron className="bg-transparent justify-content-center p-2" >
            
                <Carousel>
                    <Carousel.Item >
                        <a href="https://github.com/hannad4/acsAssist" target="_blank" rel="noopener noreferrer">
                            
                            <Image
                                className="d-block w-100"
                                src="../acsAssist.png"
                                alt="ACS Assist Project Slide Image"
                                responsive
                            />
                        <Carousel.Caption style={{backgroundColor:'rgba(41, 40, 40, 0.8)'}}>
                            <h3>The ACS Assist</h3>
                            <p>A project to aid in Adhesive Capsulitis of Shoulder</p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item overflow="hidden">
                        <a href="https://github.com/hannad4/computerNetworking/tree/master/Projects/Project%201" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block w-100"
                                src="../seleniumWebBot.png"
                                alt="Selenium Bot for Class Selection Project Image"
                                responsive
                            />
                        <Carousel.Caption style={{backgroundColor:'rgba(41, 40, 40, 0.8)'}}>
                            <h3>TCNJ PAWS Selenium Bot</h3>
                            <p>A project to automate class selection & searching in TCNJ's PAWS system</p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>

                    <Carousel.Item overflow="hidden">
                        <a href="https://github.com/hannad4/tcnjParkingSpaces" target="_blank" rel="noopener noreferrer">
                            <Image
                                className="d-block w-100"
                                src="../tcnjParkingSpaces.png"
                                alt="TCNJ Parking Availabilty Project Image"
                                responsive
                            />   
                        <Carousel.Caption style={{backgroundColor:'rgba(41, 40, 40, 0.8)'}}>
                            <h3>TCNJ Parking Availabilty Predictor</h3>
                            <p>A program that estimates available parking at TCNJ given historical data</p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                </Carousel>
            
        </Jumbotron>
        </Container>

    );
}

export default ProjectsCarousel; 
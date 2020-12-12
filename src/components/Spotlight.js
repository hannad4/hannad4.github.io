import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AboutMe from './AboutMe'


function Spotlight(props) {
    return (
        <Jumbotron className="bg-transparent justify-content-center p-5" >
            <Container fluid={true}>
                <Row className="p-0">
                    <Col className="p-0">
                        <center>
                            <Image
                                src="/profile.jpg"
                                width="80%"
                                rounded="true"
                                fluid="true"
                            />
                        </center>
                    </Col>

                    <Col xs={8} className="p-0">
                        {props.title && <h1 className="display-4 font-weight-bold">{props.title}</h1>}
                        {props.subTitle && <h2 className="display-5 font-weight-light">{props.subTitle}</h2>}
                        <br></br>
                        <AboutMe></AboutMe>
                    </Col>

                </Row>

                <br></br>
                <br></br>

                <footer id="footer">
                    <Container className="border-top" fluid={true}>
                        <div className="p-2" style={{ textAlign: 'center' }}>
                            <small>This site was made with ❤ using ReactJS & Bootstrap. For the best experience, visit this site full-screened on desktop. Check out the source code <a href="https://github.com/hannad4/my-website" target="_blank" rel="noopener noreferrer">here</a>
                            </small>
                        </div>
                    </Container>
                </footer>
            </Container>
        </Jumbotron>


    );
}

export default Spotlight; 
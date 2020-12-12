import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Content from '../components/Content';
import { Container } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

class ContactPage extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Content>
                    <center>
                        <br></br>
                        <h1 className="display-4 font-weight-bold justify-content-center">Let's get in touch</h1>
                        <h2 className="font-weight-light">Check out the following links, or click the email button to email me</h2>
                        <br></br>
                        <br></br>
                        <br></br>

                        <Row>
                            <OverlayTrigger
                                placement="bottom"
                                overlay={(
                                    <Tooltip >
                                       View my Github Page
                                    </Tooltip>
                                )}>
                                <Col>
                                    <a href="https://github.com/hannad4/" target="_blank" rel="noopener noreferrer">
                                        <img
                                            alt="Link to website source code located on my GitHub page"
                                            src="/githubLogo.png"
                                            width="175px"
                                            height="175px"
                                            className="d-inline-block align-left" />{' '}
                                    </a>
                                </Col>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={(
                                    <Tooltip >
                                       place linked in here 
                                    </Tooltip>
                                )}>
                                <Col>
                                    place linked in here 
                                </Col>
                            </OverlayTrigger>

                            <OverlayTrigger
                                placement="bottom"
                                overlay={(
                                    <Tooltip >
                                        send an email to daniel.hanna15@gmail.com 
                                    </Tooltip>
                                )}>
                                <Col>
                                    place email button 
                                </Col>
                            </OverlayTrigger>
                        </Row>
                    </center>
                </Content>
            </Container>
        );
    }
}

export default ContactPage;
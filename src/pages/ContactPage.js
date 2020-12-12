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
                        <h1 className="display-1 font-weight-bold justify-content-center">Let's get in touch</h1>
                        <br></br>
                        <h2 className="font-weight-light">Check out the following links, or click the email button to email me</h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>
                            <Row xs={10}>
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
                                                alt="Link to my GitHub page"
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
                                            View my LinkedIn page
                                        </Tooltip>
                                    )}>
                                    <Col>
                                        <a href="https://linkedin.com/in/danielhanna15" target="_blank" rel="noopener noreferrer">
                                            <img
                                                alt="Link to my LinkedIn profile"
                                                src="/linkedinLogo.png"
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
                                            send an email to daniel.hanna15@gmail.com
                                        </Tooltip>
                                    )}>
                                    <Col>
                                        <a href="mailto:daniel.hanna15@gmail.com" target="_blank" rel="noopener noreferrer">
                                            <img
                                                alt="Link to my LinkedIn profile"
                                                src="/emailLogo.png"
                                                width="175px"
                                                height="175px"
                                                className="d-inline-block align-left" />{' '}
                                        </a>
                                    </Col>
                                </OverlayTrigger>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h5 className="font-weight-light">Thank you for visiting my website 
                            <span role="img" aria-label="two hearts"> 💕</span>
                            </h5>
                        </div>
                    </center>
                </Content>
            </Container>
        );
    }
}

export default ContactPage;
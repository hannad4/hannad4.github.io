import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AboutMe from './AboutMe'


function Spotlight(props) {
    return(
        
            <Jumbotron className="bg-transparent justify-content-center p-5" >  {/*delete jumbotron-fluid later b/c I like the rounded corners*/}
                <Container fluid={true}>
                    <Row className="p-0">     
                        <Col className="p-0">
                        <center>
                            <Image 
                            src="/profile.jpg"
                            width= "80%"  
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
                    
                </Container>    
            </Jumbotron>
        
        
    ); 
}

export default Spotlight; 
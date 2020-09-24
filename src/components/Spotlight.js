import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AboutMe from './AboutMe'


function Spotlight(props) {
    return(
        <Container fluid={true}>
            <Jumbotron className="bg-transparent pl-5" >  {/*delete jumbotron-fluid later b/c I like the rounded corners*/}
                
                    <Row>     
                        <Col className="center-block">
                            <Image 
                            src="/profile.jpg"
                            width="100%"  
                            roundedCircle="true" 
                            /> 
                        </Col>
                    
                        <Col xs={7}>
                            {props.title && <h1 className="display-4 font-weight-bold">{props.title}</h1>}
                            {props.subTitle && <h2 className="display-5 font-weight-light">{props.subTitle}</h2>}
                            <br></br>
                            <AboutMe className="p-5"></AboutMe>
                            
                        </Col>
                        <Col></Col>
                    </Row>
                    
                    
            </Jumbotron>
        </Container>
        
    ); 
}

export default Spotlight; 
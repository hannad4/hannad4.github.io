import React from 'react'; 
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Spotlight(props) {
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">  {/*delete jumbotron-fluid later b/c I like the rounded corners*/}
            <Container fluid={false} className='p-0'>
                <Row className="py-5">     
                    <Col xs={2} className="justify-content-right">
                        <Image 
                        src="/profile.jpg" 
                        width="105%"
                        className="text-align-center"  
                        roundedCircle="true" 
                        /> 
                    </Col>
                  
                    <Col className="p-0" >
                        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3>}
                        <br></br>
                        {props.text && <p>{props.text}</p>}
                    </Col>
                </Row>
                
                
            </Container>
        </Jumbotron>
    ); 
}

export default Spotlight; 
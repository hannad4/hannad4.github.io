import React from 'react'; 
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar';

function footer() {

    return (
        <footer >

            { /*Might want to do this so top and bottom border match exactly. Leaving for now */ }
            {/* <Navbar expand="lg" bg="light" variant="light" className="border-bottom"></Navbar>  */}

            <Container className="border-top" fluid={true}>
                <div  style={{textAlign:'center'}}>
                    <small>This site was made with ❤ using ReactJS & Bootstrap. View the source code: </small>
                    <a href="https://github.com/hannad4/my-website" target="_blank" rel="noopener noreferrer">
                        <img 
                        alt="Link to source code located on my GitHub page"
                        src="/githubLogo.png" 
                        width="15px" 
                        height="15px" 
                        className="d-inline-block align-left"/>{' '}
                    </a>
                </div>
            </Container>
               
        </footer>
    ); 
}

export default footer; 
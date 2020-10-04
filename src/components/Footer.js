import React from 'react'; 
import Container from 'react-bootstrap/Container'

function footer() {

    return (
        <footer id="footer">
            <Container className="border-top" fluid={true}>
                <div className="p-2" style={{textAlign:'center'}}>
                    <small>This site was made with ❤ using ReactJS & Bootstrap. For the best experience, visit this site full-screened on desktop. Check out the source code: </small>
                    <a href="https://github.com/hannad4/my-website" target="_blank" rel="noopener noreferrer">
                        <img 
                        alt="Link to website source code located on my GitHub page"
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
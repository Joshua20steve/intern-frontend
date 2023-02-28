import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer>
      <Container fluid className="bg-dark text-light">
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} @CopyRights Project
          </Col>
        </Row>
      </Container>
      </footer>
    );
  }
  
  export default Footer;
  
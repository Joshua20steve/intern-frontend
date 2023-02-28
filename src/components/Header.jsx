import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown, Offcanvas,Button } from 'react-bootstrap';  
import { useNavigate } from 'react-router-dom';


  // const [searchName, setSearchName] = useState('');
  
function Header() {  
  const navigate=useNavigate()
  
  const searchHandle=()=>{
    navigate("/searchitem")
  }
  const home=()=>{  
    navigate("/")
  }
  return (  
    <>  
     <Navbar bg="navbar navbar-expand-md navbar-dark bg-dark" expand={false}>  
  <Container fluid>  
    <Navbar.Brand ><div className="row justify-content-center" ><h2>InternShip Project</h2></div></Navbar.Brand>  
    <Navbar.Toggle aria-controls="offcanvasNavbar" />  
    <Navbar.Offcanvas  
      id="offcanvasNavbar"  
      aria-labelledby="offcanvasNavbarLabel"  
      placement="end"  
    >  
      <Offcanvas.Header closeButton>  
        <Offcanvas.Title id="offcanvasNavbarLabel">Sidebar</Offcanvas.Title>  
      </Offcanvas.Header>  
      <Offcanvas.Body>  
        <Nav className="justify-content-end flex-grow-1 pe-3">  
          <Nav.Link href="#action1">Sidear Item1</Nav.Link>  
          <Nav.Link href="#action2">Sidebar Item 2</Nav.Link>  
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">  
            <NavDropdown.Item href="#action3">Dropdown Item 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action4">Dropdown Item 2</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action5">  
              Divided Item  
            </NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
        <Button className='me-2' variant="primary" onClick={home}>Home</Button>
        <Button className='me-2' variant="success" onClick={searchHandle}>Search</Button> 
        </Offcanvas.Body>  
    </Navbar.Offcanvas>  
  </Container>  
</Navbar>  
    </>  
  );  
// Byid(setSearchName)
}  
export default Header;  
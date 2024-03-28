import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// Functional component for the navbar branding
function BrandExample() {
  return (
    <>
      {/* Navbar with branding */}
      <Navbar className="" style={{backgroundColor:"rgb(55,65,81)"}}>
        <Container>
          {/* Branding with logo and text */}
          <Navbar.Brand href="#home" style={{color:"rgb(13,202,240)",fontSize:"2rem"}}>
            <img
              alt=""
              src="./contactLogo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              style={{marginRight:"5px"}}
            />{' '}
            Contact App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;

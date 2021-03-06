import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
function Navbar_component()
{


  const MyActiveClass=(path)=>
  {
    if(window.location.pathname==path)
     {
       return "text-white";
     }
     else
     {
       return "text-black";
     }
  }
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="/">Aditya MyShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link  className={MyActiveClass("/") } href="/">Home</Nav.Link>
      <Nav.Link  className={MyActiveClass("/login") }href="/login">Login</Nav.Link>
      <Nav.Link className={MyActiveClass("/register")} href="/register">Register</Nav.Link>
      <Nav.Link className={MyActiveClass("/mycart")} href="/mycart">My Cart</Nav.Link>
      
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    );
}
export default Navbar_component;
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="" variant="" className='header'>
  <Container>
  <Navbar.Brand href="#home" className='fw-bold text-info logo'> <span className='white'>Food</span> Soft </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className='bg-dark text-white'/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navigation-menu">
      <Nav.Link as={Link} to="/home" className='mx-2 fw-bold text-white '>Home</Nav.Link>
      <Nav.Link as={Link} to="/about" className='mx-2 fw-bold text-white'>About</Nav.Link>
      <Nav.Link as={Link} to="/products" className='mx-2 fw-bold text-white'>Our Products</Nav.Link>
      <Nav.Link as={Link} to="/blogs" className='mx-2 fw-bold text-white'>Blogs</Nav.Link>
      <Nav.Link as={Link} to="/services" className='mx-2 fw-bold text-white'>Services</Nav.Link>
      <Nav.Link as={Link} to="/contact" className='fw-bold text-white'>Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
    
    {
      admin &&  <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3 text-white'>Admin Dashboard</Nav.Link>
    }
       
        

     {
      !admin && user.email &&
      <Nav.Link as={Link} to="/dashboard" className='fw-bold pt-3 text-white'>User Dashboard</Nav.Link>
        } 
    
      { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <i class="fa-solid fa-user pe-2 text-info"></i><b className='text-white'>Login</b>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="">
          <Button onClick={logout} className='btn btn-dark  text-white fw-bol px-4 pe-4'><i class="fa-solid fa-user pe-2"></i>LogOut</Button>
          </Nav.Link>

          } 
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;
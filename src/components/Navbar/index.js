import React from 'react'; 
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'; 
import { FaBars } from 'react-icons/fa'; 

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
              <NavbarContainer>
                  <NavLogo>Borderless App</NavLogo>  
                    <MobileIcon onClick={toggle}>
                        <FaBars /> 
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projectManagement'>Project Management</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='coreFeatures'>Core Features</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='tools'>Tools</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='download'>Download</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team'>Team</NavLinks>
                        </NavItem>
                    </NavMenu> 
              </NavbarContainer>  
            </Nav>
        </>
    )
}

export default Navbar; 

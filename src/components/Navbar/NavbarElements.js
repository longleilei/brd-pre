import styled from 'styled-components'; 
//use aliasing 
import { Link as LinkR } from 'react-router-dom'; 
import { Link as LinkScroll } from 'react-scroll'; 

export const Nav = styled.nav`
    background: #000; 
    height 100px;
    display: flex; 
    justify-coontent: center; 
    align-items: center; 
    font-size: 1rem; 
    position: sticky; 
    top: 0; 
    z-index: 10; 


    @media screen and (max-width: 960px){
        transition: 0.8s all ease; 
    }
`

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    height: 80px; 
    z-index: 1; 
    width: 100%; 
    padding: 0 14px; 
    max-width: 1100px; 
`
//not styled. because NavLogo 
//should navigate to 1page and router navigates to signup page
export const NavLogo = styled(LinkR)`
    color: #fff; 
    justify-self: flex-start; 
    cursor: pointer; 
    font-family: 'Cousine'; 
    font-size: 1.5rem; 
    display: flex; 
    align-items: center; 
    margin-left: 24px; 
    font-weight: bold; 
    text-decoration: none;
`; 

export const MobileIcon = styled.div`
    display: none; 

    @media screen and (max-width:768px){
        display: block; 
        position: absolute; 
        top: 20px; 
        right: 20px; 
        transform: translate(-100, 60%); 
        font-size: 2rem; 
        cursor: pointer; 
        color:#fff; 
    }
`; 

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center; 
    list-style: none; 
    text-align: center; 
    margin-right: -22px;
    margin-top: 1rem;  
     

    @media screen and (max-width: 768px){
        display: none; 
    }
`; 

export const NavItem = styled.li`
    height: 100px; 
`; 

export const NavLinks = styled(LinkScroll)`
    color: #fff; 
    display: flex; 
    align-items: center; 
    text-decoration: none; 
    padding: 0 1rem; 
    height: 100%; 
    cursor: pointer; 
    font-family: 'Cousine'; 
    font-size: 1.2rem; 
    outline: none; 

    &.active{
        border-bottom: 3px solid #01bf71; 
    }
`; 


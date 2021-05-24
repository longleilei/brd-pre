import React from 'react'; 
import { 
        SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper,  
        SidebarMenu,
        SidebarLink
     } from './SidebarElements'; 

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={ toggle }>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='projectManagement'onClick={toggle} >Project Management</SidebarLink>
                    <SidebarLink to='methodology' onClick={toggle}>Core Features</SidebarLink>
                    <SidebarLink to='tools' onClick={toggle}>Tools</SidebarLink>
                    <SidebarLink to='download' onClick={toggle}>Download</SidebarLink>
                    <SidebarLink to='team' onClick={toggle}>Team</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar; 

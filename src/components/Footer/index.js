import React from 'react';
import { FaRegSmileBeam  } from 'react-icons/fa';

import { FooterContainer, FooterCaption, FooterWrap,  FooterLinkItems, FooterLink } from './FooterElements'; 

const Footer = () => {
    return (
        <FooterContainer>
            <FooterCaption>Thanks for visiting our project webpage! <FaRegSmileBeam/></FooterCaption>
            {/* <FooterWrap>
                <FooterLinkItems>
                    <FooterLink to="/about">About Us</FooterLink>
                    <FooterLink to="/projectManagement">Project Management</FooterLink>
                    <FooterLink to="/coreFeatures">Core Features </FooterLink>
                    <FooterLink to="/tools">Tools</FooterLink>
                    <FooterLink to="/download">Download</FooterLink>
                    <FooterLink to="/team">Team</FooterLink>
                </FooterLinkItems>
            </FooterWrap>    */}
        </FooterContainer>
    )
}

export default Footer; 

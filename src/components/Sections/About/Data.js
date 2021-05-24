import about from '../../../images/about.jpg'; 
import blockchain from '../../../images/blockchain.jpg'; 
import exportpic from '../../../images/exportpic.png'; 


export const AboutObject = {
    id: 'about', 
    lighBg: false,
    lightText: false, 
    lightTextDesc: false, 
    greenTopLine: true, 
    topLine: 'What is our project about?', 
    headline: 'Cross-Border Transfers, Ethereum & OMG Network ', 
    description: 'Borderless is a B2C cross-border transfer and foreign exchange application developed using OMG Network, a Layer-2 solution on top of Ethereum blockchain', 
    imgStart: true,
    link: false, 
    btn: false, 
    img: about, 
    alt: 'Intro', 
    dark: true, 
    primary: true, 
    darkText: false
}; 

export const ProjectManagementObject = {
    id: 'projectManagement', 
    lightBg: true,
    lightText: true, 
    lightTextDesc: true, 
    btn: false, 
    greenTopLine: false, 
    topLine: 'Our Project Management', 
    headline: '', 
    description: 'Little steps towards the goal: from Detailed Proposal to Final Report, from doing a research on Blockchain to our React application...\n Check our management platform to learn more about our learning process',
    link: true, 
    imgStart: false,
    img: blockchain, 
    alt: 'Blockchain', 
    dark: true, 
    primary: true, 
    darkText: true
}; 


export const Download = {
    id: 'download', 
    lightBg: true,
    lightText: true, 
    lightTextDesc: true, 
    btn: true, 
    greenTopLine: false, 
    topLine: 'Download Section', 
    headline: 'Download our Final Report', 
    imgStart: true,
    img: exportpic, 
    link: false, 
    alt: 'Report', 
    dark: true, 
    primary: true, 
    darkText: false
}; 

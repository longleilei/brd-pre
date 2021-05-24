import React, { useState } from 'react'; 
import Sidebar from '../components/Sidebar'; 
import Navbar from '../components/Navbar'; 
import Wallpaper from '../components/Wallpaper';
import About from '../components/Sections/About'; 
import Methodology from '../components/Methodology'; 
import { AboutObject, ProjectManagementObject, Download } from '../components/Sections/About/Data'; 
import Team from '../components/Team'; 
import Footer from '../components/Footer'; 


const Home = () => {
 
    const [ isOpen, setIsOpen ] = useState(false); 

    const toggle = () => {
        setIsOpen(!isOpen)
    }; 
    

 

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} /> 
            <Wallpaper />
            <About {...AboutObject}/>
            <About {...ProjectManagementObject}/>
            <Methodology />
            <About {...Download}/>
            <Team/>
            <Footer/>
        </>
    )
}

export default Home; 

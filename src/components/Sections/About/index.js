import React, { useState } from 'react';
import axios from 'axios'; 
import { appF } from '../../../base'; 
import {
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1, 
    Column2,
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    Button,
    ImgWrap, 
    Img, 
    LinkDiv
} from './AboutElements'; 


const About = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, btn, link, greenTopLine}) => {

    const [hover, setHover] = useState(false); 
    const db = appF.firestore(); 

    const onHover = () => {
        setHover(!hover); 
    }

    // const instance = axios.create({ 
    //     baseURL: 'gs://presentation-app-5a85a.appspot.com'
    // }); 

    const handleDownload = async () => {
        const storageRef = appF.storage().ref(); 
        const url = await storageRef.child('/FinalReportDownload.pdf').getDownloadURL(); 
        //console.log(url); 
        try{
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
            const blob = xhr.response;
        };
            xhr.open('GET', url);
            xhr.send();
            window.open('https://firebasestorage.googleapis.com/v0/b/presentation-app-5a85a.appspot.com/o/FinalReportDownload.pdf?alt=media&token=d6912f7c-cd79-458c-9b2b-9152e14035bb');

        } catch(error){
            console.log('Unsuccessful download'); 
        }
        
    }
    
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine greenTopLine={greenTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <LinkDiv link={link} text-decoration="none" color="white">
                                    <a href="https://longleilei.github.io/deliverables/#/" >Management Platform</a>
                                </LinkDiv>
                                <BtnWrap btn={btn}>
                                    <Button onMouseEnter={onHover} onMouseOver={onHover} onClick={handleDownload}>Download</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About; 

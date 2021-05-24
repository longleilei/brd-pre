import styled from 'styled-components'; 

export const WallpaperContainer = styled.div`
    background: #0c0c0c; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    padding: 0 30px; 
    height: 800px; 
    position: relative; 
    z-index: 1; 
`; 

export const Background = styled.div`
    position: absolute; 
    top: 0; 
    right: 0; 
    bottom: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    overflow: hidden; 
`; 

export const VideoBg = styled.video`
    width: 100%; 
    height: 100%; 
    -o-object-fit: cover; 
    object-fit: cover; 
    background: #232a34; 
`; 

export const Content = styled.div`
    z-inex: 3; 
    max-width: 1200px; 
    position: absolute; 
    padding: 8px 24px; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`; 

export const ContentTitle = styled.h1`
    font-family: 'Cousine'; 
    font-size: 50px; 
`; 

export const ContentDesc = styled.p`
    font-family: 'Roboto';
    font-size: 30px; 
    text-align: center;
    margin-top: 24px; 

    //include media queries if need to resize font 
`; 


import styled from 'styled-components'; 

export const AboutContainer = styled.div`
    color: #fff; 
    background: ${({lightBg}) => (lightBg ? '#b2b2b2' : '#f4e1d2' )}; 

    @media screen and (max-width: 768px) {
        padding: 100px 0; 
        min-height: 1300px; 
    }

    @media screen and (max-width: 1200px) {
        min-height: 1300px; 
    }

`; 

export const AboutWrapper = styled.div`
    display: grid; 
    z-index: 1; 
    height: 860px; 
    margin-right: auto; 
    margin-left: auto; 
    padding: 0 24px; 

`;

export const AboutRow = styled.div`
    display: grid; 
    grid-auto-columns: minmax(auto, 1fr);  
    align-items: center; 
    grid-template-areas: ${({ imgStart }) => 
    (imgStart ? `'col2 col1'` : `'col1 col2'`)}; 

    

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => 
        (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2' `)}
    }
    

    

`; 

export const Column1 = styled.div`
    padding: 0 100px; 
    grid-area: col1;

    @media screen and (min-width: 1600px) {
        padding: 0 300px; 
    }
    
`; 

export const Column2 = styled.div`
    
    margin-bottom: 15px; 
    grid-area: col2; 

    @media screen and (min-width: 1600px){
        padding: 0 150px;
    }
`; 

export const TextWrapper = styled.div`
    width: 400px; 
    padding-bottom: 60px; 
`; 

export const TopLine = styled.div`

    color: ${({greenTopLine}) => ( greenTopLine ? '#01bf71': '#f7786b')};
    font-family: 'Cousine'; 
    font-size: 22px; 
    font-weight: bold;
    line-height: 26px; 
    font-weight: 700;
    letter-spacing: 1.4px; 
    text-transform: uppercase; 
    margin-bottom: 16px; 
`; 

export const Heading = styled.h1`
    margin-bottom: 24px; 
    font-size: 35px; 
    line-height: 1.1; 
    font-weight: 600; 
    font-family: 'Roboto'; 
    color: ${({lightText}) => ( lightText ? '#f7f8fa': '#010606')};
   

    @media screen and (max-width: 480px){
        font-size: 32px; 
    }
`; 

export const Subtitle = styled.p`
    max-width: 400px; 
    margin-bottom: 25px; 
    font-size: 23px; 
    font-weight: 700; 
    font-family: 'Roboto'; 
    line-height: 28px; 
    color: ${({ darkText }) => ( darkText? '#010606' : '#b2b2b2' )}; 
`; 

export const LinkDiv = styled.div`
    visibility: ${({ link }) => ( link ? 'flex' : 'hidden' )}; 
    font-size: 25px;
`; 



export const BtnWrap = styled.div`
    display: flex; 
    justify-content:flex-start; 
    visibility: ${({ btn }) => ( btn ? 'flex' : 'hidden' )}
`; 

export const Button = styled.div`
    padding: 1rem 6rem; 
    background-color: #fff; 
    font-size: 20px;
    color: black; 
    border-radius: 50px; 
    outline: none; 
    border: none; 
    cursor: pointer; 
    align-items: center; 
    transition: all 0.2s ease-in-out; 

    &:hover{
        transition: all 0.2s ease-in-out; 
        background-color: #01BF71; 
    }
`; 

export const ImgWrap = styled.div`
    height: 100%;
    width: 100%; 

    @media screen and (max-width: 1200px){
        width: 700px; 
    }

    @media screen and (max-width: 768px){
        width: 100%; 
    }
      
`;

export const Img = styled.img`
    width: 700px; 
    padding-right: 0; 
    border-radius: 250px;  

    @media screen and (max-width: 1200px) {
        width: 500px;  
    }

    @media screen and (max-width: 768px){
        max-width: 80%;  
    }

    
`; 



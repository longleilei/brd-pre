import styled from 'styled-components'; 


export const TeamContainer = styled.div`
    color: #fff; 
    background: #50394c; 
    height: 1200px; 
    

    @media screen and (max-width: 1100px) {
        min-height: 2000px; 
        
    }

    @media screen and (max-width: 768px) {
        height: 1600px; 
    }
`; 

export const TeamCaption = styled.div`

    font-size: 4.5rem; 
    color: #fff; 
    margin-bottom: 64px; 
    text-align: center; 
    padding-top: 2rem; 

    @media screen and (max-width: 480px){
        font-size: 2rem; 
    }

`; 

export const TeamRow = styled.div`
    display: flex; 
    flex-direction: row; 
    margin-right: 2rem; 
    //margin-left: 2rem; 

    @media screen and (max-width: 1100px){
        display: flex; 
        flex-direction: column;    

    }

    
    
`; 

export const Column1 = styled.div`
    width: 35%; 
`; 

export const CarouselWrapper = styled.div`
    width: 600px; 
    height:600px; 
    margin-left: 10%; 
    
    @media screen and (max-width: 1600px){
        width: 400px; 
        height:400px; 
        //margin-left: 15%; 
    }
`; 

export const Column2 = styled.div`

    width: 55%; 
    display: flex; 
    flex-direction: row; 


    @media screen and (max-width: 1100px) {
        padding-top: 200px; 
        padding-left: 70px; 
    }
    
`;

export const TextWrapper = styled.div`
    border-radius: 30px; 
    text-align: center; 
    display: flex; 
    flex-direction: row; 

    @media screen and (max-width: 1100px) {
        display: flex; 
        flex-direction: column; 
    }
`; 

export const CarouselCaptionDiv= styled.div`
    background: black; 
    
`; 

export const TextCard = styled.div`

    border: 10px solid #ffef96; 
    border-radius: 20px; 
    box-shadow: 20px 20px rgba(0,0,0,.15);
    height: 520px; 
    width: 370px; 
    background: #F8F8F8; 
    color: #625750; 
    padding: 3rem 1rem 0 1rem; 
    margin-left: 1rem; 
    margin-right: 2rem; 
    text-align: center; 
    font-size: 19px; 
    font-style: italic;     
    
    @media screen and (max-width: 1100px) {
        width: 500px;
        height: 450px; 
    }


`; 

export const Caption = styled.div`
    width: 320px; 

    @media screen and (max-width: 1100px) {
        width: 450px; 
    }
    
`; 



export const Author = styled.div`
    margin-top: 1rem; 
    text-align:right; 
`; 

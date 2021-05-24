import styled from 'styled-components'; 

export const MethodContainer = styled.div`
    height: 800px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;  
    background: #ffef96; 
    

    @media screen and (max-width: 768px){
        min-height: 1500px; 
    }

`; 

export const MethodWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-gap: 70px; 
    padding 0 50px; 

    @media screen and (max-width: 1000px){
        grid-template: 1fr 1fr; 
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr; 
        padding: 0 20px; 
    }
`;

export const MethodCard = styled.div`
    background: #F8F8F8; 
    height: 500px;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    border-radius: 10px; 
    max-height: 640px; 
    padding: 30px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.2); 
    transition: all 0.2s ease-in-out;
    
    &:hover{
        transform: scale(1.15); 
        transition:all 0.2s ease-in-out; 
        cursor: pointer; 
    }
`; 

export const MethodIcon = styled.img`
    height: 70px; 
    width: 70px; 
    margin-bottom: 10px; 
`;

export const MethodH1 = styled.h1`
    font-size: 4.5rem; 
    color: #fff; 
    margin-bottom: 64px; 

    @media screen and (max-width: 480px){
        font-size: 2rem; 
    }
`;

export const MethodH2 = styled.h2`
    font-size: 2rem; 
    margin-bottom: 10px; 
    text-align: center; 
`; 

export const MethodP = styled.p`
    font-size: 1.5rem; 
    text-align: center; 
`;


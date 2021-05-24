import React from 'react'; 
import { MethodContainer, MethodH1, MethodWrapper, MethodCard, MethodIcon, MethodH2, MethodP } from './MethodologyElements';
import blockchainIcon from '../../images/blockchainIcon.jpg'; 
import fullstackIcon from '../../images/fullstackIcon.png'; 
import crossborderIcon from '../../images/crossborderIcon.png'; 

const Methodology = () => {
    return (
        <MethodContainer id="coreFeatures">
            <MethodH1>Core Features</MethodH1>
            <MethodWrapper>
                <MethodCard>
                    <MethodIcon src={blockchainIcon}/>
                    <MethodH2>Blockchain</MethodH2>
                    <MethodP>Based on Ethereum blockchain, 
                    we are implementing Layer-2 Solution OMG Network 
                    in our actual cross-border app. 
                    We are also using Truffle library to create our own ERC-20 token and use it inside of our Wallet</MethodP>
                </MethodCard>
                <MethodCard>
                    <MethodIcon src={fullstackIcon}/>
                    <MethodH2>Front-end and Back-end Development</MethodH2>
                    <MethodP>In order to make our vision come true, 
                        we had to change OMG Wallet React app for our own UI and add NodeJS-MongoDB for authentification and secure browsing</MethodP>
                </MethodCard>
                <MethodCard>
                    <MethodIcon src={crossborderIcon}/>
                    <MethodH2>Cross-Border Remittance</MethodH2>
                    <MethodP>Workign with different currencies has prompt us to develop methods of currency-token conversion and exchange rates adjustments </MethodP>
                </MethodCard>
            </MethodWrapper>
        </MethodContainer>
    )
}

export default Methodology; 

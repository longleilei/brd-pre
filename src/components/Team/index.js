import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';

import mypic from '../../images/bear.jpg'; 
import mypic2 from '../../images/hksgg45.jpg'; 
import mypic3 from '../../images/udish637.png';
import { TeamContainer, TeamRow, Column1, Column2, TextWrapper, Caption, Author, CarouselWrapper, CarouselCaptionDiv, TextCard, TeamCaption } from './TeamElements'; 


const Team = () => {
    return (
        <TeamContainer id='team'> 
            <TeamCaption>Our Team</TeamCaption>
            <TeamRow>
                <Column1>
                    <CarouselWrapper>
                    <Carousel>
                        <Carousel.Item interval={5000} >
                            <img
                                className="d-block w-100"
                                src={mypic}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <CarouselCaptionDiv> */}
                                    <h3>Anastasia Sukhovii</h3>
                                {/* </CarouselCaptionDiv> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src={mypic3}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Siyao Zheng</h3>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="d-block w-100"
                                src={mypic2}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Zicheng Wang</h3>
                                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </CarouselWrapper>
                
                </Column1>
                <Column2>
                    <TextWrapper>
                        <TextCard>
                            <Caption>As an expat living in Shanghai and later in Hong Kong, 
                                I noticed that people living abroad always need to send or recieve money. 
                                Usually, if it's not a big amount of money, 
                                expats try to avoid SWIFT or Western Union due to the high fees a slow processing time. 
                                Instead, they look for someone from WeChat 
                                or any other social media who they can trust and  
                                who will help them to make the transfer.
                                This motivated me to study this problem and 
                                look for an answer to how it can be solved.  </Caption>
                            <Author> - Anastasia</Author>

            
                        </TextCard>
                        <TextCard>
                            <Caption>Before I started this capstone project,
                                 I had little knowledge about blockchain; 
                                 it is completely a new world for me. 
                                 After months of work and continuous accumulation, 
                                 I learned many new things in blockchain, 
                                 and what makes it popular around the world 
                                  and how it makes transactions decentralized.
                                   In the future, I hope I can keep working with blockchain.</Caption>
                            <Author> - Siyao</Author>
                        </TextCard>
                        
                    </TextWrapper>
                </Column2>

            </TeamRow>
        </TeamContainer>
    )
}

export default Team; 

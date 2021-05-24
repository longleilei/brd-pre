import React from 'react'; 
import Video from '../../video/video.mp4'; 
import { 
    WallpaperContainer, 
    Background, 
    VideoBg, 
    Content,
    ContentTitle,
    ContentDesc
} from './WallpaperElements'; 


const Wallpaper = () => {
    return (
        <WallpaperContainer>
            <Background>
                <VideoBg autoPlay loop muted src={Video} type='/video/mp4'/>
            </Background>
            <Content>
                <ContentTitle>Borderless App</ContentTitle>
                <ContentDesc> Currency Wallet for Cross-Border Transfers</ContentDesc>
            </Content>
        </WallpaperContainer>
    )
}

export default Wallpaper; 
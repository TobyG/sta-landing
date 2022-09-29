import React, {useState} from 'react'
import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './HeroElements'
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
  
    return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome to </HeroH1>
            <HeroP>decentralized freelancing</HeroP>
            <HeroBtnWrapper>
                <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true' dark='true'>
                    Open App {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
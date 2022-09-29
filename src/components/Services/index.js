import React from 'react';
import Icon1 from '../../images/pic1.png'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
             <ServicesCard>
                <ServicesIcon  src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We hep reudce fees and increase revenue.</ServicesP>
            </ServicesCard>
        </ServicesWrapper> 
        
    </ServicesContainer>
    </>
  )
}

export default Services
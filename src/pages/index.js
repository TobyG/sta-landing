import React, {useState} from 'react'
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import { Navbar } from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
      console.log("onToggle()");
        setIsOpen(!isOpen);
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle} />
    <HeroSection/>
    <InfoSection {...homeObjOne} />
    <InfoSection {...homeObjTwo} />
    <Services></Services>
    <Faq></Faq>
    <Footer></Footer>
    </>
  )
}

export default Home
import React from 'react'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                {/*<FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About us  </FooterLinkTitle>
                            <FooterLink to="/signin">Signin</FooterLink>
                            <FooterLink to="/signin">Signin</FooterLink>
                            <FooterLink to="/signin">Signin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>*/}
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Solteria
                        </SocialLogo>
                        <WebsiteRights>Solteria &copy; {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/solteria" target="_blank">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank">
                                <FaTelegram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    </>
  )
}

export default Footer
import React from 'react'
import { FaDiscord, FaTelegram, FaTwitter } from 'react-icons/fa'
import { ContractAddress, ContractTitle, FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Solteria
                        </SocialLogo>
                        {/*<WebsiteRights>Solteria &copy; {new Date().getFullYear()}</WebsiteRights>*/}
                        <SocialIcons>
                            <SocialIconLink href="//discord.com/invite/6HzBDrEWXz" target="_blank">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com/solteria_xyz" target="_blank">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank">
                                <FaTelegram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                    <ContractTitle>STA Contract-Address: &nbsp;</ContractTitle>
                    <ContractAddress>0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5</ContractAddress>

                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        
    </>
  )
}

export default Footer
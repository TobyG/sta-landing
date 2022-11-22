import React from 'react'
import { Heading, TopLine } from '../InfoSection/InfoElements'
import { Answer, FaqContainer, FaqWrapper, Question, TextWrapper } from './FaqElements'

const Faq = () => {
  return (
    <>
        <FaqContainer id='faq'>
        <FaqWrapper>
            
                    <TextWrapper>
                        <TopLine>FAQ</TopLine>
                        <Heading lightText={false}>Questions?</Heading>
                        {/*<Subtitle darkText={darkText}>{description}</Subtitle>*/}
                        <Question>
                            How long does it take for rewards to be paid out?
                        </Question>
                        <Answer>
                            As soon as the employer accepts the submission, funds can be redeemed.
                        </Answer>
                        <Question>
                            This is another question?
                        </Question>
                        <Answer>
                           This is the answer to the above question.
                        </Answer>
                    </TextWrapper>
              
        </FaqWrapper>
    </FaqContainer>
    </>
  )
}

export default Faq
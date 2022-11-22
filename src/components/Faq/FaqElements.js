import styled from 'styled-components';

export const FaqContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const FaqWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 460px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    padding: 70px;
`;

export const TextWrapper = styled.div`
    max-width: 840px;
    padding-top: 0;
    padding-bottom: 60px;
    text-align: center;
`;

export const Question = styled.h1`
    margin-bottom: 24px;
    font-size: 28px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;
    text-align: start
   
`;

export const Answer = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    text-align: start;
    color: #010606;
`;
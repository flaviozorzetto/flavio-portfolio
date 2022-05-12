import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import progGif from '../assets/imgs/programming.gif';

import ContentWrapper from '../components/ContentWrapper';

const AboutContainer = styled.div`
   width: 100%;
   height: 100%;
   color: white;
   display: flex;
   gap: 5rem;
   justify-content: space-between;

   animation: fadeIn 2s ease-out;

   @keyframes fadeIn {
      0% {
         display: none;
         opacity: 0;
      }

      1% {
         display: flex;
      }

      100% {
         opacity: 1;
      }
   }
`;

const TextWrapper = styled.div`
   width: 50%;
   display: flex;
   justify-content: center;
   flex-direction: column;
   font-size: 18px;

   h2 {
      margin-bottom: 1rem;
      font-size: 1.8em;
      text-align: center;
   }

   p {
      font-size: 1em;
      text-align: justify;

      @media screen and (max-width: 395px) {
         text-align: center;
      }
   }

   p:not(:last-child) {
      margin-bottom: 2rem;
   }

   @media screen and (max-width: 1000px) {
      font-size: 16px;
   }

   @media screen and (max-width: 768px) {
      width: 100%;
   }

   @media screen and (max-width: 500px) {
      font-size: 14px;
   }
`;

const ImgWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 50%;

   img {
      width: 100%;
      border-radius: 100%;
   }

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export default () => {
   const { t } = useTranslation();

   return (
      <ContentWrapper>
         <AboutContainer>
            <TextWrapper>
               <h2>{t('about_title')}</h2>
               <p>{t('about_01')}</p>
               <p>{t('about_02')}</p>
            </TextWrapper>
            <ImgWrapper>
               <img src={progGif} alt="gif programação" />
            </ImgWrapper>
         </AboutContainer>
      </ContentWrapper>
   );
};

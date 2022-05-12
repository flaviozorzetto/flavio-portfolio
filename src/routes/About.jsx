import styled from 'styled-components';
import progGif from '../assets/imgs/programming.gif';

import ContentWrapper from '../components/ContentWrapper';

const AboutContainer = styled.div`
   width: 100%;
   height: 100%;
   color: white;
   display: flex;
   gap: 2rem;
   justify-content: space-between;

   animation: fadeIn 2s ease-in-out;

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
   display: flex;
   justify-content: center;
   flex-direction: column;
   font-size: 1rem;

   h2 {
      margin-bottom: 2rem;
      font-size: 2rem;
      text-align: center;
   }

   p {
      font-size: 1.2rem;
   }

   p:not(:last-child) {
      margin-bottom: 2rem;
   }
   width: 50%;
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
`;

export default () => {
   return (
      <ContentWrapper>
         <AboutContainer>
            <TextWrapper>
               <h2>Sobre mim</h2>
               <p>
                  Meu nome é Flavio Esrenko Zorzetto, sou um desenvolvedor
                  brasileiro, apaixonado por programação, que começou estudando
                  back-end criando APIs utilizando node-js, desenvolvendo e
                  aprimorando a habilidade de lógica de programação.
               </p>
               <p>
                  E que está aprendendo front-end para se tornar cada vez mais
                  um full stack consistente, onde desenvolvo aplicações WEB
                  utilizando o conhecimento de HTML, CSS, JS em conjunto com
                  React, Sass e styled-components, para criar aplicações com
                  foco na fluidez e de fácil manutenção.
               </p>
            </TextWrapper>
            <ImgWrapper>
               <img src={progGif} alt="gif programação" />
            </ImgWrapper>
         </AboutContainer>
      </ContentWrapper>
   );
};

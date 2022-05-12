import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper';
import parse from 'html-react-parser';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   height: 100%;
   width: 100%;
   align-items: center;
   gap: 2rem;

   @media screen and (max-width: 645px) {
      flex-direction: column;
      justify-content: center;

      & > div {
         width: 100%;
      }

      & > div:nth-child(2) {
         width: 80%;
      }
   }
`;

const TextWrapper = styled.div`
   color: white;
   display: flex;
   flex-direction: column;
   gap: 30px;
   font-size: 20px;
   width: 50%;
   transition: font-size 0.3s ease-in-out;

   @media screen and (max-width: 860px) {
      font-size: 16px;
   }

   @media screen and (max-width: 645px) {
      font-size: 12px;
   }

   p {
      text-align: left;
      font-size: 1.5em;
   }

   h1 {
      text-align: left;
      font-size: 2em;
   }

   ${props => {
      return props.finishedWriting
         ? `animation: fadeInFromNone 2s ease-out;`
         : '';
   }}

   @keyframes fadeInFromNone {
      0% {
         display: none;
         opacity: 0;
      }

      1% {
         display: block;
         opacity: 0;
      }

      100% {
         display: block;
         opacity: 1;
      }
   }
`;

const ImgContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;

   img {
      border-radius: 100%;
      width: 100%;

      animation: fadeInFromNone 1.5s ease-out;

      @keyframes fadeInFromNone {
         0% {
            display: none;
            opacity: 0;
         }

         1% {
            display: block;
            opacity: 0;
         }

         100% {
            display: block;
            opacity: 1;
         }
      }
   }
`;

const WrittingText = styled.p`
   font-size: 1.5rem;
   font-family: 'Source Code Pro', monospace;
   color: white;
   word-break: break-all;
`;

export default props => {
   return (
      <ContentWrapper>
         <Container>
            <TextWrapper finishedWriting={props.finished}>
               {props.finished ? (
                  parse(props['text_1'])
               ) : (
                  <WrittingText>{props['text_1']}</WrittingText>
               )}
               {props.finished ? (
                  parse(props['text_2'])
               ) : (
                  <WrittingText>{props['text_2']}</WrittingText>
               )}
               {props.finished ? (
                  parse(props['text_3'])
               ) : (
                  <WrittingText>{props['text_3']}</WrittingText>
               )}
            </TextWrapper>
            <ImgContainer>
               {props.finished && props.avatarFinished ? (
                  parse(props.avatar)
               ) : (
                  <WrittingText>{props.avatar}</WrittingText>
               )}
            </ImgContainer>
         </Container>
      </ContentWrapper>
   );
};

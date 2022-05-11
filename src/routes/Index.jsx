import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper';
import parse from 'html-react-parser';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   height: 100%;
   width: 100%;
   align-items: center;
`;

const TextWrapper = styled.div`
   color: white;
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 30px;

   p {
      font-size: 2rem;
      width: 75%;
   }

   h1 {
      font-size: 2.5rem;
   }

   width: 60%;

   ${props => {
      return props.finishedWriting
         ? `animation: fadeInFromNone 1s ease-out;`
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
   height: 400px;
   width: 40%;
   align-items: center;
   justify-content: center;

   img {
      border-radius: 100%;
      height: 100%;

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
   font-size: 2rem;
   font-family: 'Source Code Pro', monospace;
   color: white;
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

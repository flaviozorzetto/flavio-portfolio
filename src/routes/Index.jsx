import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper';
import parse from 'html-react-parser';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   height: 100%;
   align-items: center;
`;

const TextWrapper = styled.div`
   color: white;
   position: relative;

   p {
      font-size: 1.5rem;
      margin-bottom: 25px;
   }

   h1 {
      margin-bottom: 25px;
      font-size: 2rem;
   }

   width: 45%;

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

const WrittingText = styled.p`
   font-size: 1rem;
   font-family: 'Source Code Pro', monospace;
`;

export default props => {
   return (
      <ContentWrapper>
         <Container>
            <TextWrapper finishedWriting={props.ptFinished}>
               {props.ptFinished ? (
                  parse(props['pt_text_1'])
               ) : (
                  <WrittingText>{props['pt_text_1']}</WrittingText>
               )}
               {props.ptFinished ? (
                  parse(props['pt_text_2'])
               ) : (
                  <WrittingText>{props['pt_text_2']}</WrittingText>
               )}
               {props.ptFinished ? (
                  parse(props['pt_text_3'])
               ) : (
                  <WrittingText>{props['pt_text_3']}</WrittingText>
               )}
            </TextWrapper>
         </Container>
      </ContentWrapper>
   );
};

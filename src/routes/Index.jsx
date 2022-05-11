import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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

const timeout = ms => {
   return new Promise((res, rej) => {
      setTimeout(() => {
         res();
      }, ms);
   });
};

async function buildQueue(queueArr, setFinished) {
   for (let i = 0; i < queueArr.length; i++) {
      await buildText(queueArr[i][0], queueArr[i][1]);
   }
   await timeout(400);
   setFinished(true);
}

async function buildText(text, setText) {
   let fragText = text.split('');
   let totalLength = fragText.length;
   let i = 0;
   let buildingText = [];

   while (buildingText.length != totalLength) {
      let text = await recursiveText(fragText, buildingText, i);
      let additional = buildingText.length == totalLength ? '' : '|';
      setText(text + additional);
      i++;
   }
}

function recursiveText(fullTextArr, currentArr, i) {
   return new Promise((res, rej) => {
      currentArr.push(fullTextArr[i]);
      setTimeout(() => {
         res(currentArr.join(''));
      }, 25);
   });
}

export default props => {
   const { t } = useTranslation();
   const [text_1, setText_1] = useState('');
   const [text_2, setText_2] = useState('');
   const [text_3, setText_3] = useState('');
   const [finished, setFinished] = useState(false);

   const reset = () => {
      setFinished(false);
      setText_1('');
      setText_2('');
      setText_3('');
   };

   useEffect(() => {
      let rendering = setTimeout(() => {
         reset();
         buildQueue(
            [
               [`<p> ${t('Hello')} </p>`, setText_1],
               [
                  `<h1> ${t('preName')} Flavio Esrenko Zorzetto </h1>`,
                  setText_2,
               ],
               [`<p> ${t('indexText')} </p>`, setText_3],
            ],
            setFinished
         );
      }, 500);
      return () => {
         clearTimeout(rendering);
      };
   }, [t]);

   return (
      <ContentWrapper>
         <Container>
            <TextWrapper finishedWriting={finished}>
               {finished ? (
                  parse(text_1)
               ) : (
                  <WrittingText>{text_1}</WrittingText>
               )}
               {finished ? (
                  parse(text_2)
               ) : (
                  <WrittingText>{text_2}</WrittingText>
               )}
               {finished ? (
                  parse(text_3)
               ) : (
                  <WrittingText>{text_3}</WrittingText>
               )}
            </TextWrapper>
         </Container>
      </ContentWrapper>
   );
};

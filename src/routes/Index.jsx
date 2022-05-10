import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ContentWrapper from '../components/ContentWrapper';

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   height: 100%;
   align-items: center;
`;

const TextWrapper = styled.div`
   color: white;

   p {
      font-size: 1.5rem;
      margin-bottom: 25px;
   }

   h1 {
      margin-bottom: 25px;
      font-size: 2rem;
   }

   width: 45%;
`;

async function buildQueue(queueArr) {
   for (let i = 0; i < queueArr.length; i++) {
      await buildText(queueArr[i][0], queueArr[i][1]);
   }
   queueArr.forEach(e => {
      e[1](<p>{e[0]}</p>);
   });
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
      }, 10);
   });
}

export default props => {
   const { t } = useTranslation();
   const [text_1, setText_1] = useState('');
   const [text_2, setText_2] = useState('');
   const [text_3, setText_3] = useState('');

   useEffect(() => {
      let rendering = setTimeout(() => {
         buildQueue([
            [`<p> ${t('Hello')} </p>`, setText_1],
            [`<h1> ${t('preName')} Flavio Esrenko Zorzetto </h1>`, setText_2],
            [`<p> ${t('indexText')} </p>`, setText_3],
         ]);
      }, 500);
      return () => {
         clearTimeout(rendering);
      };
   }, [t]);

   return (
      <ContentWrapper>
         <Container>
            <TextWrapper>
               {text_1}
               {text_2}
               {text_3}
            </TextWrapper>
         </Container>
      </ContentWrapper>
   );
};

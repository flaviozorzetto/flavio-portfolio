import { Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Index from '../routes/Index';
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
   display: flex;
   height: 100%;
`;

const Container = styled.div`
   width: 100%;
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

export default () => {
   const { t, i18n } = useTranslation();
   const [pt_text_1, pt_setText_1] = useState('');
   const [pt_text_2, pt_setText_2] = useState('');
   const [pt_text_3, pt_setText_3] = useState('');
   const [ptFinished, ptSetFinished] = useState(false);

   const [en_text_1, en_setText_1] = useState('');
   const [en_text_2, en_setText_2] = useState('');
   const [en_text_3, en_setText_3] = useState('');
   const [enFinished, enSetFinished] = useState(false);

   useEffect(() => {
      let rendering = setTimeout(() => {
         buildQueue(
            [
               [`<p> ${t('Hello', { lng: 'pt' })} </p>`, pt_setText_1],
               [
                  `<h1> ${t('preName', {
                     lng: 'pt',
                  })} Flavio Esrenko Zorzetto </h1>`,
                  pt_setText_2,
               ],
               [`<p> ${t('indexText', { lng: 'pt' })} </p>`, pt_setText_3],
            ],
            ptSetFinished
         );
         buildQueue(
            [
               [`<p> ${t('Hello', { lng: 'en' })} </p>`, en_setText_1],
               [
                  `<h1> ${t('preName', {
                     lng: 'en',
                  })} Flavio Esrenko Zorzetto </h1>`,
                  en_setText_2,
               ],
               [`<p> ${t('indexText', { lng: 'en' })} </p>`, en_setText_3],
            ],
            enSetFinished
         );
      }, 500);
      return () => {
         clearTimeout(rendering);
      };
   }, []);

   useEffect(() => {
      console.log(i18n.language);

      // if (ptFinished) {
      //    pt_setText_1(`<p> ${t('Hello', { lng: 'pt' })} </p>`);
      //    pt_setText_2(
      //       `<h1> ${t('preName', { lng: 'pt' })} Flavio Esrenko Zorzetto </h1>`
      //    );
      //    pt_setText_3(`<p> ${t('indexText', { lng: 'pt' })} </p>`);
      // } else if (enFinished) {
      //    en_setText_1(`<p> ${t('Hello', { lng: 'en' })} </p>`);
      //    en_setText_2(
      //       `<h1> ${t('preName', { lng: 'en' })} Flavio Esrenko Zorzetto </h1>`
      //    );
      //    en_setText_3(`<p> ${t('indexText', { lng: 'en' })} </p>`);
      // }
   }, [t]);

   return (
      <Wrapper>
         <SideBar />
         <Container>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Index
                        pt_text_1={pt_text_1}
                        pt_text_2={pt_text_2}
                        pt_text_3={pt_text_3}
                        ptFinished={ptFinished}
                     />
                  }
               ></Route>
               <Route path="/about" element={<About />}></Route>
            </Routes>
         </Container>
      </Wrapper>
   );
};

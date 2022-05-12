import { Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import Index from '../routes/Index';
import SideBar from '../components/SideBar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import thomas from '../assets/imgs/avatar.png';

const Wrapper = styled.div`
   display: flex;
   height: 100%;
`;

const Container = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
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

   while (buildingText.length < totalLength) {
      let text = await recursiveText(fragText, buildingText, i);
      let additional = buildingText.length == totalLength ? '' : '|';
      setText(text + additional);
      i += 2;
   }
}

function recursiveText(fullTextArr, currentArr, i) {
   return new Promise((res, rej) => {
      currentArr.push(fullTextArr[i]);
      fullTextArr[i + 1] ? currentArr.push(fullTextArr[i + 1]) : null;
      setTimeout(() => {
         res(currentArr.join(''));
      }, 50);
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

   const [avatar, setAvatar] = useState('');
   const [avFinished, setAvFinished] = useState(false);

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
         buildQueue(
            [[`<img src=${thomas} alt="avatar" />`, setAvatar]],
            setAvFinished
         );
      }, 500);
      return () => {
         clearTimeout(rendering);
      };
   }, []);

   return (
      <Wrapper>
         <SideBar />
         <Container>
            <Routes>
               <Route
                  path="/"
                  element={
                     <Index
                        text_1={i18n.language == 'pt' ? pt_text_1 : en_text_1}
                        text_2={i18n.language == 'pt' ? pt_text_2 : en_text_2}
                        text_3={i18n.language == 'pt' ? pt_text_3 : en_text_3}
                        finished={
                           i18n.language == 'pt' ? ptFinished : enFinished
                        }
                        avatar={avatar}
                        avatarFinished={avFinished}
                     />
                  }
               ></Route>
               <Route path="/about" element={<About />}></Route>
            </Routes>
         </Container>
      </Wrapper>
   );
};

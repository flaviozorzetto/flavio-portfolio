import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import chevron from '../assets/svgs/chevron_right.svg';
import globe from '../assets/svgs/language.svg';
import i18next from 'i18next';
import colors from '../variables/colors.js';
import 'flag-icon-css/css/flag-icons.min.css';

const SideBar = styled.aside`
   height: 100%;
   background-color: #023535;
   color: #ffffff;
   position: relative;
   --sz: 200px;
   transition: 0.5s all;

   @media screen and (max-width: 425px) {
      --sz: 150px;
   }

   ${props =>
      props.open
         ? `
      width: var(--sz);
      animation: opening 0.6s ease-in-out;
      `
         : `
      width: 0px;
      animation: closing 0.6s ease-in-out;
         `}

   @keyframes opening {
      0% {
         width: 0px;
      }

      100% {
         width: var(--sz);
      }
   }

   @keyframes closing {
      0% {
         width: var(--sz);
      }

      100% {
         width: 0px;
      }
   }
`;

const drawer_show_kf = `
animation: drawer-show 2s;

   @keyframes drawer-show {
      0% {
         opacity: 0;
      }

      15% {
         opacity: 0;
      }

      100% {
         opacity: 1;
      }
   }`;

const Wrapper = styled.div`
   position: relative;
   height: 100%;
   display: flex;
   flex-direction: column;
   padding: 3rem 0;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;

   ${props =>
      props.open
         ? drawer_show_kf
         : `animation: 
      drawer-close 0.5s; opacity: 0;`}

   @keyframes drawer-close {
      0% {
         opacity: 1;
      }

      100% {
         opacity: 0;
      }
   }

   @media screen and (max-height: 450px), (max-width: 450px) {
      padding: 2rem 0;
      transition: 0.2s all linear;
   }
`;

const NavWrapper = styled.nav`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 2rem;

   transition: 0.2s all linear;
   @media screen and (max-height: 450px) {
      gap: 1rem;
   }
`;

const SideText = styled.span`
   font-size: 1.5rem;
   a {
      font-size: inherit;
      position: relative;
      display: inline-block;
      overflow: hidden;
      background: linear-gradient(to right, #00f3ff, #00f3ff 50%, #fff 50%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% 100%;
      background-position: 100%;
      transition: background-position 0.2s;

      &:hover {
         background-position: 0 100%;
      }
   }

   transition: 0.2s all linear;
   @media screen and (max-height: 450px), (max-width: 450px) {
      font-size: 1.2rem;
   }
`;

const SideBarButton = styled.button`
   position: absolute;
   right: -20px;
   top: 50%;
   border-radius: 100%;
   width: 40px;
   height: 40px;
   box-shadow: 0px 0px 3px black;
   background-color: #053232;
   background-image: url(${chevron});
   background-position: center;
   background-size: 100%;
   transform: translateY(-50%) ${props => (props.open ? 'rotateY(180deg)' : '')};
   border: none;
   cursor: pointer;

   ${drawer_show_kf}
`;

const GlobeWrapper = styled.div`
   position: relative;

   & > img {
      --sz: 30px;
      width: var(--sz);
      height: var(--sz);

      &:hover {
         cursor: pointer;
         animation: globehover 0.2s linear;
         filter: invert(0) sepia(32%) saturate(7101%) hue-rotate(135deg)
            brightness(103%) contrast(109%);

         @keyframes globehover {
            0% {
               filter: invert(0);
            }
            100% {
               filter: invert(0) sepia(32%) saturate(7101%) hue-rotate(135deg)
                  brightness(103%) contrast(109%);
            }
         }
      }
   }
`;

const LanguageSelector = styled.div`
   --sz: 125px;
   position: fixed;
   bottom: 1.5rem;
   left: 7.8rem;
   border-radius: 10px;
   transform: translateY(200px);
   ${props =>
      props.isOpen
         ? 'animation: openLang 0.2s; display: block; transform: unset'
         : 'animation: closeLang 0.2s;'};

   @keyframes openLang {
      0% {
         transform: translateX(-200px);
      }

      100% {
         transform: translateX(0px);
      }
   }

   @keyframes closeLang {
      0% {
         display: block;
         transform: translateX(0px);
      }

      100% {
         display: block;
         transform: translateX(-300px);
      }
   }

   background-color: white;
`;

const LangNav = styled.ul`
   list-style: none;
   padding: 1rem 1rem;

   color: black;

   li:first-child {
      margin-bottom: 1.5rem;
   }

   button {
      display: flex;
      gap: 1rem;
      align-items: center;
   }

   .active {
      color: ${colors.dk_teal_darker};
      text-shadow: 0px 0px 1px rgba(0, 0, 0);
      span {
         transform: scale(1.2);
      }
   }
`;

export default props => {
   const [open, setOpen] = useState(true);
   const [langOpen, setLangOpen] = useState(false);
   const [buttonDisable, setButtonDisable] = useState(false);
   const { t } = useTranslation();

   useEffect(() => {
      if (langOpen) {
         setLangOpen(false);
      }
   }, [open]);

   const languages = [
      {
         text: 'Português',
         code: 'pt',
         country_code: 'br',
      },
      {
         text: 'English',
         code: 'en',
         country_code: 'us',
      },
   ];

   return (
      <SideBar open={open}>
         <Wrapper open={open}>
            <SideText>Portfolio</SideText>
            <NavWrapper>
               <SideText>
                  <Link to="/">{t('Home')}</Link>
               </SideText>
               <SideText>
                  <Link to="/projects">{t('Projects')}</Link>
               </SideText>
               <SideText>
                  <Link to="/about">{t('About')}</Link>
               </SideText>
               <SideText>
                  <Link to="/contact">{t('Contact')}</Link>
               </SideText>
            </NavWrapper>
            <GlobeWrapper>
               <img
                  src={globe}
                  alt="globo"
                  onClick={() => {
                     setLangOpen(state => !state);
                  }}
               />
               <LanguageSelector isOpen={langOpen}>
                  <LangNav>
                     {languages.map(e => {
                        return (
                           <li key={e.code}>
                              <button
                                 aria-label="openSideBar"
                                 onClick={t => {
                                    i18next.changeLanguage(e.code);
                                 }}
                                 className={
                                    i18next.language == e.code ? 'active' : ''
                                 }
                              >
                                 <span
                                    className={`flag-icon flag-icon-${e.country_code}`}
                                 ></span>
                                 {e.text}
                              </button>
                           </li>
                        );
                     })}
                  </LangNav>
               </LanguageSelector>
            </GlobeWrapper>
         </Wrapper>
         <SideBarButton
            open={open}
            onClick={() => {
               setOpen(state => !state);
               setButtonDisable(true);
               setTimeout(() => {
                  setButtonDisable(false);
               }, 400);
            }}
            disabled={buttonDisable}
         />
      </SideBar>
   );
};

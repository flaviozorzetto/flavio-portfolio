import styled from 'styled-components';
import colors from '../variables/colors';
import facebookIcon from '../assets/svgs/facebook.svg';
import instagramIcon from '../assets/svgs/instagram.svg';
import linkedinIcon from '../assets/svgs/linkedin.svg';
import chevron from '../assets/svgs/chevron_right.svg';
import { useState } from 'react';

const Media = styled.nav`
   --size: 80px;
   position: absolute;
   bottom: 0;
   height: var(--size);

   background-color: ${colors.dk_teal_darker};

   border-top-left-radius: 1rem;
   border-top-right-radius: 1rem;

   animation: ${props =>
         props.firstTimeOpen
            ? 'slideInOp0'
            : props.open
            ? 'slideIn'
            : 'slideOut'}
      0.5s ease-in-out;

   transform: ${props => (props.open ? '' : 'translateY(var(--size))')};

   @keyframes slideIn {
      0% {
         transform: translateY(var(--size));
      }
   }

   @keyframes slideInOp0 {
      0% {
         opacity: 0;
         transform: translateY(var(--size));
      }
   }

   @keyframes slideOut {
      0% {
         transform: translateY(var(--size) * -1);
      }

      100% {
         transform: translateY(var(--size));
      }
   }
`;

const MediaWrapper = styled.div`
   display: flex;
   position: relative;
   align-items: center;
   width: 100%;
   height: 100%;
   gap: 20px;
   padding: 0 1rem;

   img {
      filter: invert(1);
      width: 25px;
      &:hover {
         cursor: pointer;
         filter: invert(1) sepia(32%) saturate(7101%) hue-rotate(135deg)
            brightness(103%) contrast(109%);
      }
   }
`;

const MediaOpener = styled.div`
   --sz: 40px;
   position: absolute;
   cursor: pointer;

   top: calc(var(--sz) / 2 * -1);
   left: 50%;
   transform: translateX(-50%)
      ${props => (props.open ? 'rotate(90deg)' : 'rotate(-90deg)')};
   transition: 0.1s all;
   border-radius: 100%;

   width: var(--sz);
   height: var(--sz);
   box-shadow: 0px 0px 3px black;

   background-image: url(${chevron});
   background-position: center;
   background-repeat: no-repeat;
   background-color: #053232;
`;

export default () => {
   const [open, setOpen] = useState(true);
   const [firstTimeOpen, setFirstTimeOpen] = useState(true);

   return (
      <Media firstTimeOpen={firstTimeOpen} open={open}>
         <MediaWrapper>
            <MediaOpener
               open={open}
               onClick={() => {
                  setOpen(state => !state);
                  if (firstTimeOpen) {
                     setFirstTimeOpen(false);
                  }
               }}
            />
            <a
               href="https://www.facebook.com/flavio.esrenkozorzetto"
               target="_blank"
            >
               <img src={facebookIcon} alt="facebook icon" />
            </a>
            <a
               href="https://www.instagram.com/flaviouzzorzetto/"
               target="_blank"
            >
               <img src={instagramIcon} alt="instagram icon" />
            </a>
            <a href="https://linkedin.com/in/flavio-zorzetto" target="_blank">
               <img src={linkedinIcon} alt="linkedin icon" />
            </a>
         </MediaWrapper>
      </Media>
   );
};

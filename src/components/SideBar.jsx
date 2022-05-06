import { useEffect, useState } from 'react';
import styled from 'styled-components';
import colors from '../variables/colors.js';
import { Link } from 'react-router-dom';

const SideBar = styled.aside`
   height: 100%;
   background-color: #011212c8;
   color: white;

   width: 120px;
   animation-name: opening;
   animation-duration: 1s;

   @keyframes opening {
      0% {
         width: 0px;
      }

      100% {
         width: 120px;
      }
   }
`;

const Wrapper = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   padding: 3rem 0;
   justify-content: space-between;
   align-items: center;

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
   }
`;

const NavWrapper = styled.nav`
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 2rem;
`;

const SideText = styled.span`
   font-size: 1.2rem;

   a {
      color: transparent;
      background: white;
      -webkit-background-clip: text;
      background-clip: text;

      &:hover {
         background: aqua;
         -webkit-background-clip: text;
         background-clip: text;
         animation: thomas 0.2s forwards;
      }

      @keyframes thomas {
         ${() => {
            let str = ``;

            for (let i = 0; i < 100; i += 5) {
               str += `
                  ${i}% {
                           background: linear-gradient(90deg, #00f3ff 0% ${i}%, white ${i}%);
                           -webkit-background-clip: text;
                           background-clip: text;
                        }
                  `;
            }

            return str;
         }}
      }
   }
`;

/* ${() => {
            let max = 50;
            let i = 0;

            let concat = ``;

            while (i <= max) {
               concat += `
                        ${i}% {
                           background: linear-gradient(90deg, #00f3ff 0% ${i}%, white 50%);
                           -webkit-background-clip: text;
                           background-clip: text;
                        }
                     `;
               i += 5;
            }
            console.log(concat);
            return concat;
         }} */

export default props => {
   return (
      <SideBar>
         <Wrapper>
            <SideText>Portfolio</SideText>
            <NavWrapper>
               <SideText>
                  <Link to="/">Home</Link>
               </SideText>
               <SideText>
                  <Link to="/projects">Projects</Link>
               </SideText>
               <SideText>
                  <Link to="/about">About</Link>
               </SideText>
               <SideText>
                  <Link to="/contact">Contact</Link>
               </SideText>
            </NavWrapper>
         </Wrapper>
      </SideBar>
   );
};

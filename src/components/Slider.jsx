import { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
`;

const Slider = styled.div`
   position: relative;
   width: 100%;
   height: 500px;
   border: 1px solid black;
   overflow: hidden;
   padding: 1rem;
   display: flex;
   justify-content: center;
   gap: 50px;
`;

const SliderCard = styled.div`
   position: relative;
   height: 100%;
   min-width: 300px;
   border: 1px solid white;

   ${props => {
      return props.showingUp
         ? 'animation: appearing 1s ease-out; overflow:hidden;'
         : '';
   }}

   @keyframes appearing {
      0% {
         min-width: 0;
         height: 0;
      }
   }

   h2 {
      color: white;
      font-size: 2rem;
   }
`;

const SliderButton = styled.button`
   position: absolute;
   width: 50px;
   height: 50px;
   background-color: red;
   right: 0;
`;

export default props => {
   const [showing, setShowing] = useState([0, 1, 2]);
   let dataLength = props.data.length;

   return (
      <SliderContainer>
         <Slider showing={showing}>
            {showing.map((e, i) => {
               return (
                  <SliderCard showingUp={showing.length - 1 == i} key={e}>
                     <h2>{props.data[e].description}</h2>
                  </SliderCard>
               );
            })}
            <SliderButton
               onClick={() => {
                  setShowing(state => {
                     let newState = state.map(e => {
                        e += 1;
                        if (e == dataLength) {
                           e = 0;
                        }
                        return e;
                     });
                     return newState;
                  });
               }}
            />
         </Slider>
      </SliderContainer>
   );
};

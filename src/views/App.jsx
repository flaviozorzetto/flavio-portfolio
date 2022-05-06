import { Route, Routes } from 'react-router-dom';
import About from '../routes/About';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

const Wrapper = styled.div`
   display: flex;
   height: 100%;
`;

const Container = styled.div`
   width: 100%;
`;

export default () => {
   return (
      <Wrapper>
         <SideBar />
         <Container>
            <Routes>
               <Route path="/about" element={<About />}></Route>
            </Routes>
         </Container>
      </Wrapper>
   );
};
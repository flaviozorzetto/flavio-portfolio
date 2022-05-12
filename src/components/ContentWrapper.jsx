import styled from 'styled-components';

const ContentWrapper = styled.div`
   height: 100%;
   max-width: 80%;
   width: 100%;
   margin: auto;


`;

export default props => {
   return <ContentWrapper>{props.children}</ContentWrapper>;
};

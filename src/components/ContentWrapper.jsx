import styled from 'styled-components';

const ContentWrapper = styled.div`
   height: 100%;
   max-width: 70%;
   width: 100%;
   margin: auto;
   /* padding: 8rem 0; */
`;

export default props => {
   return <ContentWrapper>{props.children}</ContentWrapper>;
};

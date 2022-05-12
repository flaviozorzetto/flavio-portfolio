import styled from 'styled-components';

const ContentWrapper = styled.div`
   height: 100%;
   max-width: 80%;
   margin: auto;
`;

export default props => {
   return <ContentWrapper>{props.children}</ContentWrapper>;
};

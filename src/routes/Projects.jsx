import Slider from '../components/Slider';
import ContentWrapper from '../components/ContentWrapper';

export default props => {
   const data = [
      {
         repoLink: 'www.hasijdo.com',
         liveLink: 'www.hasijdo.com',
         imgUrl: '',
         description: 'Udyr1',
      },
      {
         repoLink: 'www.hasijdo.com',
         liveLink: 'www.hasijdo.com',
         imgUrl: '',
         description: 'Udyr2',
      },
      {
         repoLink: 'www.hasijdo.com',
         liveLink: 'www.hasijdo.com',
         imgUrl: '',
         description: 'Udyr3',
      },
      {
         repoLink: 'www.hasijdo.com',
         liveLink: 'www.hasijdo.com',
         imgUrl: '',
         description: 'Udyr4',
      },
      {
         repoLink: 'www.hasijdo.com',
         liveLink: 'www.hasijdo.com',
         imgUrl: '',
         description: 'Udyr5',
      },
   ];

   return (
      <ContentWrapper>
         <Slider data={data} />
      </ContentWrapper>
   );
};

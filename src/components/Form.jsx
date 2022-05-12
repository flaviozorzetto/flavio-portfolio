import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import colors from '../variables/colors.js';

const FormContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   font-size: 16px;

   animation: fadeInFromNone 1.5s ease-out;

   @keyframes fadeInFromNone {
      0% {
         display: none;
         opacity: 0;
      }

      1% {
         display: block;
         opacity: 0;
      }

      100% {
         display: block;
         opacity: 1;
      }
   }

   & > h2 {
      color: white;
      font-size: 2em;
      text-align: center;
      width: 100%;
   }
`;

const FormWrapper = styled.form`
   width: 80%;
   flex-wrap: wrap;
   display: flex;
   justify-content: center;
   gap: 1rem;

   input,
   textarea,
   button {
      background: ${colors.dk_teal};
      border: 1px solid #ffffff89;
      border-radius: 10px;
      padding: 0.6rem;
      color: white;
   }

   input:hover,
   textarea:hover,
   button:hover {
      border: 1px solid ${colors.neutral_teal};
   }

   button:hover {
      color: #00f3ff;
   }

   input:focus,
   textarea:focus {
      border: 1px solid #00f3ff;
   }

   button {
      padding: 0.6rem 2rem;
   }

   input::placeholder,
   textarea::placeholder {
      color: #ffffff89;
   }

   input {
      width: 100%;
   }

   textarea {
      resize: none;
      width: 100%;
      height: 100px;
   }
`;

export default () => {
   const { t } = useTranslation();

   return (
      <FormContainer>
         <h2>{t('form_title')}</h2>
         <FormWrapper
            action="https://formsubmit.co/flaviozorzetto11@gmail.com"
            method="POST"
            target="_blank"
         >
            <input
               type="text"
               name="nome"
               placeholder={t('form_placeholder_name')}
               required
            />
            <input type="email" name="Email" placeholder="Email" required />
            <input
               type="tel"
               name="Telefone"
               placeholder={t('form_placeholder_phone')}
               required
            />
            <textarea
               name="Mensagem"
               placeholder={t('form_placeholder_message')}
            />
            <button type="submit">{t('form_placeholder_submit')}</button>
         </FormWrapper>
      </FormContainer>
   );
};

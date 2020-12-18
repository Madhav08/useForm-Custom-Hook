import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 5rem auto;
  border-radius: 16px;
  box-shadow: 4px 4px 8px rgba(255, 255, 255, 0.15);

  @media (max-width: 768px) {
    width: 300px;
  } ;
`;

export const InputField = styled.input`
  border: 6px;
  width: 340px;
  padding: 0.6rem;
  font-size: 1.1rem;
  margin: 0.4rem 0.4rem;
  outline: none;
  border: 2px solid #171273;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 230px;
  }
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
})`
  border: 6px;
  width: 340px;
  padding: 0.6rem;
  font-size: 1.1rem;
  margin: 0.4rem 0.4rem;
  outline: none;
  border: 2px solid #171273;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  background: #171273;

  &:hover {
    background: #1d1881;
  }

  @media (max-width: 768px) {
    width: 230px;
  }
`;

export const MainHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffff;
  margin: 3.8px auto;
`;

export const ErrorText = styled.p`
  color: #d60d0d;
  font-size: 1.1rem;
  margin-left: 15px;
`;

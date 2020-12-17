import styled from 'styled-components';

export const Form = styled.form`
  background: #1773c9;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 5rem auto;
  border-radius: 16px;
  box-shadow: 4px 4px 8px #1773c9;
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
`;

export const MainHeading = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffff;
  margin: 3.8px auto;
`;

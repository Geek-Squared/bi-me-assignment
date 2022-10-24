import styled from "styled-components";

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 343px;
  border: 1px solid #858587;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  outline: none;
  padding: 10px 0px;
  &::placeholder {
    color: #b1b1b5;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #858587;
  margin-left: -20px;
`;

export const ErrorMsg = styled.p`
  align-self: flex-start;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #ff6e57;
  margin-left: -20px;
  margin-top: -15px;
`;

export const RadioLabel = styled.label`
  font-family: Poppins;
  font-style: normal;
  font-size: 21px;
  font-weight: 400;
  line-height: 32px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
`;

export const Radio = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  width: 30px;
  height: 30px;
  border: 1px solid #d9dade;
  border-radius: 50%;
  &:checked {
    background-color: #ffffff;
    border: 8px solid #00add8;
    box-shadow: 0px 4px 4px rgba(0, 173, 216, 0.5);
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border: 1px solid #d9dade;
  border-radius: 7px;
  padding: 1rem;
  box-sizing: border-box;
  width: 124px;
  height: 55px;
  margin-bottom: 2rem;
`;

export const RadioLabelWrapper = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Title = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-size: 21px;
  font-weight: 400;
  line-height: 32px;
  color: #858587;
  white-space: nowrap;
  overflow: hidden;
`;

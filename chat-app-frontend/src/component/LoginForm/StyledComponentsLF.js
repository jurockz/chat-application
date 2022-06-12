import styled from "styled-components";

export const LoginFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ede8e4;
`;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;

export const LoginFormInput = styled.input`
  padding: 5px;
  margin: 0;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
`;

export const LoginFormButton = styled.button`
  padding: 5px;
  margin: 0;
  border: none;
  outline: none;
  background-color: #eea561;
  font-size: 20px;
  border-radius: 5px;
  color: black;
`;

import React, { useState } from "react";
import {
  LoginFormContainer,
  LoginFormWrapper,
  LoginFormInput,
  LoginFormButton,
} from "./StyledComponentsLF";

function LoginForm({ handleSenderName }) {
  const [isInput, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleConnect = () => {
    if (isInput !== "") handleSenderName(isInput);
  };

  return (
    <LoginFormContainer>
      <LoginFormWrapper>
        <LoginFormInput
          id="user-name"
          placeholder="Namen eingeben ..."
          value={isInput}
          onChange={handleInput}
          spellCheck={false}
        ></LoginFormInput>
        <LoginFormButton type="button" onClick={handleConnect}>
          Anmelden
        </LoginFormButton>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
}

export default LoginForm;

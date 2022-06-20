import React, { useState } from "react";
import SendButton from "./SendButton";
import { sendMessage } from "../switchConversationAPI/SwitchConversationWebsocketAPI";
import { WriteWrapper, WriteInput } from "./StyledComponentsCC";

function InputField({ handleAddToConversation, isSender, isReceiver }) {
  const [isMessage, setMessage] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    sendMessage(
      handleAddToConversation,
      setMessage,
      isSender,
      isReceiver,
      isMessage
    );
  };

  const handleOnChangeEvent = (event) => {
    setMessage(event.target.value);
  };

  return (
    <WriteWrapper>
      <WriteInput
        placeholder="Nachricht schreiben ..."
        onChange={handleOnChangeEvent}
        value={isMessage}
        spellCheck={false}
        onKeyDown={handleKeyDown}
      />
      <SendButton sendFunction={handleSendMessage} active={isMessage !== ""} />
    </WriteWrapper>
  );
}

export default InputField;

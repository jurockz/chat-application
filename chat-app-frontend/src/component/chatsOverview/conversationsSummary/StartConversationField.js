import React, { useState } from "react";
import {
  ReceiverInputWrapper,
  ReceiverInput,
  StartConversationButton,
} from "./StyledComponentsCO";

function StartConversationField({ handleNewReceiver }) {
  const [isInput, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleNewConversation = () => {
    if (isInput !== "") handleNewReceiver(isInput);
  };

  return (
    <ReceiverInputWrapper>
      <ReceiverInput
        placeholder="Namen eingeben ..."
        onChange={handleInput}
        value={isInput}
      />
      <StartConversationButton onClick={handleNewConversation}>
        <svg width="60%" height="60%" viewBox="0 0 105 105" fill="none">
          <path
            d="M85.5232 43.8163V99C85.5232 101.209 83.7324 103 81.5232 103H6C3.79086 103 2 101.209 2 99V25.3673C2 23.1582 3.79086 21.3673 6 21.3673H56.7077"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M33.5644 62.2382L30.2721 70.5468C29.6375 72.1482 31.2503 73.7245 32.8889 73.1043L41.3898 69.8865L33.5644 62.2382Z"
            fill="black"
          />
          <path
            d="M33.5644 62.2382L30.2721 70.5468C29.6375 72.1482 31.2503 73.7245 32.8889 73.1043L41.3898 69.8865M33.5644 62.2382L38.5107 49.7556L86.3491 3L102 18.2966L54.1615 65.0522L41.3898 69.8865M33.5644 62.2382L41.3898 69.8865"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </StartConversationButton>
    </ReceiverInputWrapper>
  );
}

export default StartConversationField;

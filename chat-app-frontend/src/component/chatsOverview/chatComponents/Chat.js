import React, { useRef, useEffect } from "react";
import { compareLongerThanOneHour } from "../../../utils/DateUtils";
import ChatBubble from "./ChatBubble";
import InputField from "./InputField";
import ReturnButton from "./ReturnButton";
import {
  ChatWrapper,
  Header,
  ReceiverDisplayWrapper,
  ChatBubblesContainer,
} from "./StyledComponentsCC";

function Chat({
  isSender,
  receiverName,
  isConversation,
  fetchMessages,
  handleNewReceiver,
  setConversation,
  handleAddToConversation,
  isReceiver,
}) {
  const bubbleContainerRef = useRef(null);
  const latestTimestamp = useRef(null);

  useEffect(() => {
    if (bubbleContainerRef) {
      bubbleContainerRef.current.addEventListener(
        "DOMNodeInserted",
        (event) => {
          const { currentTarget: target } = event;
          target.scroll({ top: target.scrollHeight });
        }
      );
    }
    fetchMessages(setConversation, isSender, receiverName);
    setConversation([]);
  }, []);

  return (
    <ChatWrapper>
      <Header>
        <ReturnButton returnFunction={handleNewReceiver} />
        <ReceiverDisplayWrapper>
          <div>{receiverName}</div>
        </ReceiverDisplayWrapper>
      </Header>
      <ChatBubblesContainer ref={bubbleContainerRef}>
        {isConversation.current.map((chat, index) => {
          const ownMessage = chat.sender === isSender;
          const renderDate =
            latestTimestamp.current === null ||
            compareLongerThanOneHour(latestTimestamp.current, chat.created_at);
          latestTimestamp.current = chat.created_at;
          return (
            <ChatBubble
              key={index}
              content={chat.content}
              ownMessage={ownMessage}
              renderDate={renderDate}
              timestamp={chat.created_at}
            />
          );
        })}
      </ChatBubblesContainer>
      <InputField
        handleAddToConversation={handleAddToConversation}
        isSender={isSender}
        isReceiver={isReceiver}
      />
    </ChatWrapper>
  );
}

export default Chat;

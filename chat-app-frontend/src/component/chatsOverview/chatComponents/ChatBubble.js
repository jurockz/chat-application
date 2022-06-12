import React from "react";
import { getMessageBubbleDate } from "../../../utils/DateUtils";
import {
  ChatBubbleContainer,
  ChatPart,
  InnerChatBubble,
  MessageTimestampContainer,
  MessageTimestamp,
} from "./StyledComponentsCC";

function ChatBubble({ content, ownMessage, renderDate, timestamp }) {
  const TimestampComponent = (
    <MessageTimestampContainer>
      <MessageTimestamp>{getMessageBubbleDate(timestamp)}</MessageTimestamp>
    </MessageTimestampContainer>
  );
  const ChatBubble = (
    <ChatBubbleContainer ownMessage={ownMessage}>
      <ChatPart ownMessage={ownMessage}>
        <InnerChatBubble ownMessage={ownMessage}>{content}</InnerChatBubble>
      </ChatPart>
    </ChatBubbleContainer>
  );
  if (renderDate)
    return (
      <>
        {TimestampComponent}
        {ChatBubble}
      </>
    );

  return ChatBubble;
}

export default ChatBubble;

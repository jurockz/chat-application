import React from "react";
import { getMessageDate } from "../../../utils/DateUtils";
import {
  ConvoSummaryButton,
  NameAndMessageWrapper,
  ConversationName,
  DateWrapper,
  LastMessage,
} from "./StyledComponentsCO";

function ConversationSummaryButton({ ConvoSummary, handleNewReceiver }) {
  const handleConversationOpen = () => {
    handleNewReceiver(ConvoSummary.chat_name);
  };

  return (
    <ConvoSummaryButton onClick={handleConversationOpen}>
      <NameAndMessageWrapper>
        <ConversationName>{ConvoSummary.chat_name}</ConversationName>
        <LastMessage>{ConvoSummary.last_message}</LastMessage>
      </NameAndMessageWrapper>
      <DateWrapper>{getMessageDate(ConvoSummary.created_at)}</DateWrapper>
    </ConvoSummaryButton>
  );
}

export default ConversationSummaryButton;

import React from "react";
import StartConversationField from "./StartConversationField";
import ConversationSummaryButton from "./ConversationSummaryButton";
import {
  ConvoSumListWrapper,
  Header,
  ConvoSumListContainer,
  Footer,
} from "./StyledComponentsCO";

function ConvoSumList({ handleNewReceiver, isConvoSumList }) {
  return (
    <ConvoSumListWrapper>
      <Header>
        <div>Chats</div>
      </Header>
      <StartConversationField handleNewReceiver={handleNewReceiver} />
      <ConvoSumListContainer>
        {isConvoSumList.map((ConvoSummary, index) => {
          return (
            <ConversationSummaryButton
              key={index}
              ConvoSummary={ConvoSummary}
              handleNewReceiver={handleNewReceiver}
            />
          );
        })}
      </ConvoSumListContainer>
      <Footer />
    </ConvoSumListWrapper>
  );
}

export default ConvoSumList;

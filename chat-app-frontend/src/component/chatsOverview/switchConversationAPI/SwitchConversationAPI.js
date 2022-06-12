export const fetchConvoSumList = (setConvoSumList, isSender) => {
  fetch(`http://localhost:8080/api/${isSender}/get-conversation-summary-list`)
    .then((res) => res.json())
    .then((conversationSummary) => {
      setConvoSumList(conversationSummary);
    });
};

export const fetchMessages = (setConversation, isSender, receiverName) => {
  fetch(`http://localhost:8080/api/${isSender}/get-messages/${receiverName}`)
    .then((res) => res.json())
    .then((result) => {
      setConversation(result);
    });
};

import React, { useState, useEffect } from "react";
import Chat from "./chatComponents/Chat";
import { useAsyncReference } from "../../customHooks/useAsyncReference";
import ConvoSumList from "./conversationsSummary/ConvoSumList";
import {
  fetchConvoSumList,
  fetchMessages,
} from "./switchConversationAPI/SwitchConversationAPI";
import { registerSender } from "./switchConversationAPI/SwitchConversationWebsocketAPI";

function SwitchConversation({ isSender }) {
  const [isConvoSumList, setConvoSumList] = useState([]);
  const [isReceiver, setReceiver] = useAsyncReference({
    receiverPresent: false,
    receiverName: "",
  });
  const [isConversation, setConversation] = useAsyncReference([]);

  useEffect(() => {
    fetchConvoSumList(setConvoSumList, isSender);
    registerSender(isReceiver, handleAddToConversation, isSender);
  }, []);

  const handleAddToConversation = (data) => {
    const newConvo = isConversation.current;
    newConvo.push(data);
    setConversation(newConvo);
  };
  const handleNewReceiver = (receiver) => {
    if (receiver === "default") {
      setReceiver({
        receiverPresent: false,
        receiverName: "",
      });
      fetchConvoSumList(setConvoSumList, isSender);
      return;
    }
    setReceiver({
      receiverPresent: true,
      receiverName: receiver,
    });
    return;
  };

  return (
    <>
      {!isReceiver.current.receiverPresent ? (
        <ConvoSumList
          handleNewReceiver={handleNewReceiver}
          isConvoSumList={isConvoSumList}
        />
      ) : (
        <Chat
          isSender={isSender}
          receiverName={isReceiver.current.receiverName}
          isConversation={isConversation}
          fetchMessages={fetchMessages}
          handleNewReceiver={handleNewReceiver}
          setConversation={setConversation}
          handleAddToConversation={handleAddToConversation}
          isReceiver={isReceiver}
        />
      )}
    </>
  );
}

export default SwitchConversation;

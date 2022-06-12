import SockJS from "sockjs-client";
import { over } from "stompjs";

export var stompClient = null;

export const registerSender = (
  isReceiver,
  handleAddToConversation,
  isSender
) => {
  let Sock = new SockJS("http://localhost:8080/ws");
  stompClient = over(Sock);
  stompClient.connect(
    {},
    () => onConnected(isReceiver, handleAddToConversation, isSender),
    onError
  );
};

const onConnected = (isReceiver, handleAddToConversation, isSender) => {
  stompClient.subscribe("/user/" + isSender + "/private", (payload) =>
    onMessageReceived(payload, isReceiver, handleAddToConversation)
  );
};

const onError = (error) => {
  console.log("WEBSOCKET ERROR: ", error);
};

const onMessageReceived = (payload, isReceiver, handleAddToConversation) => {
  let payloadData = JSON.parse(payload.body);
  if (payloadData.sender === isReceiver.current.receiverName) {
    handleAddToConversation(payloadData);
  } else if (isReceiver === "") {
    console.log("fetch chat");
  } else {
    console.log("falscher chat ...");
  }
};

export const sendMessage = (
  handleAddToConversation,
  setMessage,
  isSender,
  isReceiver,
  isMessage
) => {
  if (stompClient) {
    const message = {
      sender: isSender,
      receiver: isReceiver.current.receiverName,
      content: isMessage,
      type: "PRIVATE",
      created_at: Date.now(),
    };
    handleAddToConversation(message);
    stompClient.send("/app/send-private", {}, JSON.stringify(message));
    setMessage("");
  }
};

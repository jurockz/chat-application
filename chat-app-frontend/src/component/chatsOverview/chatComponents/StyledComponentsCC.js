import styled from "styled-components";

// Chat

export const ChatWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px auto 68px;
`;

export const Header = styled.div`
  height: 40px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d1d1d1;
  font-size: 20px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 30px auto;
`;

export const ReceiverDisplayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatBubblesContainer = styled.div`
  overflow: scroll;
  padding: 0;
  margin: 0;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

// ChatBubble

export const ChatBubbleContainer = styled.div`
  padding: 5px;
  display: flex;
`;

export const ChatPart = styled.div`
  ${(props) => {
    if (props.ownMessage) return "margin-left: auto;";
  }}
  max-width: 70%;
`;

export const InnerChatBubble = styled.div`
  background-color: ${(props) => (props.ownMessage ? "#EEA561" : "white")};
  border: 1px solid ${(props) => (props.ownMessage ? "#EEA561" : "lightgrey")};
  font-size: 16px;
  border-radius: 20px;
  padding: 7px 10px 7px 10px;
  word-break: break-all;
  width: fit-content;
`;

export const MessageTimestampContainer = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MessageTimestamp = styled.div`
  font-size: 12px;
  color: rgba(1, 1, 1, 0.5);
`;

// InputField

export const WriteWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 45px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 30px;
  margin: 10px 5px 5px 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 3px;
  padding-left: 17px;
  overflow: hidden;
`;

export const WriteInput = styled.input`
  font-size: 17px;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

// ReturnButton

export const ReturnButtonWrapper = styled.div`
  width: auto;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// SendButton

export const SendButtonWrapper = styled.div`
  padding: 2px;
  width: 36px;
  height: 36px;
`;

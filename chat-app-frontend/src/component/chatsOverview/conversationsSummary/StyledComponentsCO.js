import styled from "styled-components";

// ConversationOverviewButton

export const ConvoSummaryButton = styled.div`
  height: 60px;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 50px;
`;

export const NameAndMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DateWrapper = styled.div`
  font-size: 12px;
  color: rgba(1, 1, 1, 0.5);
`;

export const ConversationName = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 5px;
  word-break: break-all;
`;

export const LastMessage = styled.div`
  color: rgba(1, 1, 1, 0.5);
  font-size: 14px;
`;

// ConversationOverview

export const ConvoSumListWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60px 55px auto 55px;
`;

export const Header = styled.div`
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 30px;
  padding-left: 20px;
  font-weight: bold;
`;

export const ConvoSumListContainer = styled.div`
  overflow: scroll;
  padding: 0;
  margin: 0;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const Footer = styled.div`
  height: 45px;
  margin-top: 10px;
  border-top: 1px solid #d1d1d1;
`;

// StartConversationField

export const ReceiverInputWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 45px;
  height: 44px;
  border-bottom: 1px solid grey;
  padding: 5px;
  padding-left: 20px;
  overflow: hidden;
`;

export const ReceiverInput = styled.input`
  font-size: 20px;
  height: 100%;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
`;

export const StartConversationButton = styled.div`
  width: auto;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

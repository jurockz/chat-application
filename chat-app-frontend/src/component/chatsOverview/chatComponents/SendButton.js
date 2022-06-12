import React from "react";
import { SendButtonWrapper } from "./StyledComponentsCC";

function SendButton({ active, sendFunction }) {
  return (
    <SendButtonWrapper onClick={sendFunction}>
      {active ? (
        <svg width="100%" height="100%" viewBox="0 0 136 135" fill="none">
          <circle cx="67.5" cy="67.5" r="67.5" fill="#EEA561" />
          <path
            d="M108.538 40.7204C109.793 38.4728 107.821 35.7923 105.302 36.3221L24.2204 53.3726C21.7394 53.8944 20.984 57.0675 22.9638 58.6512L44.2424 75.6714C44.8427 76.1515 45.665 76.2452 46.3578 75.9122L74.458 62.41L53.2098 85.2232C52.6859 85.7857 52.5308 86.5987 52.8107 87.3146L62.7327 112.692C63.6559 115.053 66.9101 115.276 68.1461 113.062L108.538 40.7204Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg width="100%" height="100%" viewBox="0 0 136 135" fill="none">
          <circle
            cx="67.5"
            cy="67.5"
            r="66"
            fill="white"
            stroke="#EEA561"
            strokeWidth="3"
          />
          <path
            d="M108.538 40.7204C109.793 38.4728 107.821 35.7923 105.302 36.3221L24.2204 53.3726C21.7394 53.8944 20.984 57.0675 22.9638 58.6512L44.2424 75.6714C44.8427 76.1515 45.665 76.2452 46.3578 75.9122L74.458 62.41L53.2098 85.2232C52.6859 85.7857 52.5308 86.5987 52.8107 87.3146L62.7327 112.692C63.6559 115.053 66.9101 115.276 68.1461 113.062L108.538 40.7204Z"
            fill="white"
            stroke="#EEA561"
            strokeWidth="3"
          />
        </svg>
      )}
    </SendButtonWrapper>
  );
}

export default SendButton;

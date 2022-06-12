import React from "react";
import { ReturnButtonWrapper } from "./StyledComponentsCC";

function ReturnButton({ returnFunction }) {
  return (
    <ReturnButtonWrapper onClick={() => returnFunction("default")}>
      <svg width="30px" height="25px" viewBox="0 0 44 70" fill="none">
        <path
          d="M42 2L2.935 34.2286C2.45017 34.6286 2.45017 35.3714 2.935 35.7714L42 68"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </ReturnButtonWrapper>
  );
}

export default ReturnButton;

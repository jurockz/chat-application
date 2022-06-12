import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import { useWindowSize } from "usehooks-ts";
import SwitchConversation from "./chatsOverview/SwitchConversation";
import { LoginSwitchWrapper } from "./StyledComponentsLS";

function LoginSwitch() {
  const { height, width } = useWindowSize();
  const [isSender, setSender] = useState({
    senderPresent: false,
    senderName: "",
  });

  const handleSenderName = (sender) => {
    setSender({
      senderPresent: true,
      senderName: sender,
    });
  };

  return (
    <LoginSwitchWrapper height={height} width={width}>
      {isSender.senderPresent ? (
        <SwitchConversation isSender={isSender.senderName} />
      ) : (
        <LoginForm handleSenderName={handleSenderName} />
      )}
    </LoginSwitchWrapper>
  );
}

export default LoginSwitch;

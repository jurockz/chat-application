import styled from "styled-components";

export const LoginSwitchWrapper = styled.div`
  height: ${(props) => props.height + "px"};
  width: ${(props) => (props.width > 500 ? "500px" : props.width + "px")};
`;

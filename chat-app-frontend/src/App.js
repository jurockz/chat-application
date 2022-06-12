import "./index.css";
import LoginSwitch from "./component/LoginSwitch";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
      <LoginSwitch />
    </AppContainer>
  );
}

export default App;

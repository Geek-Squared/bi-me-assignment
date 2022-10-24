import styled from "styled-components";
import TextField from "./components/TextField";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <TextField />
    </Wrapper>
  );
}

export default App;

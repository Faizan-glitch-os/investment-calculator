import Header from "./components/header";
import UserInput from "./components/user-input";

function App() {
  return (
    <>
      <Header />
      <div id="user-input">
        <UserInput label="Initial Investment" />
        <UserInput label="Annual Investment" />
        <UserInput label="Expected Return" />
        <UserInput label="Duration" />
      </div>
    </>
  );
}

export default App;

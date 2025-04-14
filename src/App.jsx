import Header from "./components/header";
import UserInput from "./components/user-input";
import Result from "./components/result";
import { useState } from "react";

const initialData = {
  initial: 1000,
  annual: 2000,
  expected: 10,
  duration: 12,
};

function App() {
  const [value, setValue] = useState(initialData);

  function handleOnChange(whichValue, newValue) {
    setValue((previosValue) => {
      return { ...previosValue, [whichValue]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput handleOnChange={handleOnChange} value={value} />
      {value.duration >= 1 ? (
        <Result result={value} />
      ) : (
        <p className="center">Please enter the correct duration</p>
      )}
    </>
  );
}

export default App;

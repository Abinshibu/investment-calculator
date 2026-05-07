import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/userInput';
import Result from './components/Result';

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1200,
    expectedReturnRate: 7,
    investmentPeriod: 10
  });

  const inputIsValid = Object.values(userInput).every(value => value > 0);

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p id="validation-message" className='center'>Please enter valid input values (greater than zero).</p>}
      {inputIsValid && <Result input={userInput}  />}

    </>
    
    
  )
}

export default App

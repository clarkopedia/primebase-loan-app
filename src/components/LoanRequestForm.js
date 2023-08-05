import React, { useState } from 'react';
import axios from 'axios';

const LoanRequestForm = () => {
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://okigwecreations.online/api/request_for_loan',
        { amount }
      );
      console.log(response.data);
      setSuccessMessage('Loan requested successfully!');
       setErrorMessage(''); // Handle success response here
    } catch (error) {
        setErrorMessage('Failed to request loan.');
       setSuccessMessage('');
      console.error(error); // Handle error here
    }
  };

  return (
    <div>
      <h2>Request for a Loan</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          required
        />
        <button type="submit">Submit</button>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoanRequestForm;

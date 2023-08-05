import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoanRequestList = () => {
  const [loanRequests, setLoanRequests] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchLoanRequests = async () => {
      try {
        const response = await axios.get(
          'https://okigwecreations.online/api/get_all_loan_request'
        );
        setLoanRequests(response.data); // Handle response here
      } catch (error) {
        setErrorMessage('Failed to fetch loan requests.');
        console.error(error); // Handle error here
      }
    };

    fetchLoanRequests();
  }, []);

  return (
    <div>
      <h2>List of Loan Requests</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {loanRequests.map((request) => (
          <li key={request.id}>{request.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoanRequestList;
















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LoanRequests = () => {
//   const [loanRequests, setLoanRequests] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   useEffect(() => {
//     axios
//       .get(
//         'https://api.postman.com/collections/17034879-ad82a2de-0eb0-4534-8600-b2e09cf87396/get_all_loan_request'
//       )
//       .then((response) => {
//         setLoanRequests(response.data);
//       })
//       .catch((error) => {
//         setErrorMessage('Failed to fetch loan requests.');
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Loan Requests</h2>
//       {errorMessage && <p>{errorMessage}</p>}
//       <ul>
//         {loanRequests.map((request) => (
//           <li key={request.id}>
//             Amount: {request.amount}, Term: {request.term}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LoanRequests;

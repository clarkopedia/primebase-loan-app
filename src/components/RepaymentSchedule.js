import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RepaymentSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchRepaymentSchedule = async () => {
      try {
        const response = await axios.get(
          'https://okigwecreations.online/api/get_repayment_schedule'
        );
        setSchedule(response.data);
        setErrorMessage('') // Handle response here
      } catch (error) {
        setErrorMessage('Failed to fetch repayment schedule.');
        console.error(error); // Handle error here
      }
    };

    fetchRepaymentSchedule();
  }, []);

  return (
    <div>
      <h2>Repayment Schedule</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <ul>
        {schedule.map((payment) => (
          <li key={payment.id}>{payment.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default RepaymentSchedule;






































































// import React, { useState } from 'react';
// import axios from 'axios';

// const RepaymentSchedule = () => {
//   const [loanRequestId, setLoanRequestId] = useState('');
//   const [repaymentSchedule, setRepaymentSchedule] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `https://api.postman.com/collections/17034879-ad82a2de-0eb0-4534-8600-b2e09cf87396/get_repayment_schedule/${loanRequestId}`
//       );
//       setRepaymentSchedule(response.data);
//       setErrorMessage('');
//     } catch (error) {
//       setErrorMessage('Failed to fetch repayment schedule.');
//       setRepaymentSchedule([]);
//     }
//   };

//   return (
//     <div>
//       <h2>Repayment Schedule</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Loan Request ID:</label>
//           <input
//             type="text"
//             value={loanRequestId}
//             onChange={(e) => setLoanRequestId(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//         {errorMessage && <p>{errorMessage}</p>}
//       </form>
//       <ul>
//         {repaymentSchedule.map((schedule) => (
//           <li key={schedule.id}>
//             Date: {schedule.date}, Amount: {schedule.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RepaymentSchedule;

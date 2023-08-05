import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LoanRequestForm from './components/LoanRequestForm';
import LoanRequestList from './components/LoanRequestList';
import RepaymentSchedule from './components/RepaymentSchedule';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Request for a Loan</Link>
          </li>
          <li>
            <Link to="/loan-list">List of Loan Requests</Link>
          </li>
          <li>
            <Link to="/repayment">Repayment Schedule</Link>
          </li>
        </ul>
      </nav>
      </div>
      <Routes>
        <Route exact path="/" component={LoanRequestForm} />
        <Route path="/loan-list" component={LoanRequestList} />
        <Route path="/repayment" component={RepaymentSchedule} />
      </Routes>
    </Router>
  );
};

export default App;























































// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import RequestLoan from './components/RequestLoan';
// import LoanRequests from './components/LoanRequests';
// import RepaymentSchedule from './components/RepaymentSchedule';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={RequestLoan} />
//         <Route exact path="/loan-requests" component={LoanRequests} />
//         <Route exact path="/repayment/:loanRequestId" component={RepaymentSchedule} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;



















































// import React from 'react';
// import RequestLoan from './components/RequestLoan';
// import LoanRequests from './components/LoanRequests';
// import RepaymentSchedule from './components/RepaymentSchedule';

// const App = () => {
//   return (
//     <div>
//       <RequestLoan />
//       <LoanRequests />
//       <RepaymentSchedule />
//     </div>
//   );
// };

// export default App;






































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

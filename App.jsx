import './App.css';
import EmployeeFeedbackForm from "components./EmployeeFeedbackForm.jsx";


import StudentRegistrationForm from 'components/StudentRegistrationForm.jsx';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="student-link">
          <Link to="/student" className="student-link">Student Registration</Link>
        </div>
        <div className="employee-link">
          <Link to="/employee" className="employee-link">Employee Feedback</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/student" />} />
        <Route path="/student" element={<StudentRegistrationForm />} />
        <Route path="/employee" element={<EmployeeFeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
import AddEmployee from "./components/AddEmployee";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
<> 
  <Router>
    <Navbar />  
    <Routes>
      <Route index element={<EmployeeList/>}/>
      <Route path="/" element={<EmployeeList/>}/>
      <Route path="/employeeList" element={<EmployeeList/>}/>
      <Route path="/addEmployee" element={<AddEmployee/>}/>   
      <Route path="/editEmployee/:id" element={<UpdateEmployee/>}/>
   </Routes>  
  </Router>           
</>
  );
}

export default App;

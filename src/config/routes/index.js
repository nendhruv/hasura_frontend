import React from "react";

import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Login from "../../screens/Login";

import Dashboard from "../../screens/Dashboard";

function RoutesApp() {
  const [status, setStatus] = React.useState(null)
  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('login_status'))) {
      setStatus(true)
    }
  }, [status])

  return <>{
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={ <Login/>}>
        
      </Route>
             
        <Route path="/dashboard" element={<Dashboard/>}>
          
        </Route>
      </Routes>
    </BrowserRouter>
  }
  </>;
}


export default RoutesApp

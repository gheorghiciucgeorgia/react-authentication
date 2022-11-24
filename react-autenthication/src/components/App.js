import React from "react";
import { Container } from "react-bootstrap";
import AuthProvider from "../contexts/AuthContext";
import Signup from "./Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center" style={{ minheight: "100vh" }}>
      <div className="w-100" style={{ maxwidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/signup' element={<Signup />}/>
              <Route path='/login' element={<Login />}/>
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>

  )

}

export default App;
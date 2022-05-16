import React, { useState, useRef } from "react";
import authService from "../services/auth.service";
import { useNavigate } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";


function Login() {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  let formRef = useRef(null);

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem('login_status'))) {
      navigate('/dashboard')
    }
    else {
      navigate('/')
    }
  },[])

  const required = (value) => {
    if (!value) {
      return (
        <div className="text-12 error" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    formRef.current.validateAll();

    if (userEmail && userPassword) {
      authService.login(userEmail, userPassword).then(response => {
        if(response) {
          navigate('/dashboard')
        }
      })
    }
    else {
      alert("Both fields are mandatory!");
    }
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="offset-md-4 col-md-4">
          <div className="card login-card">
            <div className="login-card-image-content-container">
              <h4>Login to your account</h4>
            </div>
            <div className="card-body">
              <Form onSubmit={handleLogin} ref={formRef}>
                <div className="form-group">
                  <label className="text-12 label">
                    Email Address<sup className="required">*</sup>
                  </label>
                  <Input
                    type="email"
                    className="form-control"
                    placeholder="Enter your Email Address"
                    name="useremail"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label className="text-12 label" htmlFor="password">
                    Password<sup className="required">*</sup>
                  </label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your Password"
                    value={userPassword}
                   
                    onChange={(e) => setUserPassword(e.target.value)}
                    validations={[required]}
                  />
                </div>
                {/* {error && (
                  <div className="form-group">
                    <div className="text-12 error" role="alert">
                      {error}
                    </div>
                  </div>
                )} */}
                <div className="form-group row">
                  <button className="btn btn-primary col-md-4 offset-md-4" >

                      <span>Login</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login

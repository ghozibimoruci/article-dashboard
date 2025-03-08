// import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showRegister, setShowRegister] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const popupRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/article-list"); // Redirect if already logged in
    }
  }, []);

  const doLogin = () => {
    // uncomment below for integrate API
    // const API_URL = `url_login`
    // axios.post(API_URL, {
    //   params: {
    //     email: email,
    //     password: password
    //   }
    // })
    // .then(response => {
    //   handleLogin(response.data.access_token);
    // })
    // .catch(error => {
    //   console.log("Error : ", error);
    // })
    // uncomment above for integrate API
    // comment below for integrate API
    if(email === "admin@lalala.id" && password === "admin"){
      handleLogin("your_token");
    }
    // comment above for integrate API
  }

  const doRegister = () => {
    // uncomment below for integrate API
    // const API_URL = `url_registrasi`
    // const token = localStorage.getItem("token")
    // axios.post(API_URL, {
    //   body: {
    //     name: newName,
    //     email: newEmail,
    //     password: newPassword
    //   },
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    // .then(_ => {
    //   if(popupRef && popupRef.current){
    //     (popupRef.current as HTMLElement).click();
    //   }
    // })
    // .catch(error => {
    //   console.log("Error : ", error);
    // })
    // uncomment above for integrate API
    // comment below for integrate API
    if(confirm("Username: " + newEmail + ", Password: " + newPassword)){
      if(popupRef && popupRef.current){
        (popupRef.current as HTMLElement).click();
      }
    };
    // comment above for integrate API
  }

  const handleLogin = (myToken: string) => {
    localStorage.setItem("token", myToken);
    localStorage.setItem("user_detail", JSON.stringify({
        username: email, password
    }));
    navigate("/article-list");
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    doLogin();
  };

  const handleSubmitRegister = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    doRegister();
  };

  return (
    <div className="container py-1 py-md-4 py-xl-5">
        <div className="row justify-content-center">
            <div className="col-auto">
                {
                    showRegister ? 
                    
                    <div className="login-card card shadow-sm p-4">
                        <h1 className="mb-5">Registrasi</h1>
                        <div className="input-group mb-3">
                            <span className="input-group-text"> Name </span>
                            <input type="email" className="form-control" name="newName" value={newName} onChange={e => setNewName(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"> Email </span>
                            <input type="email" className="form-control" name="newEmail" value={newEmail} onChange={e => setNewEmail(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text"> Password </span>
                            <input type="password" className="form-control" name="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmitRegister}>Register</button>
                        <button type="button" className="btn btn-link text-decoration-none" onClick={() => setShowRegister(false)}>I already have an account</button>
                    </div> : 
                    <form onSubmit={handleSubmitLogin}>
                        <div className="login-card card shadow-sm p-4">
                            <h1 className="mb-5">Login</h1>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Email </span>
                                <input type="email" className="form-control" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Password </span>
                                <input type="password" className="form-control" name="password" value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="button" className="btn btn-link text-decoration-none" onClick={() => setShowRegister(true)}>I don't have an account</button>
                        </div>
                    </form>
                }
            </div>
        </div>
        <button className="position-absolute z-0 d-none" data-bs-target="#modalSuccessRegist" data-bs-toggle="modal" ref={popupRef}></button>
        <div className="modal fade" id="modalSuccessRegist" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true" aria-labelledby="exampleModalToggleLabel">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5">Success</h1>
              </div>
              <div className="modal-body">
                You have successfully register an account!
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-bs-dismiss="modal" onClick={() => {
                  setShowRegister(false);
                }}>Login</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;

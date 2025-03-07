import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showRegister, setShowRegister] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/article-list"); // Redirect if already logged in
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "your_token");
    localStorage.setItem("user_detail", JSON.stringify({
        username, password
    }));
    navigate("/article-list");
  };

  const handleSubmitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(username === "admin" && password === "admin"){
        handleLogin();
    }
  };

  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Username: " + newUsername + ", Password: " + newPassword);
    // handleLogin();
  };

  return (
    <div className="container py-1 py-md-4 py-xl-5">
        <div className="row justify-content-center">
            <div className="col-auto">
                {
                    showRegister ? 
                    <form onSubmit={handleSubmitRegister}>
                        <div className="login-card card shadow-sm p-4">
                            <h1 className="mb-5">Registrasi</h1>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Username </span>
                                <input type="text" className="form-control" value={newUsername} onChange={e => setNewUsername(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Password </span>
                                <input type="password" className="form-control" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                            <button type="button" className="btn btn-link text-decoration-none" onClick={() => setShowRegister(false)}>I already have an account</button>
                        </div>
                    </form> : 
                    <form onSubmit={handleSubmitLogin}>
                        <div className="login-card card shadow-sm p-4">
                            <h1 className="mb-5">Login</h1>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Username </span>
                                <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"> Password </span>
                                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button type="button" className="btn btn-link text-decoration-none" onClick={() => setShowRegister(true)}>I don't have an account</button>
                        </div>
                    </form>
                }
            </div>
        </div>
    </div>
  );
};

export default Login;

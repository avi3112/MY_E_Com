import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  // form function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        console.log(`${res.data.message}`);
        navigate("/");
      } else {
        console.log(`${res.data.message}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title="register -Ecom">
      <div className="register">
        <h1>Login Page </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

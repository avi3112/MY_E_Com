import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();

  // form function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, phone, password, address }
      );
      if (res.data.success) {
        console.log(`${res.data.message}`);
        navigate("/login");
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
        <h1>Register Page </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setaddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter you phone"
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
              placeholder="Enter you Address"
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

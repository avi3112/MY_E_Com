import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Copy @Techbazar</h1>
      <p className="text-center">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>
      </p>
    </div>
  );
};

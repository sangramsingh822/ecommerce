import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h4 className="text-center"> All right reserved &copy; Leotech</h4>
      <p>
        <Link to="/About">About</Link>|<Link to="/Contact">Contact</Link>|
        <Link to="/Policy">Privacy Policy</Link>
      </p>
    </div>
  );
}

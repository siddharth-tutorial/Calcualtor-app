import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>&nbsp;&nbsp;
      <Link to="/state">State</Link>&nbsp;&nbsp;
      <Link to="/counter">Counter</Link>&nbsp;&nbsp;
      <Link to="/calculator">Calculator</Link>&nbsp;&nbsp;
      <Link to ='/calculators'> Calculators</Link>&nbsp;&nbsp;
      
    
    </div>
  );
}

export default Header;

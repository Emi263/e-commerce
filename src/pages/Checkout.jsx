import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Checkout() {
  const value = useContext(ThemeContext);
  return <div>Checkout</div>;
}

export default Checkout;

import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function BoilerPlateCode() {
  const toastOptions = {
    position: "bottom-right",
    autoCloase: 8000,
    pauseOnhover: true,
    draggable: true,
    theme: "dark",
  };
  const notify = () => toast.error("Wow so easy!", toastOptions);

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default BoilerPlateCode;

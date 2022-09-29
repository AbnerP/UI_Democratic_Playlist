import React from 'react'
import { useNavigate } from "react-router-dom";

function LandingScreen() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Landing Screen</p>
      <button onClick={() =>
            navigate("/queue")
          }>Go to queue</button>
    </div>

  )
}

export default LandingScreen
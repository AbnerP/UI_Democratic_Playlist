import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function LandingScreen() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Landing Screen</p>
      {/* Join with code */}

      {/* Create Queue */}
      <Button variant="contained" onClick={() => navigate("/queue")}>
        Queue Page
      </Button>
    </div>
  );
}

const styles = {
  button: {
    backgroundColor: "red",
    border: "none",
  },
};

export default LandingScreen;

import React from "react";
import fire from "../../Firebase";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  React.useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        navigate("/signin");
      }
    });
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}>This is Profile</h1>
    </div>
  );
}

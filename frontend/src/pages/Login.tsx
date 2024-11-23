import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { TextField, Button, Box, Typography } from "@mui/material";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const employee = await login(username);
      localStorage.setItem("employee", JSON.stringify(employee));
      navigate("/profiles"); // Redirect to the profile page
    } catch (err) {
      setError(err);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        style={{ marginTop: "16px" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;

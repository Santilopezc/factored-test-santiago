import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

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
      setError(err.message || "Login failed");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{ backgroundColor: '#f5f5f5' }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          backgroundColor: "#ffffff",
          border: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: "center",
            marginBottom: 4,
            marginTop: 3,
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "#1a237e",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            "&::after": {
              content: '""',
              display: "block",
              width: "60px",
              height: "4px",
              backgroundColor: "#1a237e",
              margin: "12px auto",
              borderRadius: "2px",
            },
          }}
        >
          Login
        </Typography>
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            marginBottom: "16px",
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                borderColor: "#1a237e",
              },
            },
          }}
        />
        {error && (
          <Typography
            color="error"
            sx={{ marginBottom: "16px", fontSize: "0.9rem" }}
          >
            {error}
          </Typography>
        )}
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{
            marginTop: "16px",
            padding: "12px 24px",
            fontSize: "1rem",
            width: "100%",
            backgroundColor: "#1a237e",
            color: "#fff",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              backgroundColor: "#283593",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;

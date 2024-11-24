import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployees } from "../services/api";
import { Box, Typography, Card, CardContent, Avatar, Grid } from "@mui/material";

const ProfileOverview: React.FC = () => {
  const [employees, setEmployees] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployees()
      .then((data) => setEmployees(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box 
      padding={3} 
      sx={{
        backgroundColor: '#f5f5f5', // Light gray background
        minHeight: '100vh'
      }}
    >
      {/* Enhanced Title with custom styling */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          marginBottom: 4,
          marginTop: 3,
          fontWeight: 700,
          fontSize: '2.5rem',
          color: '#1a237e', // Deep blue color
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          '&::after': {
            content: '""',
            display: 'block',
            width: '60px',
            height: '4px',
            backgroundColor: '#1a237e',
            margin: '12px auto',
            borderRadius: '2px'
          }
        }}
      >
        Factored Employees
      </Typography>

      <Grid container spacing={4}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card
              onClick={() => navigate(`/profile/${employee.id}`)}
              sx={{
                cursor: "pointer",
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                borderRadius: "16px",
                transition: 'all 0.3s ease-in-out',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.18)',
                  backgroundColor: '#fafafa'
                }
              }}
            >
              <CardContent 
                sx={{ 
                  padding: "32px",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <Avatar
                  src={employee.avatar_url}
                  alt={employee.name}
                  sx={{
                    width: 120,
                    height: 120,
                    marginBottom: 3,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    border: '4px solid #fff'
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: 600,
                    fontSize: "1.25rem",
                    color: '#1a237e',
                    marginBottom: 1
                  }}
                >
                  {employee.name}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ 
                    color: '#5c6bc0',
                    fontSize: "1rem",
                    fontWeight: 500
                  }}
                >
                  {employee.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProfileOverview;
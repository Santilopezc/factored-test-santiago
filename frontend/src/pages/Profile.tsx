import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../services/api";
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options = {
  scales: {
    r: {
      min: 0,
      max: 10,
      beginAtZero: true,
      ticks: {
        stepSize: 2,
        color: '#666',
        font: {
          size: 12
        }
      },
      grid: {
        circular: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      pointLabels: {
        font: {
          size: 14,
          weight: '600'
        },
        color: '#1a237e'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(26, 35, 126, 0.9)',
      padding: 12,
      titleFont: {
        size: 14,
        weight: 'bold'
      },
      bodyFont: {
        size: 13
      }
    }
  }
};

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<any>(null);

  useEffect(() => {
    getEmployee(Number(id))
      .then(setEmployee)
      .catch(() => navigate("/"));
  }, [id, navigate]);

  if (!employee) return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );

  const skillsData = {
    labels: Object.keys(employee.skills),
    datasets: [
      {
        label: "Skill Level",
        data: Object.values(employee.skills),
        backgroundColor: "rgba(26, 35, 126, 0.2)",
        borderColor: "#1a237e",
        borderWidth: 2,
        pointBackgroundColor: "#1a237e",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#1a237e",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <Box 
      sx={{ 
        bgcolor: '#f5f5f5',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container maxWidth="md">
        <Button
          onClick={() => navigate("/profiles")}
          sx={{
            mb: 4,
            color: '#1a237e',
            '&:hover': {
              backgroundColor: 'rgba(26, 35, 126, 0.08)'
            }
          }}
        >
          ← Back to Employees
        </Button>

        <Paper
          elevation={0}
          sx={{
            p: 4,
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Avatar
              src={employee.avatar_url}
              alt={employee.name}
              sx={{
                width: 160,
                height: 160,
                marginBottom: 3,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '4px solid #fff'
              }}
            />
            
            <Typography
              variant="h4"
              sx={{
                color: '#1a237e',
                fontWeight: 700,
                mb: 1
              }}
            >
              {employee.name}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#5c6bc0',
                fontWeight: 500,
                mb: 4
              }}
            >
              {employee.position}
            </Typography>

            <Box 
              sx={{ 
                width: "100%",
                maxWidth: "500px",
                mb: 4
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#1a237e',
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'center'
                }}
              >
                Skills Overview
              </Typography>
              <Box sx={{ p: 2 }}>
                <Radar data={skillsData} options={options} />
              </Box>
            </Box>

            <Box width="100%">
              <Typography
                variant="h5"
                sx={{
                  color: '#1a237e',
                  fontWeight: 600,
                  mb: 2
                }}
              >
                Skills Details
              </Typography>
              <List sx={{ width: '100%' }}>
                {Object.entries(employee.skills).map(([skill, score]: [string, number]) => (
                  <ListItem 
                    key={skill}
                    sx={{
                      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                      py: 2
                    }}
                  >
                    <ListItemText 
                      primary={skill}
                      secondary={`Proficiency: ${score}`}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        color: '#1a237e'
                      }}
                      secondaryTypographyProps={{
                        color: '#5c6bc0'
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;
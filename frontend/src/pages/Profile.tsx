import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployee } from "../services/api"; // Create a function to fetch a single employee
import {
  Box,
  Typography,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import { Radar } from "react-chartjs-2";
// Import Chart.js components
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from "chart.js";
// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const options = {
    scales: {
      r: {
        min: 0, // Set the minimum value to 0
        max: 100, // Optional: Set a maximum value if desired
        ticks: {
          stepSize: 50, // Optional: Define step increments
        },
        grid: {
          circular: true, // Optional: Make grid lines circular
        },
      },
    },
    plugins: {
      legend: {
        position: "top", // Position the legend at the top
      },
    },
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

  if (!employee) return <div>Loading...</div>;

  const skillsData = {
    labels: Object.keys(employee.skills),
    datasets: [
      {
        label: "Skill Level",
        data: Object.values(employee.skills),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={3}
      marginTop={5}
    >
      <Avatar
        src={employee.avatar_url}
        alt={employee.name}
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <Typography variant="h5" gutterBottom>
        {employee.name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        {employee.position}
      </Typography>
      <Box sx={{ width: "300px", height: "300px" }}>
        <Radar data={skillsData} options={options}/>
      </Box>
      <Typography variant="h6" gutterBottom>
        Skills Details:
      </Typography>
      <List>
        {Object.entries(employee.skills).map(([skill, score]: [string, number]) => (
          <ListItem key={skill}>
            <ListItemText primary={`${skill}: ${score}`} />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigate("/profiles")}
        style={{ marginTop: "16px" }}
      >
        Back to Employees
      </Button>
    </Box>
  );
};

export default Profile;

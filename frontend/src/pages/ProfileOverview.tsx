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
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        Employees
      </Typography>
      <Grid container spacing={3}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card
              onClick={() => navigate(`/profile/${employee.id}`)}
              style={{ cursor: "pointer" }}
            >
              <CardContent>
                <Avatar
                  src={employee.avatar_url}
                  alt={employee.name}
                  sx={{ width: 100, height: 100, margin: "auto" }}
                />
                <Typography variant="h6" align="center">
                  {employee.name}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
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

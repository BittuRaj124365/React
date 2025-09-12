import React from "react";
import { Container, CssBaseline, Box, Grid } from "@mui/material";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
export default function MyLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container spacing={2}>
          {/* Left big container */}
          <Grid item xs={8}>
            <Box
              sx={{
                height: "70vh",
                width: "100%",
                overflow: "hidden",
                borderRadius: "12px",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Big"
                style={{
                  width: "100%",
                  height: "65vh",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </Box>
          </Grid>

          {/* Right two vertical small containers */}
          <Grid item xs={4} container direction="column" spacing={2}>
            <Grid item>
              <Box
                sx={{
                  height: "20vh",
                  width: "45vh",
                  bgcolor: "#cfe8fc",
                  borderRadius: "12px",
                }}
              >
                <WatchLaterIcon/>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "20vh",
                  width: "45vh",
                  bgcolor: "#f5c6cb",
                  borderRadius: "12px",
                }}
              >
                <DirectionsRunIcon/>
              </Box>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  height: "20vh",
                  width: "45vh",
                  bgcolor: "#c61325ff",
                  borderRadius: "12px",
                }}
              >
                <FitnessCenterIcon/>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

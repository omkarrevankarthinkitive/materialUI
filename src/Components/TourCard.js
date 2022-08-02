import React from "react";
import {
  Paper,
  Card,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 13,
          },
        },
      ],
    },
  },
});

function TourCard({ src, name, duration, rating, numberOfReviews, price }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={src} alt={name} className="imageNig" />
          <Box paddingX={1}>
            <Typography variant="subtitle1" component="h2">
              {name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {duration} hrs
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={3}
            >
              <Rating
                name="read-only"
                value={rating}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {rating}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={1.5}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="h3" marginTop={0}>
                From C ${price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
}

export default TourCard;

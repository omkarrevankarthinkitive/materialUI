import React from "react";
import PageOne from "../Components/PageOne";

import Heading from "../Components/Heading";
import TourCard from "../Components/TourCard";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import cities from "../Data.json";
import "../App.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="App">
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} Tours
            </Typography>
            <Link to="/:d">
              <Grid container spacing={5}>
                {city.tours.map((tour, index) => (
                  <TourCard
                    src={tour.image}
                    name={tour.name}
                    duration={tour.duration}
                    rating={tour.rating}
                    numberOfReviews={tour.numberOfReviews}
                    price={tour.price}
                    key={index}
                  />
                ))}
              </Grid>
            </Link>
          </>
        ))}
      </Container>
    </div>
  );
}

export default Home;

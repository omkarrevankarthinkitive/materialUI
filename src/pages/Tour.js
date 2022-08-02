import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PhotoClg from "./PhotoClg";
function Tour() {
  return (
    <div>
      <Container>
        <Typography
          sx={{
            fontSize: "2.3rem",
            marginTop: "1rem",
          }}
        >
          welcome to the las vegassss
        </Typography>
        <Box marginTop={3} sx={{ display: "flex" }}>
          <img
            src="https://images.ctfassets.net/rxqefefl3t5b/5QX5qG3dBxzfT3rwyTmVIb/ff5224e4d76af8b9021fb409cf2641e9/shutterstock_1499600606_copy.jpg?fl=progressive&q=80"
            alt=""
            height={325}
          />
          <PhotoClg />
        </Box>
        <Box
          sx={{
            marginTop: 1,
          }}
        >
          <Typography variant="h2" sx={{ padding: 1 }}>
            About this ticket
          </Typography>
          <Typography>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum
          </Typography>
        </Box>
        <Box></Box>
      </Container>
    </div>
  );
}

export default Tour;

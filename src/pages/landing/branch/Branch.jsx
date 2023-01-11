import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import img from "./../../../assets/image/png/faq.png";

const Branch = () => {
  const theme = useTheme();
  return (
    <div style={{ margin: 30 }}>
      <h2> سوالات متداول </h2>

      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <img src={img} alt="aaaaa" />
        </div>
        <div style={{ flex: 2 }}>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "red", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>شعبه تهران (تالار بزرگمهر)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 2 }}>
                    <p></p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                  <div style={{ flex: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                          <SkipNextIcon />
                        ) : (
                          <SkipPreviousIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                          <SkipPreviousIcon />
                        ) : (
                          <SkipNextIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                  />
                </Card>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "red", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>شعبه تهران (تالار بزرگمهر)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 2 }}>
                    <p></p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                  <div style={{ flex: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                          <SkipNextIcon />
                        ) : (
                          <SkipPreviousIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                          <SkipPreviousIcon />
                        ) : (
                          <SkipNextIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                  />
                </Card>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "red", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>شعبه تهران (تالار بزرگمهر)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 2 }}>
                    <p></p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                  <div style={{ flex: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                          <SkipNextIcon />
                        ) : (
                          <SkipPreviousIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                          <SkipPreviousIcon />
                        ) : (
                          <SkipNextIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                  />
                </Card>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "red", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>شعبه تهران (تالار بزرگمهر)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 2 }}>
                    <p></p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </div>
                  <div style={{ flex: 1 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>

                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        Mac Miller
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    >
                      <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                          <SkipNextIcon />
                        ) : (
                          <SkipPreviousIcon />
                        )}
                      </IconButton>
                      <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                          <SkipPreviousIcon />
                        ) : (
                          <SkipNextIcon />
                        )}
                      </IconButton>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    alt="Live from space album cover"
                  />
                </Card>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Branch;

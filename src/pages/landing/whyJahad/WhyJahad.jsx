import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import img from "./../../../assets/image/png/logo.png";

export default function WhyJahad() {
  return (
    <div>
      <h2> چرا صبا باد </h2>

      <div style={{ display: "flex", marginTop: "3%", paddingBottom: "3%" }}>
        <Card sx={{ maxWidth: 360 }} style={{ margin: 15 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              width="60"
              image={img}
              alt="green iguana"
            />
            <CardContent style={{ paddingLeft: -130 }}>
              <Typography gutterBottom variant="h5" component="div">
                بورس کالا
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              مطالب بیشتر
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 360 }} style={{ margin: 15 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              width="60"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                بورس کالا
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              مطالب بیشتر
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 360 }} style={{ margin: 15 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="150"
              width="60"
              image={img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                بورس کالا
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              مطالب بیشتر
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

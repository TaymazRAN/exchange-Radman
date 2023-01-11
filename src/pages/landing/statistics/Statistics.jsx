import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "./../../../assets/image/png/logo.png";

export default function Statistics() {
  return (
    <div>
      <div style={{ display: "flex", marginTop: "5%", paddingBottom: "5%" }}>
        <Card sx={{ maxWidth: 240 }} style={{ margin: 15 }}>
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
                اولین
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 240 }} style={{ margin: 15 }}>
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
                رتبه در کل
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 240 }} style={{ margin: 15 }}>
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
        </Card>
        <Card sx={{ maxWidth: 240 }} style={{ margin: 15 }}>
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
        </Card>
      </div>
    </div>
  );
}

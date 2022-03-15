import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, AvatarGroup, Divider } from "@mui/material";

export default function ImgMediaCard({ obj }) {
  return (
    <Card>
      {obj.imgUrl && (
        <CardMedia
          component="img"
          alt="green iguana"
          height="250"
          image={obj.imgUrl}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {obj.name}
        </Typography>
        <Button
          variant="contained"
          color={
            obj.status.toLowerCase() === "finished"
              ? "primary"
              : obj.status.toLowerCase().trim() === "inprogress"
              ? "warning"
              : "error"
          }
          sx={{ borderRadius: 8, py: "2px", fontSize: "12px", my: 1 }}
        >
          {obj.status.toLowerCase() === "finished"
            ? "Finished"
            : obj.status.toLowerCase().trim() === "inprogress"
            ? "In Progress"
            : "On Hold"}
        </Button>
        <Typography variant="body2" color="text.secondary">
          {obj.description}
        </Typography>

        <AvatarGroup total={24} sx={{ pt: 2 }}>
          <Avatar alt={obj.name} src={""} />
        </AvatarGroup>
      </CardContent>
      <Divider />
      <CardActions>
        <Button size="small" sx={{ fontSize: "0.5em" }}>
          Share
        </Button>
        <Button size="small" sx={{ fontSize: "0.5em" }}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

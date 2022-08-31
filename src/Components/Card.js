import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import classes from './Card.module.css'


export default function ActionAreaCard() {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"
          image="./rabano.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Verdura
          </Typography>
          <Typography variant="body2" color="text.secondary">
            $500
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

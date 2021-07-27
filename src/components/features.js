import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { StaticImage } from "gatsby-plugin-image"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
export default function MediaCard() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
        <StaticImage src="https://placekitten.com/800/800" alt="A kitten" style={{
          gridArea: "1/1", borderRadius: "50%", marginTop: "-100px", border: "25px solid #FDF9E7"
        }} />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Community-driven menus
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Easily peruse your favorite menus and discover new adventures along the way!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Beautiful printed & digital layouts
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Choose from a variety of configurable templates to view on your device or print
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  Great for restaurants too!
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  You focus on what you do best and we'll help provide your customers choose their next meal
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
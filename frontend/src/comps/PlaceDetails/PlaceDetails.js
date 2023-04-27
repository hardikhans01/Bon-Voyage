import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <Card elevation={6} style={{ height: 650 }}>
      <CardMedia
        style={{ height: 350 }}
        image={place.max_photo_url ? place.max_photo_url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom className={classes.chamak} variant="h5">{place.hotel_name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Typography className={classes.cardsty} component="legend">{place.review_score_word ? place.review_score_word : 'Unrated'}</Typography>
          <Typography className={classes.cardsty} component="legend">{place.review_nr} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Typography className={classes.cardsty} component="legend">Price</Typography>
          <Typography className={classes.cardsty} gutterBottom variant="subtitle1">
            Rs {Math.round(Number(place.min_total_price))}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
        <Typography className={classes.cardsty} component="legend"><LocationOnIcon /></Typography>
        <Typography gutterBottom component="legend" className={classes.addsty}>
          {place.address}
        </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button className={classes.cardsty} color="primary" onClick={() => window.open(place.url, '_blank')}>
          Book Hotel
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;

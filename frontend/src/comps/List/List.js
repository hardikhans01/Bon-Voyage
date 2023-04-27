import axios from 'axios';
import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';

const List = ({ places, childClicked, isLoading, lat, lng, hotelData, setHotelData }) => {
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
    }, [places]);

    useEffect(() => {
        axios.get(`http://localhost:4040/sharepost?lat=${lat}&lng=${lng}`)
            .then((response) => {
                setHotelData(response.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .finally(() => {
                // always executed
            });
    }, []);
    return (
        <div className={classes.container}>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="4rem" />
                </div>
            ) : (
                <>
                    {hotelData?.length === 0 ? (
                        <Typography variant="h3" className={classes.nirasha}>Sorry! Result Not Found :(</Typography>
                        ) : (
                        <Grid container spacing={3} className={classes.list}>
                            {hotelData.map((hotel, i) => (
                                <Grid ref={elRefs[i]} key={i} item xs={12} md={4}>
                                    <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={hotel} />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </>
            )}
        </div>
    );
};

export default List;

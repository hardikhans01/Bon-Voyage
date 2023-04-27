import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import List from '../comps/List/List';
import axios from 'axios';
import { useLocation } from "react-router-dom"
import logo from './logo5.png'
import { useHistory } from "react-router-dom";
import routeUrl from "../constants/routeUrl"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
  };

  console.log(searchInput);
  const { push } = useHistory();
  const goToHome = (e) => {
    push(routeUrl.HOME_PAGE);
  };
  return <div>
      <br></br>
      <div style={{display:'flex'}}>
      <img src={logo} alt='' onClick={goToHome} style={{height:'8rem',display:'inline',marginRight:'62rem',marginTop:'0.5rem'}}></img>
      <h1 className="expnew" style={{marginTop:'28px'}}>Explore New places</h1>
      <input
          type="search"
          placeholder="Search any place"
          onChange={handleChange}
          value={searchInput}
          className="searchba"
          style={{margin: '15px',backgroundColor:'pink',marginTop:'22px'}}
          onKeyDown={e => {
              console.log(e.key)
              if (e.key === "Enter") { window.location.href = `/search?city=${searchInput}`; console.log('here') }
          }}
      />
      </div>
  </div>
};

const Header = ({ setHotelData, onLoad, setIsLoading }) => {
  console.log(onLoad);
  const [city, setCity] = React.useState('');
  const location = useLocation()

  useEffect(() => {
    if (location.search) {
      const c = location.search.substring(6)
      if (c) {
        setCity(c)
        getCoords(c)
      }
    }
  }, [location])

  const getCoords = (city) => {
    axios.get(`http://localhost:4040/getLatLng?cityName=${city}`)
      .then((response) => {
        console.log(response.data);
        setHotelData(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return(
    <div style={{paddingLeft: '35px'}}>
      <SearchBar/>
    </div>
    
  );
};

const App2 = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [hotelData, setHotelData] = useState([]);
  console.log(setBounds, setChildClicked);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setIsLoading(true);
    }
  }, [bounds, type]);

  const onLoad = (autoC) => setAutocomplete(autoC);

  console.log(autocomplete);

  return (
    <div>
      <> 
        <CssBaseline />
        <Header setHotelData={setHotelData} onLoad={onLoad} setIsLoading={setIsLoading} isLoading={isLoading} />
        
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List
              lat={coords.lat}
              lng={coords.lng}
              setHotelData={setHotelData}
              hotelData={hotelData}
              isLoading={isLoading}
              childClicked={childClicked}
              places={filteredPlaces.length ? filteredPlaces : places}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
              setIsLoading={setIsLoading}
            />
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default App2;

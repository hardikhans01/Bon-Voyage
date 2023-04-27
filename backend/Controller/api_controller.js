// api used for fetching data
const axios = require('axios');

const lt = (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      params: {
        units: 'metric',
        room_number: '1',
        longitude: req.query.lng,
        latitude: req.query.lat,
        filter_by_currency: 'AED',
        order_by: 'popularity',
        locale: 'en-gb',
        checkout_date: '2023-09-28',
        adults_number: '2',
        checkin_date: '2023-09-27',
        children_ages: '5,0',
        include_adjacency: 'true',
        children_number: '2',
        page_number: '0',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1'
      },
      headers: {
        'X-RapidAPI-Key': `${process.env.BOOKING_API_KEY}`,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    let rd
    return axios.request(options).then(function (response) {
      rd = [...response.data.result];
      const hotel_data = []

      rd.filter((hotel) => {
        let obj = { hotel_name: null, review_score_word: null }
        obj["hotel_name"] = hotel.hotel_name;
        obj["review_score_word"] = hotel.review_score_word
        obj["address"] = hotel.address
        obj["review_nr"] = hotel.review_nr
        obj["min_total_price"] = hotel.min_total_price
        obj["max_photo_url"] = hotel.max_photo_url
        obj["url"] = hotel.url

        hotel_data.push(obj)
      })
      res.status(200).json(hotel_data);

    }).catch(function (error) {
      console.error(error);
    });

  } catch (err) {
    console.log(err);
  }
};

const dt = (req, res, lat, lng) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      params: {
        units: 'metric',
        room_number: '1',
        longitude: lng,
        latitude: lat,
        filter_by_currency: 'AED',
        order_by: 'popularity',
        locale: 'en-gb',
        checkout_date: '2023-09-28',
        adults_number: '2',
        checkin_date: '2023-09-27',
        children_ages: '5,0',
        include_adjacency: 'true',
        children_number: '2',
        page_number: '0',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1'
      },
      headers: {
        'X-RapidAPI-Key': `${process.env.BOOKING_API_KEY}`,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    let rd
    return axios.request(options).then(function (response) {
      rd = [...response.data.result];
      const hotel_data = []

      rd.filter((hotel) => {
        let obj = { hotel_name: null, review_score_word: null }
        obj["hotel_name"] = hotel.hotel_name;
        obj["review_score_word"] = hotel.review_score_word
        obj["address"] = hotel.address
        obj["review_nr"] = hotel.review_nr
        obj["min_total_price"] = hotel.min_total_price
        obj["max_photo_url"] = hotel.max_photo_url
        obj["url"] = hotel.url

        hotel_data.push(obj)
      })
      return hotel_data;
    }).catch(function (error) {
      console.error(error);
    });

  } catch (err) {
    console.log(err);
  }
};

const getLatLng = (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${req.query.cityName}&limit=5&appid=${process.env.WEATHER_API_KEY}`,
  };

  axios.request(options).then(async (response) => {
    let lat, lng;
    const ll = response.data;
    ll.filter((ltlng) => {
        lat = ltlng.lat;
        lng = ltlng.lon;
    })
    ll.filter((ltlng) => {
      if (ltlng.country === 'IN') {
        lat = ltlng.lat;
        lng = ltlng.lon;
      }
    })
    const data = await dt(req, res, lat, lng);
    res.status(200).json(data);
  }).catch(function (error) {
    console.error(error);
  });
}

module.exports = { getLatLng, lt };

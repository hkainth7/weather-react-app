import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import WeatherApp from './Apps/WeatherApp';


function App() {

	const [lat, setLat] = useState(undefined);
	const [long, setLong] = useState(undefined);

	useEffect(() => {
		const fetchData = async () => {
			await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_LOCATION_KEY}`, {method:'POST', contentType:'application/json'})
				.then(res => res.json())
				.then(result => {
					setLat(result.location.lat);
					setLong(result.location.lng);
					})
				.catch(error => {
					console.log(error);
				});
		}

		fetchData();
	}, [])

  return (
	<div className="App">
		{/* Contributed logical fix by Shawn Norman:  https://github.com/shnrmn*/}
		{(typeof lat != 'undefined' && typeof long != 'undefined') ? (<WeatherApp lat={lat} long={long}/>) : (<div>Loading...</div>)}
	</div>
  );
}

export default App;

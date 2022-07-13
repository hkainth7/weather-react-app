import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import WeatherApp from './Apps/WeatherApp';


function App() {

	const [lat, setLat] = useState(undefined);
	const [long, setLong] = useState(undefined);

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(position => {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			})
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

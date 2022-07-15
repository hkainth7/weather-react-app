import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import WeatherApp from './Widget/WeatherApp';


function App() {

	const [lat, setLat] = useState(undefined);
	const [long, setLong] = useState(undefined);

	useEffect(() => {
		
		navigator.geolocation.getCurrentPosition(position => {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
		})

	}, []);

  return (
	<div className="App">
		{/* Contributed logical fix by Shawn Norman:  https://github.com/shnrmn*/}
		{(typeof lat != 'undefined' && typeof long != 'undefined') ? (<WeatherApp lat={lat} long={long}/>) : (<div>Loading...</div>)}
	</div>
  );
}

export default App;

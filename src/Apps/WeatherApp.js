import './WeatherApp.css';
import { useEffect, useState } from 'react';
import Weather from '../components/Weather';

function WeatherApp({lat, long}) {

	const [data, setData] = useState({});

	lat = Math.floor(lat * 100) / 100;
	long = Math.floor(long * 100) / 100;

	useEffect(() => {
		
		const fetchData = async () => {
			if (lat && lat.toString().length > 0 && long && long.toString().length > 0){

				

				await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&aqi=no/`)
					.then(res => res.json())
					.then(result => {
						setData(result);
					})
					.catch(error => {
						console.log(error);
					});
			} else setData({});

		}
		fetchData();
	}, [lat, long])

  return (
	<div className="App">
		{(typeof data.current != 'undefined') ? (<Weather weatherData={data}/>) : (<div>Loading...</div>)}
	</div>
  );
}

export default WeatherApp;

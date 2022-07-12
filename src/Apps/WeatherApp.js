import './WeatherApp.css';
import { useEffect, useState } from 'react';
import Weather from '../components/Weather';

function WeatherApp({lat, long}) {

	const [data, setData] = useState({});

	useEffect(() => {
		
		const fetchData = async () => {


			await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${lat},${long}&aqi=no`)
				.then(res => res.json())
				.then(result => {
					setData(result);
					})
				.catch(error => {
					console.log(error);
					});

		}
		fetchData();
	}, [lat, long])

  return (
	<div className="App">
		{(typeof data.current != 'undefined') ? (<Weather weatherData={data}/>): (<div>Loading...</div>)}
	</div>
  );
}

export default WeatherApp;

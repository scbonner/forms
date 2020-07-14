// import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import WeatherCard from "./WeatherCard";

// const fetchWeatherData = () =>
//   fetch.get(
//     "https://api.openweathermap.org/data/2.5/forecast/daily?id=1581129&APPID=f5021250979d6a49f4005170d1cf82a3&units=metric"
//   );

// export default function Home() {
//   const [city, setCity] = useState({});

//   const [daily, setDaily] = useState([]);

//   useEffect(() => {
//     fetchWeatherData().then(res => {
//       console.log(res);
//       setCity(res.data.city);
//       setDaily(res.data.list);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Weather Forecast</h1>
//       <p>
//         Location:
//         <b>
//           {city.name}, {city.country}
//         </b>
//       </p>
//       <div className="d-flex">
//         {daily.map((day, i) => (
//           <WeatherCard
//             key={i}
//             className="mg"
//             dateTime={day.dt}
//             icon={day.weather[0].icon}
//             main={day.weather[0].main}
//             temp={day.temp.day}
//             feelsTemp={day.feels_like.day}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


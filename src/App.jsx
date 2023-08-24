import React, { useEffect, useState } from 'react';
import summer from './assets/summer1.jpeg';
import cold from './assets/coldbg.jpeg';
import Desc from './Components/Desc';
import { getWeatherData } from './GetApi';

function App() {
  const [weather, setWeather] = useState(null);
  const  [city,setCity] = useState("Sylhet");
  const [bg,setBg] = useState(summer);
   
  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData(city);
      setWeather(data); 

      const temperature = parseFloat(data.temp);
      console.log("Parsed Temperature:", temperature);

     
      if (!isNaN(temperature)) {
        if (temperature >= 20) {
          setBg(summer);
        } else {
          setBg(cold);
        }

        }
      

    }; 

     

    fetchData();


  }, [city]); 

 
  const handleCity = (event) => 
  {
    const val = event.target.value;
    console.log(val);
    setCity(val);
  }

  return (
    <> 
    <head>  <meta name="viewport" content="width=device-width, initial-scale=1"></meta></head>
   
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="layout">
        <div className="container">
          <div className="input_section" onChange={handleCity}>
            <input type="text" placeholder='Enter City Name' />
          </div>

          {weather && (
            <div className="temp">
              <h1>{weather.name}</h1>
              <h2>{weather.temp.toFixed()}°C</h2>
              <h4>{weather.description}</h4>
            </div>
          )}

       {weather && <Desc weather={weather} />}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

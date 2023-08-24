const API_key = '3efc512f53500b40e317cb87d498d9a2';

const getWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=${units}`;

  //const data = await fetch(URL).then((res) => res.json());

  try 
  {
    const res = await fetch(URL);
    if(!res.ok)
    {
      throw new Error(`HTTP error! Status: ${res.status}`);
     
    } 

   const data = await res.json();

    const {
      weather,
      main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
      wind: { speed },
      sys: { country },
      name,
    } = data;
  
    const { description, icon } = weather[0]; 

     
return {
  description,
  temp,
  feels_like,
  temp_min,
  temp_max,
  pressure,
  humidity,
  name,
  country,
  icon,
  speed,
};
   

} 
catch (error) {
  console.error("An error occurred:", error);
  throw error; // You can rethrow the error to handle it further if needed
} 


};

export { getWeatherData };

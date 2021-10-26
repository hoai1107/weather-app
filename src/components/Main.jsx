import Current from './Current';
import Daily from './Daily';
import SearchLocation from './SearchLocation';
import { useState, useEffect } from 'react';

const axios = require('axios');

const Main = () => {
  const [isLoading,setLoading] = useState(true);
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);
  const [location, setLocation] = useState('Ho Chi Minh City');

  const [latitude, setLatitude] = useState(10.8231);
  const [longitude, setLongitude] = useState(106.6297);

  useEffect(() => {
    const getData  = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=0b742b8934784ad41bb88b2d941a6d5a`);
      const { current, daily } = await response.data;

      setCurrent(current);
      setDaily(daily);
      setLoading(false);
    };

    setLoading(true);
    getData();
  },[latitude,longitude]);

  if(isLoading){
    return(
      <div className="flex justify-center items-center flex-col mt-20">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-700"></div>
        <p
          className="mt-20 font-quicksand text-xl text-cyan-700"
        >Fetching data ...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="my-16 flex flex-col justify-center items-center">
        <SearchLocation 
          setLocation={setLocation}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
        />
        <Current
          data={current}
          location={location} 
        />
        <Daily 
          data={daily}
        />
      </div>
    </div>
    
  );
};


export default Main;
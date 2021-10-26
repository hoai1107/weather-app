import styled from "styled-components";
import Icons from './Icons';

const ICON_COLOR = {
  800: "text-yellow-400",
  801: "text-blue-300",
  802: "text-blue-300",
  803: "text-blue-300",
  804: "text-blue-300",
  600: "text-indigo-200",
  500: "text-blue-500",
  300: "text-blue-500",
  200: "text-indigo-900"
};

const Temperature = styled.div`
  font-size: 3rem;

  &:after {
    content: "°C";
  }
`;

const Details = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2{
    font-size: 1.5rem;
  }

  h4{
    color: #707070;
  }
`;

const Current = ({ data, location }) => {
  var {
    dt: timestamp,
    sunrise,
    sunset,
    temp,
    humidity,
    weather : [
      {
        id: weather_id,
        main: main_weather,
        description
      }
    ],
    wind_speed,
  } = data;

  var date = new Date(timestamp*1000).toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  description = description.split(" ").map(word => {
    return word[0].toUpperCase() + word.substring(1);
  }).join(" ");

  return (
    <div 
      className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 p-10 font-quicksand justify-items-center items-center shadow-lg rounded-xl"
      style={{backgroundColor :"rgba(255, 255, 255, 0.95)"}}
    >
      <div class="w-full md:w-3/4">
        <h3 className="text-4xl font-quicksand text-cyan-600">{location}</h3>
        <h5 className="text-gray-500 text-lg">{date}</h5>
        <div className="flex flex-row items-center gap-6 justify-start mt-6 flex-grow">
          <Icons
            id={weather_id}
            size={`9xl`}
            sunrise={sunrise}
            sunset={sunset}
            dt={timestamp}
          />
          <Temperature>{temp.toFixed(0)}</Temperature>
        </div>
        
      </div>

      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-2 rounded-lg w-3/4">
        <div className="text-lg p-10 rounded-lg bg-white">
          <ul className="flex flex-col gap-4">
            <Details>
              <div className={`text-4xl font-medium ${ICON_COLOR[weather_id]}`}>{main_weather}</div>
            </Details>
            <Details>
              <h2 className="text-center">{description}</h2>
              <h4>Description</h4>
            </Details>
            <Details>
              <h2>{humidity}%</h2>
              <h4>Humidity</h4>
            </Details>
            <Details>
              <h2>{wind_speed} m/s</h2>
              <h4>Wind Speed</h4>
            </Details>
          </ul>
        </div>
      </div>
      
    </div>
  )
};

export default Current;
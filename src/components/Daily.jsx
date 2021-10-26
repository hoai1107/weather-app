import Icons from "./Icons";
import { nanoid } from "nanoid";
import styled from "styled-components";

const Temperature = styled.span`
  &:after {
    content: "°C";
  }
`;

const Daily = ({ data }) =>{
  var daily = data.map(day => {
    let {
      dt,
      sunrise,
      sunset,
      temp:{
        max: max_temp,
        min: min_temp
      },
      weather: [
        {
          id,
          main
        }
      ]
    } = day;

    return {dt, max_temp, min_temp, id, main, sunrise, sunset};
  });

  daily = daily.map(element => {
    let options = { weekday: 'short', month: 'long', day: 'numeric' };
    let time = new Date(element.dt*1000).toLocaleString('en-US',options);

    return {...element, date: time};
  });


  return(
    <div className="mt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10">
        {
          daily.map(element => {
            return(
              <div 
                className="p-5 flex flex-col justify-center items-center shadow-lg text-lg rounded-2xl font-quicksand"
                style={{backgroundColor :"rgba(255, 255, 255, 0.95)"}}
                key={nanoid()}
              >
                <p 
                  style={{
                    color: "#345B63",
                    fontWeight: '700'
                  }}>
                  {element.date}</p>
                <Icons 
                  id={element.id} 
                  size={`6xl`} 
                  dt={element.dt} 
                  sunrise={element.sunrise} 
                  sunset={element.sunset}
                />
                <p>{element.main}</p>
                <p><Temperature>{element.min_temp.toFixed()}</Temperature>
                /<Temperature>{element.max_temp.toFixed()}</Temperature></p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default Daily;
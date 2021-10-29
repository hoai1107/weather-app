import { WiDaySunny, WiCloudy, WiDayCloudy, WiSnow, WiShowers, WiFog, WiNightClear, WiNightCloudy, WiDayRain, WiNightRain, WiDayStormShowers, WiNightStormShowers } from "react-icons/wi";

const ICON_ID = {};
const ICON_COLOR = {};

function Selectors({ id, size, sunrise, sunset, dt, setColor = null}){
  var [icon,color] = (dt >= sunrise && dt <= sunset) ? [ICON_ID[id].day, ICON_COLOR[id].day] : [ICON_ID[id].night, ICON_COLOR[id].night]
  setColor != null ? setColor(color) : void(0);
  return (
    <div className={`text-${size} ${color}`}>
      {icon}
    </div>
  )
}

function setIcon(id_Arr, iconDay, colorDay, iconNight=iconDay, colorNight=colorDay){
  id_Arr.forEach(el => {
    ICON_COLOR[el] = {
      day: colorDay,
      night: colorNight
    };
    ICON_ID[el] = {
      day: iconDay,
      night: iconNight
    };
  })
};

setIcon([500,501,502,503,504],<WiDayRain />, "text-blue-500", <WiNightRain />);
setIcon([600,601,602,611,612,613,615,616,620,621,622], <WiSnow />, "text-indigo-200");
setIcon([701,711,721,731,741,751,761,762], <WiFog />, "text-bluegray-600");
setIcon([802,803,804], <WiCloudy />, "text-blue-300");
setIcon([801], <WiDayCloudy />, "text-blue-300", <WiNightCloudy />);
setIcon([800], <WiDaySunny />, "text-yellow-400", <WiNightClear />, "text-blue-900");
setIcon([520,521,522,531,300,301,302,310,311,312,313,314,321], <WiShowers />, "text-blue-500");
setIcon([200,201,202,210,211,212,221,230,231,232], <WiDayStormShowers />, "text-indigo-900", <WiNightStormShowers />);


const Icons = (props) => {
  console.log(props);
  return(
    <Selectors 
      {...props}
    />
  )
};

export default Icons;
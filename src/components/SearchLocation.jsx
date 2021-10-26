import { useForm } from "react-hook-form";
import styled from "styled-components";

const axios = require("axios");

const Warning = styled.p`
  color: #E02401;
`;

const SearchLocation = ({ setLocation, setLongitude, setLatitude }) => {
  const {register, handleSubmit, formState:{ errors }} = useForm();

  function getCoordinates(location){
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=0b742b8934784ad41bb88b2d941a6d5a`)
    .then(response => {
      const [{name , lat , lon}] = response.data;
      setLongitude(lon);
      setLatitude(lat);
      setLocation(name);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const onSubmit = (data) => {
    getCoordinates(data.location);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-20 relative w-full md:w-1/3">
      <input
        className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-400 border rounded-lg focus:outline-none font-quicksand"
        type="text" 
        placeholder="Enter your city/state/country name"
        defaultValue=""
        {...register("location", {pattern: /^[\w\s]+$/g})}
      />
      {errors.location && <Warning>Only alphanumeric characters, underscore and space allowed!</Warning>}

      <button type="submit" className="absolute inset-y-0 right-0 h-10 flex items-center px-4 font-bold text-white rounded-r-lg bg-bluegray-500 hover:bg-bluegray-700 
      focus:bg-bluegray-900 font-quicksand">Find</button>
    </form>
    

  )
}

export default SearchLocation;
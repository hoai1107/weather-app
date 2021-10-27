import { useForm } from "react-hook-form";
import styled from "styled-components";

const axios = require("axios");

const Warning = styled.p`
  color: #E02401;
`;

const SearchLocation = ({ setLocation, setLongitude, setLatitude }) => {
  const {register, handleSubmit, formState:{ errors }} = useForm();

  function getCoordinates(location){
    var options = {
      method: 'GET',
      url: 'https://trueway-geocoding.p.rapidapi.com/Geocode',
      params: {address: location, language: 'en'},
      headers: {
        'x-rapidapi-host': 'trueway-geocoding.p.rapidapi.com',
        'x-rapidapi-key': 'ef63d944a2msh12d905c0f669fc4p1ee825jsna5df504d0c29'
      }
    };

    axios.request(options)
    .then(response => {
      let[{
        region,
        country,
        location:{
          lat,
          lng
        }
      }] = response.data.results;

      var loc = `${region}, ${country}`;
      setLocation(loc);
      setLatitude(lat);
      setLongitude(lng);

    })
    .catch(error =>{
      console.error(error);
    })
  }

  const onSubmit = (data) => {
    getCoordinates(data.location);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-20 relative w-full md:w-1/3">
      <input
        className="w-full h-10 pl-3 pr-8 text-base placeholder-gray-400 border rounded-lg focus:outline-none font-quicksand"
        type="text" 
        placeholder="Enter your address or city/state/country name"
        defaultValue=""
        {...register("location", {pattern: /^[\w\s\/,]+$/g})} //eslint-disable-line
      />
      {errors.location && <Warning>Only alphanumeric characters, spaces and ",", "/" allowed!</Warning>}

      <button type="submit" className="absolute inset-y-0 right-0 h-10 flex items-center px-4 font-bold text-white rounded-r-lg bg-bluegray-500 hover:bg-bluegray-700 
      focus:bg-bluegray-900 font-quicksand">Find</button>
    </form>
    

  )
}

export default SearchLocation;
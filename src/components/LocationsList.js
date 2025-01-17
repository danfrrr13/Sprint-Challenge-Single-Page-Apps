import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setLocationData(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="location-list grid-view">
      {locationData.map(location => (
        <LocationCard location={location} key={location.id} />
      ))}
    </section>
  );
}

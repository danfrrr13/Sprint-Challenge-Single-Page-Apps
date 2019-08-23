import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setEpisodeData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        setEpisodeData(res.data.results);
        console.log(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="episode-list grid-view">
      {episodeData.map(episode => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </section>
  );
}

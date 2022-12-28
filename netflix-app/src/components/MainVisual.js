import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import requests from "../api/requests";

function MainVisual() {
  const [movie, setMovie] = useState({});
  const [img, setImg] = useState("");
  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(requests.fetchNowPlaying);
    //console.log(result.data.results[0]);
    setMovie(result.data.results[0]);
  };
  return (
    <Container>
      <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default MainVisual;

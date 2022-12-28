import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import requests from "../api/requests";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import "swiper/css";
import MovieItem from "./MovieItem";

function MainVisual() {
  const [movies, setMovies] = useState([]);
  const [img, setImg] = useState("");
  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(requests.fetchNowPlaying);
    //console.log(result.data.results[0]);
    setMovies(result.data.results);
  };
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  //console.log(ellipsis("동해물과 백두산이 마르고 닳도록", 100));
  return (
    <Container>
      <Swiper modules={[EffectFade]} effect="fade">
        {movies
          .filter((item, idx) => {
            if (idx < 10) {
              return true;
            }
          })
          .map((item, idx) => {
            return (
              <SwiperSlide>
                {/* <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} /> */}
                <MovieItem title={item.title} src={item.backdrop_path} desc={ellipsis(item.overview, 150)}></MovieItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export default MainVisual;

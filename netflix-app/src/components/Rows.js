import React, { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../api/api";
import MovieItem from "./MovieItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/pagination.css";

function Rows({ title, fetchURL, type }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    loadMovieData();
  }, []);
  const loadMovieData = async () => {
    const result = await api.get(fetchURL);
    //console.log(result.data.results[0]);
    setMovies(result.data.results);
  };
  const ellipsis = (str, total) => {
    return str.length > total ? str.substr(0, total - 1) + "..." : str;
  };
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper slidesPerView={5} spaceBetween={10}>
        {movies.map((item, idx) => {
          console.log(item.title);
          return (
            <SwiperSlide>
              <MovieItem title={item.title ? item.title : item.name} src={item.poster_path} desc={item.overview} type={type}></MovieItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
}
const Container = styled.section`
  width: 1400px;
  margin: 100px auto;
  h2 {
    font-size: 36px;
    margin-bottom: 50px;
    text-transform: capitalize;
    color: #fff;
    font-weight: 300;
    text-align: left;
  }
`;

export default Rows;

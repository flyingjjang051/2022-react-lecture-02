import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  //const [count, setCount] = useState(0);
  const movieId = useParams().id;
  console.log("🚀 ~ file: Detail.js:7 ~ Detail ~ movieId", movieId);
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState("");
  useEffect(() => {
    //prettier-ignore
    axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c3531c0fd9611d97111b750a606e8fdb&language=ko-KR`)
    .then((response)=>{
      setDetail(response.data);
      setGenres(response.data.genres.map(item=>item.name).join("/"));
    })
  }, []);

  return (
    <div className="container detail">
      <h2>영화제목</h2>
      <div className="detail-box">
        <div className="img-box">
          <img src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`} alt="" />
          <span className="point">{detail.vote_average}</span>
        </div>
        <div className="info">
          <div className="title-box">
            <h3>{detail.title}</h3>
            <p className="original-title">{detail.original_title}</p>
          </div>
          <div className="summary">
            <dl>
              <dt>장르</dt>
              <dd>{genres}</dd>
            </dl>
            <dl>
              <dt>개봉일</dt>
              <dd>{detail.release_date}</dd>
            </dl>
            <dl>
              <dt>상영시간</dt>
              <dd>{detail.runtime}분</dd>
            </dl>
            <dl>
              <dt>관객평점</dt>
              <dd>{detail.vote_average}</dd>
            </dl>
            <dl>
              <dt>관객투표</dt>
              <dd>{detail.vote_count}</dd>
            </dl>
          </div>
          <div className="overview-box">
            <p className="overview">{detail.overview}</p>
            <p className="vote">{detail.vote_count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

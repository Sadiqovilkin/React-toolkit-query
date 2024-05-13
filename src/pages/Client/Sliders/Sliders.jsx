import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Sliders.scss'

import { Pagination } from 'swiper/modules';
import { useGetAllMovieQuery } from '../../../services/movieQuery';
import { Link } from 'react-router-dom';
// const [deleteMovie, { isError, isSuccess }]  = useDeleteMovieMutation()
const Sliders = () => {

  const {
    data: movies,
    refetch,
  } = useGetAllMovieQuery();
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies && movies.map((el)=>
        <SwiperSlide key={el.id}>
        <div className="card">
            <div className="card-img">
                <img style={{width:"100%",height:"350px"}} src={el.posterImg} alt="" />
            </div>
            <div className="card-body">
                <h2>{el.title}</h2>
                <p>Genre:{el.genre}  <small>{el.releaseYear}</small></p>
            </div>
            <div className="card-btns">
              <button onClick={async()=>{
                // await deleteMovie(el.id)
                refetch()
              }} className='btn btn-danger '  >Delete</button>
              <Link className='btn btn-check '  to={`/sliders/${el.id}`}>Detail</Link>
             
            </div>
        </div>
    </SwiperSlide>
        ) }

      </Swiper>
    </>
  )
}

export default Sliders
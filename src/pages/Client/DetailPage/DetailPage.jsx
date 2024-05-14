import React from 'react'
import { useGetOneMovieQuery } from '../../../services/movieQuery';
import { Link, useParams } from 'react-router-dom';

const DetailPage = () => {
  let {id}=useParams()
  const {
    data: movie,
    refetch,
  } = useGetOneMovieQuery(id);
  console.log(movie);
  return (
    <>
   {movie &&  <div className="container">
   Detail Page {id}
   <div className="row">
     <div className="col-lg-10">
       <div className="col-lg-6">
         <img style={{width:"100%",height:"600px",objectFit:"cover"}} src={movie.posterImg} alt="" />
       </div>
       <div className="col-lg-6">
         <div className="card-desc">
           <h1>{movie.title}</h1>
           <p>Genre: {movie.genre}</p>
           <p>Release Year : {movie.releaseYear}</p>

           <div className="btns">
           <Link className="btn btn-warning " to={"/sliders"}>Go Back</Link>
           <button  >Edit</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>}
 </>
  )
}

export default DetailPage
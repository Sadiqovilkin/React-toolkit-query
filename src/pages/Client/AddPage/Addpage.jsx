// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";

// import { Input } from "antd";
// import { Button } from "@mui/material";

// import Swal from "sweetalert2";
// import { usePostMovieMutation } from "../../../services/movieQuery";
// import Movies from "../../../classes/Movie.class";
// const [ postMovie ] = usePostMovieMutation();




const AddPage = () => {

  // const navigate = useNavigate();
  
  // const formik = useFormik({
  //   initialValues: {
  //     title: "",
  //     posterImg: "",
  //     releaseYear: "",

  //   },
  //   onSubmit:(values)=> {
  //     const newMovie = new Movies(values.title , values.releaseYear , values.genre , values.posterImg)
  //     postMovie(newMovie);
  //     Swal.fire({
  //       position: "top-center",
  //       icon: "success",
  //       title: "Your work has been saved",
  //       showConfirmButton: false,
  //       timer: 1500
  //     }).then(() => navigate("/sliders"));
      
  //     values={
  //       title: "",
  //       posterImg: "",
  //       releaseYear: "",
  //     };
  //   },
  // });


  return (
    <>
      {/* <form onSubmit={formik.handleSubmit}
        style={{ width: "40%", margin: "180px auto" }}>
        <h1
          style={{ textAlign: "center", color: "blue", marginBottom: "15px" }}
        >
          Add Product
        </h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

          <Input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder='title'
          />
          {formik.errors.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <Input
            id="posterImg"
            name="posterImg"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.posterImg}
            placeholder="posterImg"

          />
          {formik.errors.posterImg && (
            <span style={{ color: "red" }}>{formik.errors.posterImg}</span>
          )}
          <Input
            id="realaseYear"
            name="realaseYear"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.realaseYear}
            placeholder="Cost Price"
          />
          {formik.errors.costrealaseYearPrice && (
            <span style={{ color: "red" }}>{formik.errors.realaseYear}</span>
          )}
          
          <Button type="submit" variant="contained" color="success">
            Success
          </Button>
        </div>
      </form> */}
  
    </>
  )
}

export default AddPage
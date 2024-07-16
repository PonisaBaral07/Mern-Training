import express from "express";
const app = express();
app.use(express.json());
const movieList = [
  {
    id: 1,
    name: "breaking Bad",
  },
  {
    id: 2,
    name: "Good Will Hunting",
  },
];
//add a movie
app.post("/movie/add", (req, res) => {
  const newMovie = req.body;
  movieList.push(newMovie);
  return res.status(200).send({ message: "Movie is successfully added" });
});

//get all movies
app.get("/movie/List", (req, res) => {
  console.log(req);
  return res.status(200).send({ message: "success", movies: movieList });
});

//get movie details by id
app.get("/movie/detail/:id", (req, res) => {
  //extract movie id from req.parameter
  const movieId = Number(req.params.id);
  const movie = movieList.find((m) => m.id === movieId);
  if (!movie) {
    res.status(404).send({ message: "movie not found" });
  }
  return res.status(200).send(movie);
});


//updating movies
app.put("/movie/update/:id", (req, res) => {
  const movieId = Number(req.params.id);
  const updatedMovie = req.body;
  const movieIndex = movieList.findIndex((m) => m.id === movieId);
  movieList[movieIndex] = updatedMovie;
  return res.status(200).send({message:"Movie updated Sucessfully!"})
});

// delete 
app.delete("/movie/delete/:id",(req,res)=>{
  //finding the id
  const movieId = Number(req.params.id);
  const movieIndex=movieList.findIndex((m)=>m.id===movieId);
  if(movieId>movieList.length){
    return res.status(404).send({message:"Movie not found"});
  }
  movieList.splice(movieIndex,1);
  return res.status(200).send({message:"movie is deleted successfully"});

})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

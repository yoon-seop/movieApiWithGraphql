export const movies = [
  {
    id: "1",
    name: "Inception",
    score: 100
  },
  {
    id: "2",
    name: "Avengers",
    score: 87
  },
  {
    id: "3",
    name: "Matrix",
    score: 90
  },
  {
    id: "4",
    name: "Glory",
    score: 99
  }
];

export const getMovieById = id => {
  const movieObject = movies.filter(movie => movie.id === String(id));
  return movieObject[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovie.length) {
    return true;
  } else {
    return false;
  }
};

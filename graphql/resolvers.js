import { movies, getMovieById, addMovie } from "./db";

const resolvers = {
  Query: {
    getMovies: () => movies,
    getMovieById: (_, { id }) => getMovieById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id)
  }
};

export default resolvers;

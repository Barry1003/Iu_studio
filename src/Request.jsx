 
const request = {
      requestPopular: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=cc451b2c897feac61cd2b1b97ca302eb`,
      requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=cc451b2c897feac61cd2b1b97ca302eb`,
      requestTrending: `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1&api_key=cc451b2c897feac61cd2b1b97ca302eb`,
      requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=cc451b2c897feac61cd2b1b97ca302eb`,
    };

export default request;

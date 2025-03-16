export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({
    query
}: {
    query: string
}): Promise<Movie[]> => {
    const endPoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${query}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=falsec`;

    const res = await fetch(endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });

    if (!res.ok) {
        //@ts-ignore
        throw new Error("Error in fetch movies", res.statusText)
    }

    const data = await res.json();

    return data.results;
}

export const fetchRecommendations = async (): Promise<Movie[]> => {
    const endPoint = `${TMDB_CONFIG.BASE_URL}tv/1/recommendations`

    const res = await fetch(endPoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    });


    if (!res.ok) {
        //@ts-ignore
        throw new Error("Error in fetch recommendations", res.statusText)
    }

    const data = await res.json();

    return data.results;
}
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

const API_KEY=process.env.API_KEY;
export default {
    fetchTrending:{
        title:"Trending",
        url:`trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies:{
        title:'Action',
        url:``
    },
    fetchHorrorMovies:{
        title:'Horror',
        url:``
    },
    fetchRomanceMovies:{
        title:'Romance',
        url:``
    },
    fetchMystery:{
        title:'Mystery',
        url:``
    },
    fetchSciFi:{
        title:'Sci-Fi',
        url:``
    },
    fetchLatest:{
        title:'latest',
        url:`/movie/latest?api_key=${API_KEY}&language=en-US`
    }
    
}
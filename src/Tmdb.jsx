 const API_KEY = '6cf7312fed68d5b6223594f484d7d705';
 const API_BASE = 'https://api.themoviedb.org/3';


 /*
 O que usar da API
 - originais
 - recomendados
 - em alta
 - ação
 - comédia
 - terror
 - romance
 - documentário
 */
const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`)
    //pega o json do req
    const json = await req.json();
    return json;

}

 export default{
     getHomeList: async ()=>{
         return[
            //  {
            //      slug: 'originals',
            //      title: 'Originais do Netflix',
            //      items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key${API_KEY}`)
                  
            //  },
            //  {
            //      slug: 'trending',
            //      title: 'Recomendados para Você',
            //      items: await basicFetch(`/trending/all/week?language=pt-BR&api_key${API_KEY}`)
            //  },
            //  {
            //      slug: 'toprated',
            //      title: 'Em alta',
            //      items: await basicFetch(`/movie/top_rate&language=pt-BR&api_key${API_KEY}`)
            //  },
             {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
            

             
         ];
     },
    getMovieInfo: async (movieId, type) =>{
        let info = {};
        if(movieId){
            switch (type) {
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    
                break;
                case 'tv':
                   info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    
                break;
                default:
                    info = null
                break
            
                }
         }

        return info;
    }

 }
import React,{ useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import './App.css'
import Header from './components/Header'; 




import './App.css';

export default () => {
  
  const [movieList, setmovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect (()=>{
    const loadAll = async () =>{
      //Lista de filmes
      let list = await Tmdb.getHomeList();
      console.log(list)
      setmovieList(list)


      //filme destaque/featured
      let action = list.filter(i=>i.slug === 'action');
      let randomChosen = Math.floor(Math.random() * (action[0].items.results.length - 1))
      let chosen = action[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'movie');
      console.log(chosenInfo);
      setfeaturedData(chosenInfo)
    }
    loadAll();

  },[]);
  useEffect(()=>{
    //monitora o rolamento da pag
    const scrollLinstener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)

      }else{
        setBlackHeader(false)
      }

    }
    window.addEventListener('scroll', scrollLinstener);

    return () =>{
      window.removeEventListener('scroll', scrollLinstener);

    }

  },[])

  return (
    <div className="page">
    <Header black={blackHeader} /> 

    {featuredData && 
      <FeaturedMovie 
      item={featuredData}
      />
    }

    <section className="lists">

      {movieList.map((item, key)=>(
        <MovieRow 
        key= {key}
        title = {item.title}
        items = {item.items}
        />
        
      ))}

    </section>



  </div>
  );
}


import React from "react";
import './FeaturedMovie.css'

export default ({item}) =>{
  //  const aceEditorRef = useRef();
    let firstDate = new Date(item.release_date); 
    let genres =[]
    for (let i in item.genres){
        genres.push (item.genres[i].name )
    }
    return(
        <section className="featured" style={
            {
            backgroundSize: 'cover',
            backgroundPosition: 'middle',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
            }
        }>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name"> {item.original_title}   </div>
                    <div className="featured--info">
                         <div className="featured--points">{item.vote_average} pontos </div>
                         <div className="featured--year"> {firstDate.getFullYear()} </div>
                         <div className="featured--description"> {item.overview} </div>
                         <div className="featured--button"> 
                         
                            <a href={`/watch/${item.id}`} className="featured--watchbutton"> ► Assistir</a>
                            <a href={`/list/add/${item.id}` }className="featured--mylistbutton"> + Minha Lista</a>
                                        
                        </div>
                        <div className="featured--genres"  > <strong>Gêneros: {genres.join(', ')}</strong></div>

                        </div>
                          

                </div>    
            </div>

        </section>
    )
}
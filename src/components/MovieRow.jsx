import React, {useState} from "react";
import './MovieRow.css';
import navigateBefore from "../img/navigate_before_black_24dp.svg";
import navigateRight from "../img/navigate_next_black_24dp.svg"
import { Hidden } from "@material-ui/core";



export default ({items, title}) =>{

    const [scrollX, setScrollX] = useState(-400);

    const handleRightArrow = () =>{
        //let x = scrollX + 150;
        let x = scrollX + Math.round(window.innerWidth / 2 );
        if (x > 0){
            x = 0;
        }
        setScrollX(x)
    }
    const handleLeftArrow = () =>{
        // x recebe a monitor do usuário /2 
        let x = scrollX - Math.round(window.innerWidth / 2 );
        //largura da lista 
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x ){
            x = (window.innerWidth - listW) - 60;
        } 
        setScrollX(x)  
    }
    
    return(
        // <div className="overflow">

        <div className="movieRow">
            <h2>{title}</h2>   
        <div 
        className="movieRow--left" 
        onClick={handleRightArrow}>
            <img  src={navigateBefore} alt=" desliza para esquerda"/>
        </div>

        <div 
        className="movieRow--right" 
        onClick={handleLeftArrow}>
            <img  src={navigateRight} alt="desliza para direita" />
        </div>
        

            <div className="movieRow--listarea"
             style={
                 {
                
                marginLeft: scrollX,
                width: items.results.length * 170,

               // Width: items.results.length * 150,
            }}>
                <div className="movieRow--list">  
                    {items.results.length > 0 && items.results.map((item, key)=>(               
                        <div key={key}  className="movieRow--item">             
                            <img  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />   
                        </div>
                    ))}    
                </div>
            </div>  
        </div>
        // </div>

    )      
        
}


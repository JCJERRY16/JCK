import { useState } from "react"
import Cart from "./Cart"
import { useEffect } from "react"
//import {Navigation} from "./Navigation"

 console.log('https://vite.dev/guide/env-and-mode');


const Home = () => {
    const [cardWidth, setCardWidth] = useState(500)
    const cardInRow = 5
    const [wrapperWidth, setWrapperWidth] = useState (cardWidth * cardInRow)
    const [movie, SetMovie] =useState ([])

    useEffect(() => {
        const getMovie = async () => {
            const url = 'https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '0155d37b4amsh744d14987fbf995p167966jsn77b5e104ae9b',
                    'x-rapidapi-host': 'tvshow.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                SetMovie(result)
                console.log(result);
            } catch (error) {
                console.error(error)
            } 
        }

        getMovie()
    },[] )

  return (
    <>
    <Navigation/>
    <div className="flex justify-center item-center" style={{ width: cardWidth}}>
        <div className="flex flex-wrap-4 gap-2 justify-center                                             ">
            {movie.map((movie, i)=>(
             <div key={i}>
             <Cart movie={movie} cardWidth ={cardWidth} />
         </div>
            ))}
       
    </div>
    </div>
    </>
  )
}

export default Home
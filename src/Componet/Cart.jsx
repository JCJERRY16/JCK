import { useState } from "react"
import {motion} from "framer"

const Cart = ({cardWidth, movie}) => {
    const {title, image, genres, originalLanguage, releaseDate, overview, i} = movie
    const {showDesc, setShowDesc, } = useState(false)
  return (
       <div style={{width: cardWidth}} className="h-[650px] relative flex justify-center item-center shrink-0 p-2 bg-gray-600 group ">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity: showDesc ? 1 : 0}}
        transition={{duration: 0.2}}
        onClick={()=>setShowDesc(showDesc)}
         className="w-[97%] h-[97%] m-auto text-white absolute rounded-ig bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer backdrop-blur-2xl">
      <h1 className="text-4xl">{title}</h1>
      <div className="flex gap-2 items-center ">
        <span className="text-lg">Genre</span>
        {genres.map(()=>(
          <span key={i} className="font-semibold text-red-600">{genres}</span>  
        ))}
        
      </div>
      <span className="flex gap-x-2">Original Language<span className="mr-2 uppercase">{originalLanguage}</span> </span>
      <span className="flex gap-x-2">Release Date <span className="mr-2 text-yellow-400">{releaseDate}</span> </span>
      <p className="flex flex-col gap-y-1"><span className="text-red-500">Summary</span></p>
      <span className="first-letter:pl-2">{overview}</span>
    </motion.div>
    <img
     src={image}  
     alt="movie image"
     className="absolute w-[97%] h-[97%] object-cover rounded-xl opacity-0 group-hover:opacity-100
      transition-opacity duration-500 z-10  "
     />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    </div>
  )
}

export default Cart

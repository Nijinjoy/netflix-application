import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {  imageUrl } from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlid,setUrld]= useState('')

  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      // alert('Network error')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie=(id)=>{
  console.log(id);
  axios.get
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movies.map((obj) => 
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )  }
      </div>
  <Youtube videoId="2g811Eo7K8U" opts={opts}/>
    </div>
  )
}

export default Rowpost
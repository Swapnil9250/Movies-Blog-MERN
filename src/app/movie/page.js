import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from "../styles/common.module.css"

const Movie =  async () => {

  await new Promise(resolve => setTimeout(resolve, 2000));
 
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '3043b091eemsh8b6dfe42b78eb7ep12e966jsnba4200ca4839',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  

const res = await fetch(url, options);
const data  = await res.json();
const main_data = data?.titles;
console.log(data, 'data')

  return (
  <>
   <section className={styles.movieSection}>
   <div className={styles.container}>
    <h1>Series & Movies</h1>
   <div className={styles.card_section}>
     {
       main_data?.map((curElm)=>{
           return <MovieCard key={curElm.id} {...curElm}/>
       })
     }
     </div>
     </div>
     </section>
  </>
  )
}
export default Movie;

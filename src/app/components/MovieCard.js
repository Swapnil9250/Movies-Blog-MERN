import Image from "next/image";
import styles from "../styles/common.module.css"
import Link from "next/link";

export default function MovieCard(curElm) {
    const {id, type, title, synopsis} = curElm.jawSummary;
  return (
    <>
      <div className={styles.card}>
       <div className={styles.card_image}>
           <Image src={curElm.jawSummary.backgroundImage.url} alt={title} height={200} width={260} />
       </div>
       <div className={styles.card_data}>
         <h2>{title.substring(0,18)}</h2>
         <p>
            {synopsis.substring(0,66)}
         </p>
         <Link href={`/movie/${id}`}>
              <button>
                Read More
              </button>
         </Link>
       </div>
      </div>
    </>
  )
}

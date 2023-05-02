/* eslint-disable react/no-unescaped-entities */
import heroStyle from "../styles/herosection.module.css";
import styles from "../styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Herosection({ title, imageUrl }) {
  return (
    <main className={heroStyle.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyle.hero_content}>
            <h1>{title}</h1>
            <p>
              {" "}
              From award-winning dramas to blockbuster action movies, we&apos;ve
              got you covered. Browse our selection of the latest and greatest
              movies, and find your new favorite today.
            </p>
            <Link href="/movie">
              <button className={mulish.className}>Explore Movies</button>
            </Link>
          </div>

          <div className={heroStyle.hero_image}>
            <Image
              src={imageUrl}
              alt="watching netflix"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
      <div className={heroStyle['custom-shape-divider-bottom-1683020071']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={heroStyle["shape-fill"]}
          ></path>
        </svg>
      </div>
      {/* <div className={heroStyle['custom-shape-divider-bottom-1683019308']}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={heroStyle["shape-fill"]}
          ></path>
        </svg>
      </div> */}
    </main>
  );
}

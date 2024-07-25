import { API_URL_LISTS } from "../constants";
import styles from "../../styles/home.module.css";
import Link from "next/link";

export interface Categories {
  status: string;
  copyright: string;
  num_results: number;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

const getLists: () => Promise<Categories> = async () => {
  const response = await fetch(API_URL_LISTS);
  return await response.json();
};

export default async function Home() {
  const result = await getLists();
  const bookCategories = result.results;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        THE NEW YORK TIMES BEST SELLER EXPLORER
      </div>
      {bookCategories === null || bookCategories === undefined ? (
        <div>No result</div>
      ) : (
        bookCategories.map((catetory, index) => (
          <Link
            href={`/list/${catetory.list_name_encoded}`}
            className={styles.catetory}
            key={index}
          >
            {catetory.list_name_encoded} &rarr;
          </Link>
        ))
      )}
    </div>
  );
}

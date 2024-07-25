import { API_URL_LIST } from "@/app/constants";
import styles from "../../../../styles/list.module.css";
import Image from "next/image";

interface IParams {
  params: {
    list_name_encoded: string;
  };
}

export interface Books {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: Results;
}
export interface Results {
  list_name: string;
  list_name_encoded: string;
  bestsellers_date: string;
  published_date: string;
  published_date_description: string;
  next_published_date: string;
  previous_published_date: string;
  display_name: string;
  normal_list_ends_at: number;
  updated: string;
  books?: BooksEntity[] | null;
  corrections?: null[] | null;
}
export interface BooksEntity {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: string;
  book_image?: string | null;
  book_image_width?: number | null;
  book_image_height?: number | null;
  amazon_product_url?: string | null;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns?: IsbnsEntity[] | null;
  buy_links?: BuyLinksEntity[] | null;
  book_uri: string;
}
export interface IsbnsEntity {
  isbn10: string;
  isbn13: string;
}
export interface BuyLinksEntity {
  name: string;
  url: string;
}

const getBookList: (list_name_encoded: string) => Promise<Books> = async (
  list_name_encoded
) => {
  const url = `${API_URL_LIST}${list_name_encoded}`;
  const response = await fetch(url);
  return await response.json();
};

export default async function Category({
  params: { list_name_encoded },
}: IParams) {
  const result = await getBookList(list_name_encoded);
  const books = result.results?.books;
  return (
    <div className={styles.container}>
      {books === null || books === undefined
        ? "Can't find books"
        : books.map((book, index) => {
            if (!book.book_image) {
              book.book_image = "";
            }
            if (!book.amazon_product_url) {
              book.amazon_product_url = "";
            }
            return (
              <div className={styles.book} key={index}>
                <Image
                  className={styles.cover}
                  src={book.book_image}
                  alt={book.title}
                  width={100}
                  height={100}
                />
                <div className={styles.title}>{book.title}</div>
                <div className={styles.author}>{book.author}</div>
                <a
                  className={styles.buy}
                  href={book.amazon_product_url}
                  target="_blank"
                >
                  Buy now &rarr;
                </a>
              </div>
            );
          })}
    </div>
  );
}

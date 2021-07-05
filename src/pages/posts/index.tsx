import { GetStaticProps } from 'next';
import Link from 'next/link';

import styles from './posts.module.scss';
import SEO from '../../components/SEO';

interface Post {
  id: string;
  title: string;
}

interface PostProps {
  posts: Post[];
}
export default function Post() {
  return (
    <>
      <SEO title="Posts" />
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="#">
            <a>
              <time>25 de dezembro de 2021</time>
              <strong>Titulo</strong>
              <p>Parágrafo</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async contex => {
  // if (!posts) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: {},
    revalidate: 60 * 60 * 12, //revalida após 12 horas
  };
};

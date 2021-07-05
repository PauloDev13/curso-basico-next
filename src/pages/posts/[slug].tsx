import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';
import SEO from '../../components/SEO';
import styles from './post.module.scss';

interface Post {
  slug: string;
  title: string;
  content: string;
  updateAt: string;
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <SEO title="Post" />
      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updateAt}</time>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async contex => {
  const { slug } = contex.params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {});

  if (!response) {
    return {
      notFound: true,
    };
  }

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updateAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };
  return {
    props: {
      post,
    },
    revalidate: 60 * 60 * 12, // revalida após 12 horas
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

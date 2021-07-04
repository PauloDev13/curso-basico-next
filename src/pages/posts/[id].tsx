import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import SEO from '../../components/SEO';

interface Comment {
  id: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

export default function Post({ comments }: CommentsProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <p>Loading....</p>;
  }
  return (
    <>
      <SEO title="Lista Posts" />
      <h1>Lista de Comentários do Post {router.query.id}</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<CommentsProps> = async contex => {
  const { id } = contex.params;
  const res = await fetch(`http://localhost:3333/comments?postId=${id}`);
  const comments: Comment[] = await res.json();

  if (!comments) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      comments,
    },
    revalidate: 10,
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetch('http://localhost:3333/posts');
  // const posts = await res.json();
  //
  // const paths = posts.map(post => {
  //   return {
  //     params: { id: String(post.id) },
  //   };
  // });

  return {
    paths: [],
    fallback: true,
  };
};

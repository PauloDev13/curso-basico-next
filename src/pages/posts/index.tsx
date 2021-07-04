import { GetStaticProps } from 'next';

interface Post {
  id: string;
  title: string;
}

interface PostProps {
  posts: Post[];
}
export default function Post({ posts }: PostProps) {
  return (
    <div>
      <h1>Listagem de Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostProps> = async contex => {
  const res = await fetch('http://localhost:3333/posts');
  const posts: Post[] = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
  };
};

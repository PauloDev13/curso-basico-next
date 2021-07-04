// import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import SEO from '../components/SEO';
import React from 'react';

interface Post {
  id: string;
  title: string;
}

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  // const [posts, setPosts] = useState<HomeProps>([]);
  //
  // const getPosts = async () => {
  //   const res = await fetch('http://localhost:3333/posts');
  //   const data = await res.json();
  //   setPosts(data);
  //   console.log(data);
  // };
  //
  // useEffect(() => {
  //   getPosts();
  // }, []);

  return (
    <div>
      <SEO title="Home" />
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> =
  async context => {
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

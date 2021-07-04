import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const dados = await fetch('http://localhost:3333/posts');
    const data = await dados.json();
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
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
}

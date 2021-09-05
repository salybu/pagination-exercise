import React from 'react';
import { Post } from 'type';

export interface PostType {
  posts: Post[];
  loading: boolean;
}

const Posts: React.FC<PostType> = ({ posts, loading }): JSX.Element => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;

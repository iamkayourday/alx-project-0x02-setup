// pages/posts.tsx
import React from 'react';
import Header from '../components/layout/Header';

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <p>Explore our latest blog posts and updates.</p>
      </main>
    </div>
  );
};

export default Posts;

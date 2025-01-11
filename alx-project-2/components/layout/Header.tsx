import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-3xl font-bold">Welcome to alx-project-2</h1>
      <nav>
        <Link href="/home" className="text-white mr-4">Home</Link>
        <Link href="/about" className="text-white">About</Link>
      </nav>
    </header>
  );
};

export default Header;

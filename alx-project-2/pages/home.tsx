import Head from 'next/head';
import Card from '../components/common/Card';


const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-4xl">Welcome to the Home Page</h1>
      <Card title="Card 1" content="This is the content of Card 1" />
      <Card title="Card 2" content="This is the content of Card 2" />
      <Card title="Card 3" content="This is the content of Card 3" />

    </div>
  );
};

export default Home;
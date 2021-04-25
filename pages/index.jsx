import Head from 'next/head';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Header />
      <Nav />
      <h1>Let's build Next</h1>
    </div>
  );
}

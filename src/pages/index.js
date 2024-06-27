import Head from "next/head";
import Header from "../components/Header";
import Card from "../components/Card";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Financial Health Check</title>
        <meta
          name="description"
          content="Check your financial health with WeathoMeter"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Card />
        <Steps />
      </main>

      <Footer />
    </div>
  );
};

export default Home;

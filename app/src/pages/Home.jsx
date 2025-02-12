import Layout from "../Layout";
import Herosection from "../components/HeroSection";
import Dishes from "../components/Dishes";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Dishes />
    </Layout>
  );
}

export default Home;

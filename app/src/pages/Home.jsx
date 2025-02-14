import Layout from "../Layout";
import Herosection from "../components/HeroSection";
import Dishes from "../components/Dishes";
import Chef from "../components/Chef";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Dishes />
      <Chef />
      <Reviews />
    </Layout>
  );
}

export default Home;

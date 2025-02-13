import Layout from "../Layout";
import Herosection from "../components/HeroSection";
import Dishes from "../components/Dishes";
import Chef from "../components/Chef";

function Home() {
  return (
    <Layout>
      <Herosection />
      <Dishes />
      <Chef />
    </Layout>
  );
}

export default Home;

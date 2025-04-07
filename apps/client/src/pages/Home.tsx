import MainLayout from '../layouts/MainLayout.tsx';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features.tsx';

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
};

export default Home;

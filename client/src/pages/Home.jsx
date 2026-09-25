import Hero from '../components/Hero';
import About from '../sections/About';
import WhyChoose from '../sections/WhyChoose';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About TECTORA Section */}
      <About />

      {/* 3. Why Choose TECTORA Section */}
      <WhyChoose />
    </main>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Unboxing from "./components/Unboxing";
import HowItWorks from "./components/HowItWorks";
import WhyAlva from "./components/WhyAlva";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Shop />
        <Unboxing />
        <HowItWorks />
        <WhyAlva />
      </main>
      <Footer />
    </>
  );
}

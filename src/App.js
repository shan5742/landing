import Experience from "./components/Experience/Experience";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Feature />
      <Experience />
      <Footer />
    </Layout>
  );
}

export default App;

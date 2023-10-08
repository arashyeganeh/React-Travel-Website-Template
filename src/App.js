import NavBar from "./components/Navbar/script";
import Hero from "./components/Hero/script";
import Destinations from "./components/Destinations/script";
import Footer from "./components/Layout/Shared/Footer/script";
import "./style/style.scss";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Destinations />
      <Footer />
    </>
  );
}

export default App;

// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Hobby from "./components/Hobby";

const App = () => {
  return (
    <div className="bg-mine bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Hobby />
    </div>
  );
};

export default App;

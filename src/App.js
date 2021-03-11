import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import './App.css';
import ReactLogo from '../src/assets/bg1.jpg';
import ReactLogo2 from '../src/assets/bg2.jpg';

const App = () => {
  return (
    <>
      <Header
        title="This is new Title"
        descr="This is perfect description"
        />
      <Layout
        title="L1"
        descr="This is perfect description"
        urlBg={ReactLogo}
        colorBg/>
      <Layout
        colorBg="red"
        title="L2"
        descr="This is perfect description2"
       />
      <Layout
        title="L3"
        descr="This is perfect description3"
        urlBg={ReactLogo2} />
      <Footer />
    </>
  );
};

export default App;

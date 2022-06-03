import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import Navbar from "./component/Navbar";
import SearchBox from "./component/SearchBox";
import Cart from "./component/cart/Cart";
import { Footer } from "./component/Footer";
import { Carousel } from "./component/carousel/Carousel";

const imagesArr = [ "/image1.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"]

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <SearchBox />
      <Carousel arrayOfImagesUrl={imagesArr}/>
      <Cards />
      <Footer/>
    </div>
  );
};

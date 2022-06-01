import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./component/Cards";
import Navbar from "./component/Navbar";
import SearchBox from "./component/SearchBox";
import Cart from "./component/Cart";

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
      <Cards />
    </div>
  );
};

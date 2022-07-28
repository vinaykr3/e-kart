import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import BottomBar from "./components/BottomBar/BottomBar";
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import Cart from "./components/Cart/Cart";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detailsPage/:id" element={<DetailsPage />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
        <BottomBar />
      </BrowserRouter>
    </>
  );
}

export default App

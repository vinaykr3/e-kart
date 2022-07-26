import { BrowserRouter, Routes, Route, } from "react-router-dom";
import DetailsPage from "./components/DetailsPage/DetailsPage";
// import BottomBar from "./components/BottomBar/BottomBar";
// import Cart from "./components/Cart/Cart";
// import DetailsPage from './components/DetailsPage/DetailsPage';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/detailsPage/:id" element={<DetailsPage />}/>
        </Routes>
        {/* <BottomBar /> */}
      </BrowserRouter>
    </>
  );
}

export default App

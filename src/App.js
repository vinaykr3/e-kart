import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import BottomBar from "./components/BottomBar/BottomBar";
// import Cart from "./components/Cart/Cart";
// import DetailsPage from './components/DetailsPage/DetailsPage';
import Header from './components/Header/Header';
// import Home from './components/HomePage/Home';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
        </Routes>
        {/* <BottomBar /> */}
      </BrowserRouter>
    </>
  );
}

export default App

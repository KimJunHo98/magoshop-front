// import 'antd/dist/antd.css';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/products/:id" element={<ProductPage />}></Route>
        <Route path="/upload" element={<UploadPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

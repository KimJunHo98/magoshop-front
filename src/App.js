import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import "./App.css";
import MainPage from "./components/MainPage";
import ProductPage from "./components/ProductPage";
import UploadPage from "./components/UploadPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ConfigProvider theme={{token: {colorPrimary: "#f1c90f"}}}>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route path="/upload" element={<UploadPage />}></Route>
        </Routes>
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default App;

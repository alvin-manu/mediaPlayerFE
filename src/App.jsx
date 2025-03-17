import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WatchHistory from "./pages/WatchHistory";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Header />
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/watch" element={<WatchHistory />} /> 
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;

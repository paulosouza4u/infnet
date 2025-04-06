import Header from "./components/Header/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Index";
import Shop from "./components/Shop/Index";
import Login from "./components/Login/Index";

const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Shop/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App

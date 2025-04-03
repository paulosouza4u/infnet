import Header from "./components/Header/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Index";
import Shop from "./components/Shop/Index";

const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Shop/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App

import Header from "./components/Header/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Index";
import Shop from "./components/Shop/Index";
import Login from "./components/Login/Index";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Welcome from "./components/Welcome/Index";
import MyCart from "./components/MyCart/Index";
import PrivateRoute from "./components/Header/PrivateRoute.jsx";

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Shop/>}></Route>
                  <Route path="/login" element={<Login/>}></Route>
                  <Route path="/welcome" element={<Welcome/>}></Route>
                  <Route path="/my-cart" element={
                      <PrivateRoute>
                          <MyCart/>
                      </PrivateRoute>
                  }></Route>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </Provider>
  );
}

export default App

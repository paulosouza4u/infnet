import React from "react";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import Shop from "./components/Shop/Index";
import Login from "./components/Login/Index";
import MyCart from "./components/MyCart/Index";
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Welcome from "./components/Welcome/Index";
import PrivateRoute from "./components/Header/PrivateRoute";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Checkout from "./components/MyCart/Checkout.jsx";

const App = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  {/* Rotas não protegidas */}
                  <Route path="/" element={<Shop/>}/>
                  <Route path="/login" element={<Login/>}/>

                  {/* Rotas protegidas */}
                  <Route path="/*" element={
                      <PrivateRoute>
                          <Routes>
                              <Route path="/welcome" element={<Welcome/>}/>
                              <Route path="/my-cart" element={<MyCart/>}/>
                              <Route path="/checkout" element={<Checkout/>}/>
                          </Routes>
                      </PrivateRoute>
                  }/>
              </Routes>
              <Footer/>
          </BrowserRouter>
      </Provider>
  );
}

export default App
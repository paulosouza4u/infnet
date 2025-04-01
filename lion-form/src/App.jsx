import {Header} from "./Components/Header";
import {Footer} from "./Components/Footer";
import {Users} from "./Components/Pages/Users";
import {About} from "./Components/Pages/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Feedback} from "./Components/Pages/Feedback.jsx";
import {Content} from "./Components/Content.jsx";

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Content/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/feedback" element={<Feedback/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App;

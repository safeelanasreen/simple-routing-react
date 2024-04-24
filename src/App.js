import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Header from "./Header";
function App() {
  return (
 
    <>
     <BrowserRouter>
     <Header />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter></>
  );
}

export default App;

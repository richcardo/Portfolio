import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import DeliverySystem from "./Pages/DeliverySystem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="delivery-system" element={<DeliverySystem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

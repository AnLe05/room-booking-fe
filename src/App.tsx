import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Invitation from "./pages/Invitation";
import Room from "./pages/Rooms";
import ErrorPage from "./pages/Error";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="invitation" element={<Invitation />} />
          <Route path="room" element={<Room />} />
          <Route path="contact" element={<Contact />} />
          {<Route path="*" element={<ErrorPage />} />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

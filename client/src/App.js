import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { Contact } from "./pages/Contact";
import { Homepage } from "./pages/Homepage";
import { PagenotFound } from "./pages/PagenotFound";
import { Policy } from "./pages/Policy";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;

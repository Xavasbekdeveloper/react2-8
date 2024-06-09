import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create-product/Create";
import Manage from "./pages/manage-product/Manage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/manage" element={<Manage />} />
      </Routes>
    </>
  );
}

export default App;

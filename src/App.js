import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultPage from "Components/DefaultPage";

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<DefaultPage/>}>
            <Route index element={<Inicio/>} />
            <Route path="sobremim" element={<SobreMim/>} />
          </Route>
          <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

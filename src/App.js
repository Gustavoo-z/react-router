import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import SobreMim from "./pages/SobreMim";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DefaultPage from "Components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<DefaultPage/>}>
            <Route index element={<Inicio/>} />
            <Route path="sobremim" element={<SobreMim/>} />
            <Route path="posts/:id" element={<Post/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

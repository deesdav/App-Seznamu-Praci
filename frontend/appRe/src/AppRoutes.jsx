import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CreateDocument from "./pages/CreateDocument/CreateDocument";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createdocument" element={<CreateDocument />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

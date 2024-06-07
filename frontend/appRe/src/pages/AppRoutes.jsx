import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import WorkView from "./WorkView/WorkView";
import WorkList from "./WorkList/WorktList";
import WorkCreateForm from "./WorkCreateForm/WorkCreateForm";
import WorkUpdateForm from "./WorkUpdateForm/WorkUpdateForm";
import CreatedWork from "./WorkCreateForm/CreatedWork";
import WorkDeleted from "./WorkView/WorkDeleted";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/work/:id" element={<WorkView />} />
        <Route path="/works" element={<WorkList />} />
        <Route path="/creatework" element={<WorkCreateForm />} />
        <Route path="/updatework/:id" element={<WorkUpdateForm />} />
        <Route path="/createdwork/:id" element={<CreatedWork />} />
        <Route path="/deletedwork/:id" element={<WorkDeleted />} />
      </Routes>
    </BrowserRouter>
  );
}

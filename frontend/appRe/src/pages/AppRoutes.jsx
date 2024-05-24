import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import StudentView from "./StudentView/StudentView";
import StudentList from "./StudentList/StudentList";
import StudentCreateForm from "./StudentCreateForm/StudentCreateForm";
import StudentUpdateForm from "./StudentUpdateForm/StudentUpdateForm";
import CreatedStudent from "./StudentCreateForm/CreatedStudent";
import StudentDeleted from "./StudentView/StudentDeleted";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/student/:id" element={<StudentView />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/createstudent" element={<StudentCreateForm />} />
        <Route path="/updatestudent/:id" element={<StudentUpdateForm />} />
        <Route path="/createdstudent/:id" element={<CreatedStudent />} />
        <Route path="/deletedstudent/:id" element={<StudentDeleted />} />
      </Routes>
    </BrowserRouter>
  );
}

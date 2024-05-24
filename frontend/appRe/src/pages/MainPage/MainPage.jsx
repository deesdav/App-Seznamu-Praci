import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <Link to={"/createstudent"}>
        <p>Student create form</p>
      </Link>
      <Link to={"/updatestudent/df46g65df4g6df"}>
        <p>Student update form</p>
      </Link>
      <Link to={"/students"}>
        <p>Student list</p>
      </Link>
    </>
  );
}

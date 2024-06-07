import { Link } from "react-router-dom";
import "./MainPage.css";
export default function MainPage() {
  return (
    <>
      <div className="box">
        <Link to={"/creatework"}>
          <p>Go to Work create form</p>
        </Link>
        <Link to={"/works"}>
          <p>Go to Work list</p>
        </Link>
      </div>
    </>
  );
}

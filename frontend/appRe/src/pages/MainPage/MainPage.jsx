import { Link } from "react-router-dom";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";
export default function MainPage() {
  return (
    <>
    <h1>The List Of Works Application</h1>
    <br />
      <div className="box">
        <Link to={"/creatework"}>
          <p>Go to Work create form</p>
        </Link>
        <Link to={"/works"}>
          <p>Go to Work list</p>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
}

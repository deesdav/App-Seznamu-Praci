import { Link } from "react-router-dom";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
export default function MainPage() {
  return (
    <>
      <Header></Header>
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

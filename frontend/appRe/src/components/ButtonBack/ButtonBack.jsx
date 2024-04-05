import "./ButtonBack.css"
import { Link } from "react-router-dom"

export default function ButtonBack(){
    return(
        <>
        <Link to={"/"}>
            <button className="btn-back">Go Back</button>
        </Link>
        </>
    )
}
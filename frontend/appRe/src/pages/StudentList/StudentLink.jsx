import { Link } from "react-router-dom"

export default function StudentLink(props) {

    return (
        <>
            <p>Name: {props.name}</p>
            <Link to={`/student/${props.id}`}>
                <p>View student</p>
            </Link>
        </>
    )
}
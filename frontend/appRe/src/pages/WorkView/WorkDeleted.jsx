import { Link, useParams } from "react-router-dom";

export default function WorkDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your work {id} was deleted</p>
      <Link to={"/"}>
        <p className="goBackBtn">Go back</p>
      </Link>
    </>
  );
}

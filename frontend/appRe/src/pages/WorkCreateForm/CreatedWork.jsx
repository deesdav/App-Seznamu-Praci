import { useParams, Link } from "react-router-dom";

export default function CreatedWork() {
  const { id } = useParams();

  return (
    <>
      <p>Work was created: {id}</p>
      <Link to={`/work/${id}`}>
        <p>View work</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}

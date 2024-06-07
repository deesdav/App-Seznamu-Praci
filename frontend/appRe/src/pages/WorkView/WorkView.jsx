import { Link, useParams, useNavigate } from "react-router-dom";
import { getWorkById, deleteWork } from "../../models/Work";
import { useEffect, useState } from "react";

export default function WorkView() {
  const { id } = useParams();
  const [work, setWork] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getWorkById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setWork(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === work.workname) {
      const result = await deleteWork(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong work username");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedwork/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Work not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading work...</p>
      </>
    )
  }

  return (
    <>
      <h1>Work view</h1>
      <p className="workP">Work id: {id}</p>
      <p>Work workname: {work.workname}</p>
      <p>Work date: {work.date}</p>
      <p>Work worktypes: {work.worktypes}</p>
      <p>Work subject: {work.subject}</p>
      <p>Work abstract: {work.abstract}</p>
      <form>
        <p>Type work name for delete work.</p>
        <input type="text" placeholder={work.workname} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete work</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatework/${id}`}>
        <p>Update work</p>
      </Link>
      <Link to={"/"}>
        <p className="goBackBtn">Go back</p>
      </Link>
    </>
  );
}

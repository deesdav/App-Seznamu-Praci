import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateWork, getWorkById } from "../../models/Work";

export default function WorkUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [work, setWork] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getWorkById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setWork(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const work = await updateWork(id, formData);
    if (work.status === 200) {
      redirectToSuccessPage(work.payload._id);
    } else {
      setInfo(work.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/work/${id}`);
  };

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
      <h1>Work update form</h1>

      <form>
        <input
          type="text"
          required
          name="workname"
          placeholder="Enter workname"
          defaultValue={work.workname}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="date"
          placeholder="Enter date"
          defaultValue={work.date}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="worktypes"
          placeholder="Enter worktypes"
          defaultValue={work.worktypes}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="subject"
          placeholder="Enter subject"
          defaultValue={work.subject}
          onChange={(e) => handleChange(e)}
        />
        <textarea
          type="text"
          required
          name="abstract"
          placeholder="Enter abstract"
          defaultValue={work.abstract}
          onChange={(e) => handleChange(e)}
        />
        
        <button onClick={handlePost}>Update work</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p className="goBackBtn">Go back</p>
      </Link>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createWork } from "../../models/Work";

export default function WorkCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const work = await createWork(formData);
    if (work.status === 201) {
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
    return navigate(`/createdwork/${id}`);
  };

  return (
    <>
      <h1>Work create form</h1>

      <form>
        <input
          type="text"
          required
          name="workname"
          placeholder="Enter workname"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="date"
          placeholder="Enter date"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="worktypes"
          placeholder="Enter worktypes"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="subject"
          placeholder="Enter subject"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          required
          name="abstract"
          placeholder="Enter abstract"
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handlePost}>Create work</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}

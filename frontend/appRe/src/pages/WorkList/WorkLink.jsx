import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function WorkLink(props) {
  const [isBlocked, setIsBlocked] = useState(props.status);

  const [work, setWork] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const handleClick = (id) => {
    setIsBlocked(true);
    refreshWorks();


    fetch("http://localhost:5000/api/block/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };


  const prepareButton = () => {
    if (!isBlocked) {
      return (
        <button
          onClick={() => {
            handleClick(props.id);

          }}
        >
          Klikněte
        </button>
      );
    } else {
      return <button>Zabráno</button>;
    }
  };

  const button = prepareButton();

  function refreshWorks() {
    return navigate(`/`);
  }

  const handleDelete = async (id) => {
    //e.preventDefault();
    refreshWorks();

    fetch("http://localhost:5000/api/block/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="boxLists">

      <div className="list">
        <div className="deleteBtn" onClick={() => {
          handleDelete(props.id);
        }}>X</div>
        <ul>

          <li>
            <span>Id: </span> {props.id}
          </li>
          <li>
            <span>Name: </span> {props.name}
          </li>
          <li>
            <span>Date:</span> {props.date}
          </li>
          <li>
            <span>Work types:</span> {props.worktypes}
          </li>
          <li>
            <span>Subject:</span> {props.subject}
          </li>
          <li>
            <span>Abstract:</span> {props.abstract}
          </li>
          <li>
            <span>Solver mail:</span> {props.solver_mail}
          </li>
          <li>
            Status:
            <div>
              {button}
              {props.status && <div>Zabrané! </div>}
            </div>
          </li>
          <li>

            <Link to={"/updatework/" + props.id}>
              <div className="updateBtn">Update</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

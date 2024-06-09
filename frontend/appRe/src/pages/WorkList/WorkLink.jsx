import { useState } from "react";
import { Link } from "react-router-dom";

export default function WorkLink(props) {
  const [isBlocked, setIsBlocked] = useState(props.status);

  const handleClick = (id) => {
    setIsBlocked(true);

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

  return (
    <div className="boxLists">
      <div className="list">
        <ul>
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
            Status:
            <div>
              {button}
              {props.status && <div>Zabrané!</div>}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

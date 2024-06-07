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
      return <button>Zabrano</button>;
    }
  };

  const button = prepareButton();

  return (
    <>
    <div className="boxTables"></div>
      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Date</th>

            <th>Work types</th>

            <th>Subject</th>

            <th>Abstract</th>

            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{props.name}</td>

            <td>{props.date}</td>

            <td>{props.worktypes}</td>

            <td>{props.subject}</td>

            <td>{props.abstract}</td>

            <div>
              {button}

              {props.status && <p>Zabrané!</p>}
            </div>
          </tr>
        </tbody>
      </table>
    </>
  );
}

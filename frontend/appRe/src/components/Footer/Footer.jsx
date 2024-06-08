import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="createdByLine">
          <p>Created by:</p>
        </div>
        <div className="creators">
          <ul>
            <li>
              <p>
                <a href="https://github.com/deesdav">David Švancar</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/PhilipBuresh">Filip Bureš</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/Ejdmmm">Adam Bartoš</a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/martinhorak123">Martin Horák</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

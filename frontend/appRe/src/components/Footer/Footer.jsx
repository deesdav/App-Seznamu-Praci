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
                <a href="https://github.com/deesdav" target="_blank">
                  David Švancar
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/PhilipBuresh" target="_blank">
                  Filip Bureš
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/Ejdmmm" target="_blank">
                  Adam Bartoš
                </a>
              </p>
            </li>
            <li>
              <p>
                <a href="https://github.com/martinhorak123" target="_blank">
                  Martin Horák
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

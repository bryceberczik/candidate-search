import "./candidateBtns.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function CandidateBtns() {
  return (
    <div className="btn-container">
      <button className="decline">
        <FontAwesomeIcon className="icon" icon={faMinus} />
      </button>
      <button className="accept">
        <FontAwesomeIcon className="icon" icon={faPlus} />
      </button>
    </div>
  );
}

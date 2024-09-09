import "./candidateBtns.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const onDecline = () => {

  window.location.reload();
}

const onAccept = () => {

  window.location.reload();
}

export default function CandidateBtns() {
  return (
    <div className="btn-container">
      <button className="decline" onClick={onDecline}>
        <FontAwesomeIcon className="icon" icon={faMinus} />
      </button>
      <button className="accept" onClick={onAccept}>
        <FontAwesomeIcon className="icon" icon={faPlus} />
      </button>
    </div>
  );
}

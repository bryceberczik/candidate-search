import { useEffect, useState } from "react";
import Candidate from "../interfaces/Candidate.interface";
import "../styles/savedCandidates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = JSON.parse(
      localStorage.getItem("savedCandidates") || "[]"
    );
    setCandidates(savedCandidates);
  }, []);

  const removeCandidate = (index: number) => {
    const updatedCandidates = [...candidates];
    updatedCandidates.splice(index, 1);
    setCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div>
      <div>
        <h1 className="cell">Potential Candidates</h1>
      </div>
      <div>
        {candidates.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th className="cell">Avatar</th>
                <th className="cell">Name</th>
                <th className="cell">Location</th>
                <th className="cell">Email</th>
                <th className="cell">Company</th>
                <th className="cell">Bio</th>
                <th className="cell">Reject</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate, index) => (
                <tr key={index}>
                  <td className="cell">
                    <img
                      src={candidate.avatar_url}
                      alt={candidate.login}
                      className="avatar-img"
                    />
                  </td>
                  <td className="cell">
                    {candidate.name} ({candidate.login})
                  </td>
                  <td>{candidate.location}</td>
                  <td>{candidate.email}</td>
                  <td>{candidate.company}</td>
                  <td>{candidate.bio}</td>
                  <td className="cell">
                    <button
                      className="removeBtn"
                      onClick={() => removeCandidate(index)}
                    >
                      <FontAwesomeIcon className="icon" icon={faMinus} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p id="noUsers">No candidates saved.</p>
        )}
      </div>
    </div>
  );
};

export default SavedCandidates;

import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import CandidateCard from "../components/candidateCard/candidateCard";
import Candidate from "../interfaces/Candidate.interface";
import CandidateBtns from "../components/candidateBtns/candidateBtns";

const CandidateSearch = () => {
  const [candidateData, setCandidateData] = useState<Candidate | null>(null);

  useEffect(() => {
    const fetchCandidateData = async () => {
      try {
        console.log("Fetching list of users...");
        const users = await searchGithub();
        console.log("Users fetched:", users);

        if (users.length > 0) {
          const selectedUser = users[0].login;
          console.log("Selected user:", selectedUser);

          const data = await searchGithubUser(selectedUser);
          console.log("User data fetched:", data);

          setCandidateData(data);
        } else {
          console.log("No users found.");
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      }
    };

    fetchCandidateData();
  }, []);

  return (
    <div>
      <div>
        <h1>Candidate Search</h1>
      </div>

      <div>
        {candidateData ? (
          <div>
            <CandidateCard {...candidateData} />
            <CandidateBtns />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CandidateSearch;

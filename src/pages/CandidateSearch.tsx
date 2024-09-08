// import { useState, useEffect } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from "../components/candidateCard/candidateCard";
const CandidateSearch = () => {
  return (
    <div>
      <div>
        <h1>Candidate Search</h1>
      </div>

      <div>
        <CandidateCard />
      </div>
    </div>
  );
};

export default CandidateSearch;

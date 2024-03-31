import React from "react";

const Onscreen = (props) => {
  const { voters } = props;


  const votesByCandidate = {
    Bahubali: [],
    Katappaa: [],
    BhallalDev: [],
  };


  voters.forEach((voter) => {
    votesByCandidate[voter.candidate].push(voter.name);
  });

  return (
    <div>
      <h2>Votes to Candidates:</h2>
      <ul>
        {Object.keys(votesByCandidate).map((candidate) => (
          <li key={candidate}>
            <strong>{candidate}:</strong>
            <ul>
              {votesByCandidate[candidate].map((voterName) => (
                <li key={voterName}>{voterName}</li>
              ))}
            </ul>
            Total votes:{votesByCandidate[candidate].length}
          </li>

        ))}
      </ul>
    </div>
  );
};

export default Onscreen;

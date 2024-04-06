import React from "react";

const UI = (props) => {
  const { voters } = props;
  const votesByCandidate = {
    Bahubali: [],
    Kattappa: [],
    BhallalDev: [],
  };

  voters.forEach((voter) => {
    votesByCandidate[voter.candidate].push(voter.name);
  });

  return (
    <>
      <h2>Votes to Candidates --</h2>
      <ul>
        {Object.keys(votesByCandidate).map((candidate) => (
          <li key={candidate}>
            <h3>{candidate}</h3>
            <ul>
              {votesByCandidate[candidate].map((voterName) => (
                <li key={voterName}>
                  {voterName}

                  <button
                    type="delete"
                    onClick={() => props.onRemove(voterName)}
                  >
                    Cancel Vote
                  </button>
                </li>
              ))}
              Vote:-{votesByCandidate[candidate].length}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};
export default UI;

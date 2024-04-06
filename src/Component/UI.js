import React,{useContext} from "react";
import { VoteContext } from "../store/vote-context";
const UI = () => {

const voteCtx = useContext(VoteContext)
  const votesByCandidate = {
    Bahubali: [],
    Kattappa: [],
    BhallalDev: [],
  };
  voteCtx.voters.forEach((voter) => {
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
                    onClick={() => voteCtx.removeHandler(voterName)}
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

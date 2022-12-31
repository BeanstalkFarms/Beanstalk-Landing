import snapshot from '@snapshot-labs/snapshot.js';
import axios from 'axios';

export type Snapshot = {
  proposal: {
    id: string;
    space: { id: string; };
    title: string;
    state: string;
    start: number;
    end: number;
    quorum: number;
    snapshot: number;
    strategies: any;
  };
  votes: string[];
  scores: { [voter: string] : number };
  sum: number;
}

export const loadSnapshot = async (spaceId: string, proposalId: string) => {
  const result = await axios.get(`https://hub.snapshot.org/graphql`, {
    data: {
      query: `
        query {
          proposal(id: "${proposalId}") {
            id
            space {
              id
            }
            title
            state
            start
            end
            quorum
            snapshot
            strategies {
              name
              network
              params
            }
          }
        }
      `
    }
  });
  const { proposal } = result.data.data;
  // const [scores] = await snapshot.utils.getScores(
  //   spaceId,
  //   proposal.strategies,
  //   '1',
  //   // votes.map((vote: any) => vote.voter),
  //   proposal.snapshot,
  // );
  return {
    proposal,
    // votes,
    // scores,
    // sum: (Object.values(scores) as number[]).reduce((agg: number, curr: number) => agg + curr, 0),
  };
}
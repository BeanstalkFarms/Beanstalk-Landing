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
  scores: { [voter: string]: number };
  sum: number;
}

export type Proposal = {
  id: string;
  space: { id: string; };
  title: string;
  state: string;
  start: number;
  end: number;
  quorum: number;
  snapshot: number;
  strategies: any;
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
  const {proposal} = result.data.data;
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

export const loadActiveProposals = async () => {
  const addresses = `["beanstalkdao.eth", "beanstalkfarms.eth", "wearebeansprout.eth"]`;

  try {
    const result = await axios.get(`https://hub.snapshot.org/graphql`, {
      data: {
        query: `
        query {
          proposals(
            where: {space_in: ${addresses}, state: "active"}
            orderBy: "created"
            orderDirection: desc
          ) {
            id
            title
            type
            start
            end
            link
            scores
            scores_total
            scores_updated
            state
            snapshot
            space {
              id
              name
            }
          }
        }
      `
      }
    });

    let {proposals} = result.data.data;
    console.log('HERE: ', proposals);
    const filteredProposals: Proposal[] = [];
    
    if (proposals && proposals.length > 0) {
      proposals.forEach((p: Proposal) => {
        ((p.title.startsWith("BIP") || p.title.startsWith("BOP")) && p.space.id === "beanstalkdao.eth" || 
        (p.title.startsWith("Temp-Check") || p.title.startsWith("BFCP")) && p.space.id === "beanstalkfarms.eth" || 
        p.title.startsWith("BSP") && p.space.id === "wearebeansprout.eth")
        && filteredProposals.push(p)
      })
    };

    proposals = filteredProposals;

    return {proposals};

  } catch (e) {
    console.error('Error loading active proposals.')
    console.error(e);
  }
}

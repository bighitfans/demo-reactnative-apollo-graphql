
import {gql} from '@apollo/client';

export const VoteUser = gql`
  fragment voteUser on User {
    id
    rank
    votes
    followersCount
    canAskVote
    selfHasVoted
    selfHasFollowed {
      id
    }
  }
`;

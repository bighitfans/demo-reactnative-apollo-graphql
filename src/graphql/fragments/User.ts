import {gql} from '@apollo/client';

import {MediaFormat} from './Media';
import {VoteUser} from './VoteUser';

export const UserCore = gql`
  ${MediaFormat}
  fragment userCore on User {
    id
    fullname
    username
    rank
    sports {
      city {
        displayname
        key
      }
      levelofplay {
        displayname
        key
      }
      sportstyle {
        key
        displayname
      }
      sporttype {
        displayname
        key
      }
    }
    identity {
        id
        fullname
        age
    }
    type
    avatar {
      id
      url
      formats {
        thumbnail {
          ...mediaFormat
        }
      }
    }
  }
`;

export const UserSummary = gql`
  ${UserCore}
  ${VoteUser}
  fragment userSummary on User {
    ...userCore
    ...voteUser
  }
`;

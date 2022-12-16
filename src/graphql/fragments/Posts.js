import {gql} from '@apollo/client';

import {UserSummary} from './User';
import {MediaFormat} from './Media';
import {PostReaction} from './PostReaction';

export const PostSummary = gql`
  ${MediaFormat}
  fragment postSummary on Post {
    id
    caption
    age
    reactions {
      selfHasReacted {
        reaction
        unreactPostParams {
          id
          postId
        }
      }
    }
    album {
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

export const Post = gql`
  ${PostSummary}
  ${PostReaction}
  ${UserSummary}
  ${MediaFormat}
  fragment post on Post {
    ...postSummary

    commentsCount

    reactions {
      ...postReaction
    }
    album {
      id
      url
      waterMarkUrl
      formats {
        thumbnail {
          ...mediaFormat
        }
        small {
          ...mediaFormat
        }
        medium {
          ...mediaFormat
        }
        large {
          ...mediaFormat
        }
      }
    }
    owner {
      ...userSummary
    }
    selfHasBookmarked
    unbookmarkParams {
      id
    }
  }
`;

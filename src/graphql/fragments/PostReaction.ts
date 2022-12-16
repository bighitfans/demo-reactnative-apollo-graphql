
import {gql} from '@apollo/client';

export const PostReaction = gql`
  fragment postReaction on PostReaction {
    reactionsCount
    likesCount
    cheersCount
    lovesCount
    selfHasReacted {
      reaction
      unreactPostParams {
        id
        postId
      }
    }
  }
`;

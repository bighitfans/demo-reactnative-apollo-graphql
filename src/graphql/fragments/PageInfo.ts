import {gql} from '@apollo/client';

export const PageInfo = gql`
  fragment pageInfo on PageInfo2 {
    cursorNext
    cursorPrevious
    threshold
    hasNext
    hasPrevious
  }
`;

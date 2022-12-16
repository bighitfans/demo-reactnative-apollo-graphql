import {gql, useQuery} from '@apollo/client';
import {Post, PageInfo} from './fragments';

console.log(Post);
console.log('PageInfo',PageInfo);

const VIEW_POST_PAGINATION = gql`
  ${Post}
  ${PageInfo}
  query PostQuery(
    $before: String
    $after: String
    $params: String
    $p: Int
    $self: String
  ) {
    posts(before: $before, after: $after, params: $params, p: $p, self: $self) {
      edges {
        node {
          ...post
        }
      }
      pageInfo {
        ...pageInfo
      }
    }
  }
`;

//  pagination check.
export const usePostQuery = (post_id=null,params={}) => {
  // return useQuery(VIEW_POST_PAGINATION);
  const getPaginatedPost = useQuery(VIEW_POST_PAGINATION, {
    variables: {
      p: post_id,
      params: JSON.stringify(params),
    },
  });
  //postObj.loading = getPaginatedPost.loading;
  //postObj.refetch = getPaginatedPost.refetch;
  //postObj.fetchMore = getPaginatedPost.fetchMore;
  //postObj.get = () => getPaginatedPost.data?.post;
  return getPaginatedPost;
};

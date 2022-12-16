
import {gql} from '@apollo/client';

export const MediaFormat = gql`
  fragment mediaFormat on MediaFormat {
    mime
    ext
    name
    width
    height
    url
    size
  }
`;

export const Media = gql`
  ${MediaFormat}
  fragment media on Media {
    url
    formats {
      thumbnail {
        ...mediaFormat
      }
      medium {
        ...mediaFormat
      }
      small {
        ...mediaFormat
      }
      large {
        ...mediaFormat
      }
    }
  }
`;

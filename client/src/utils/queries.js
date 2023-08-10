import { gql } from '@apollo/client';
import graphqlRequest from './graphqlAPI';

export const getMe = async token => {
  const query = gql`
    {
      me {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  `;

  return graphqlRequest(query, {});
};
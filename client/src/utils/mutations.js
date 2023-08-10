import { gql } from '@apollo/client';
import graphqlRequest from './graphqlAPI';

export const createUser = async userData => {
  const mutation = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
      addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
        }
      }
    }
  `;

  return graphqlRequest(mutation, userData);
};

export const loginUser = async userData => {
  const mutation = gql`
    mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
          username
        }
      }
    }
  `;

  return graphqlRequest(mutation, userData);
};

export const saveBook = async (bookData, token) => {
  const mutation = gql`
    mutation saveBook($input: BookInput!) {
      saveBook(input: $input) {
        _id
        username
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

  return graphqlRequest(mutation, { input: bookData });
};

export const deleteBook = async (bookId, token) => {
  const mutation = gql`
    mutation removeBook($bookId: String!) {
      removeBook(bookId: $bookId) {
        _id
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

  return graphqlRequest(mutation, { bookId });
};

export const searchGoogleBooks = (query) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

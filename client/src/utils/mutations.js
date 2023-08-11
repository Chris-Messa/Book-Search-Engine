import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        username
        email
      }
    }
  }
`
;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
      token
    }
  }`

;

export const DELETE_BOOK = gql`
mutation deletebook($bookID: String!){
    deleteBook(bookID: $bookID)
}`
;
export const SAVE_BOOK = gql`
mutation saveBook($book: Book){
  saveBook(book: $book) {
      username
      email
      savedBooks {
        bookId
    }
  }
}`

export const GET_ME = gql`
query Me {
  me {
    username
    email
    password
    savedBooks {
      authors
      bookId
      image
      link
      title
      description
    }
  }
}`
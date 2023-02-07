import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`

export const NEW_USER = gql`
    mutation newUser($username: String!, $email: String!, $password: String!) {
        newUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`
export const NEW_MUSEUM = gql`
    mutation newMuseum($museumName: String!, $userid: String!) {
            newMuseum(museumName: $museumName, userid: $userid) {
            _id
            museumName
            userid
        }
    }
  
`

export const NEW_EXHIBIT = gql`
    mutation newExhibit($museumId: String!, $exhibitName: String!, $photo: String, $body: String) {
        newExhibit(museumId: $museumId, exhibitName: $exhibitName, photo: $photo, body: $body) {
            _id
            museumId
            exhibitName
            photo
            body
            comments
        }
    }
  
`

export const ADD_COMMENT = gql`
mutation addComment($commentbody: String!, $exhibitid: String!) {
    addComment(commentbody: $commentbody, exhibitid: $exhibitid) {
      _id
      commentbody
      exhibitid
      userid
    }
  }
  
`
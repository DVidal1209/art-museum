import { gql } from '@apollo/client';

export const GET_ME = gql`
    query Query {
        me {
            _id
            username
            email
            museum {
                _id
                museumName
            }
        }
    }
`

export const GET_USERS = gql`
    query Query {
        getUsers {
            _id
            username
            email
            museum {
                _id
                museumName
            }
        }
    }
`
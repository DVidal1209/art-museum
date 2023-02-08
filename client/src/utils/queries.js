import { gql } from '@apollo/client';

export const GET_ME = gql`
query Me {
    me {
      _id
      username
      photo
      description
      title
      email
      museum {
        _id
        museumName
        photo
        description
      }
    }
  }
  
`

export const GET_USERS = gql`
    query getUsers {
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

export const GET_MUSEUMS = gql`
    query getMuseums {
        getMuseums {
            _id
            museumName
            userid
            exhibits {
                _id
                museumId
                exhibitName
                photo
                body
            }
        }
    }
`

export const MY_MUSEUM = gql`
query myMuseum {
    myMuseum {
      _id
      museumName
      description
      userid
      exhibits {
        _id
        exhibitName
        photo
        body
      }
    }
  }
  
`

export const SINGLE_MUSEUM = gql`
    query singleMuseum {
        singleMuseum {
            _id
            museumName
            userid
            exhibits {
            _id
            museumId
            exhibitName
            photo
            body
            }
        }
    }
`

export const SINGLE_EXHIBIT = gql`
    query singleExhibit {
        singleExhibit {
            _id
            museumId
            exhibitName
            photo
            body
            comments {
                _id
                commentbody
                userid {
                    _id
                }
            }
        }
    }  
`

export const MY_COMMENTS = gql`
    query myComments {
        myComments {
            _id
            commentbody
            exhibitid {
            _id
            }
        }
    }  
`

export const GET_COMMENTS = gql`
    query myComments {
        getComments {
            _id
            commentbody
            userid {
                _id
            }
        }
    }  
`
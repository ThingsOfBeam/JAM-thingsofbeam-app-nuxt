import gql from 'graphql-tag'

const queryArticles = gql`
  {
    articles {
      id
      title
      body
      createdAt
      updatedAt
      image {
        url
      }
    }
  }
`

export { queryArticles }

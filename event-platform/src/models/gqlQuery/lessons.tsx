import { gql } from "@apollo/client"

const lessons_qgl = gql`
  query{ 
    lessons{ 
        id
        title
    }
  }
`
export default lessons_qgl
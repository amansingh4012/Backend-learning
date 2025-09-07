// this file will tell that what will be the structure of your data 

const {gql} = require('graphql-tag');

//string
//Int
//Float
//Boolean
//ID-. an Unique identifier

const typeDef = gql`
    type Product {
        id : ID!
        title : String!
        category: String!
        price : Float!
        inStock : Boolean!
    }
    type Query {
        products : [Product!]!
        product(id : ID!) : Product
    }
` 

module.exports = typeDef;
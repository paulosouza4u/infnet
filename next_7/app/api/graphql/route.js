import { createYoga, createSchema } from "graphql-yoga";

let posts = [
  { id: 1, title: "Primeiro Post", body: "Olá GraphQL" },
  { id: 2, title: "Segundo Post", body: "Bem-vindo!" }
];

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Post {
        id: ID!
        title: String!
        body: String!
      }

      type Query {
        posts: [Post!]!
        post(id: ID!): Post
      }

      input CreatePostInput {
        title: String!
        body: String!
      }

      type Mutation {
        createPost(input: CreatePostInput!): Post!
      }
    `,

    resolvers: {
      Query: {
        posts: () => posts,
        post: (_, { id }) => posts.find(p => p.id == id),
      },
      Mutation: {
        createPost: (_, { input }) => {
          const newPost = {
            id: Date.now().toString(),
            ...input
          };
          posts.push(newPost);
          return newPost;
        },
      },
    },
  }),

  graphqlEndpoint: "/api/graphql",
});

export { yoga as GET, yoga as POST };

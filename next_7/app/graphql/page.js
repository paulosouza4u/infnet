import { GraphQLClient } from "graphql-request";

export const client = new GraphQLClient("http://localhost:3000/api/graphql");

export default async function GraphQLPage() {
const query = `
    query {
        posts {
          id
          title
        }
      }
  `;
  const data = await client.request(query);

  return (
    <main>
      <h1>Posts (GraphQL - Server Component)</h1>
      {data.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </main>
  );
}

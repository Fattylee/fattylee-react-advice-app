import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  gql,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5200/graphql",
  cache: new InMemoryCache(),
});
const FETCH_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;
function FetchUsers() {
  const { error, loading, data } = useQuery(FETCH_USERS);
  if (error) return <p>Error</p>;
  if (loading) return <p>Loadinging...</p>;
  console.log(data);
  return (
    <>
      <h1>Hello, Apollo!</h1>
      <p>This is fun to have.</p>
    </>
  );
}

export default FetchUsers;

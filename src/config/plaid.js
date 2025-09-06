import { Client, environments } from "plaid";

const client = new Client({
  clientId: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: environments.sandbox, // Use sandbox for testing
  options: {
    version: "2020-09-14"
  }
});

export default client;

import { createClient, OAuthStrategy } from "@wix/sdk";
import { items } from "@wix/data";
import { CLIENT_ID } from "../constants/constants";

const client = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: CLIENT_ID,
  }),
});

export default client;

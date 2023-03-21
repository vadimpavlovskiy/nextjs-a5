// client.ts
import { type ClientConfig, createClient } from "@sanity/client";

const config: ClientConfig = {
  projectId: "447te9bj",
  dataset: "production",
  apiVersion: "2023-03-12",
  useCdn: true,
};
const client = createClient(config);

export default client;

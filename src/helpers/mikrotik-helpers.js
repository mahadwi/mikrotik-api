import { getMikrotikConnection } from '../config/mikrotik-connection.js';

export const connectToApi = async () => {
  const client = getMikrotikConnection();
  await client.connect();
  return client;
};
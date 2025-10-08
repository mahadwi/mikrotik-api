import { getMikrotikConnection } from '../config/mikrotik-connection.js';

export const connectToApi = async ({ host, user, password, port }) => {
  const client = getMikrotikConnection({ host, user, password, port });
  await client.connect();
  return client;
};
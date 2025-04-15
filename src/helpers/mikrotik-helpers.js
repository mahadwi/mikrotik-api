import { RouterOSClient } from 'routeros-client';
import { mikrotikConfig } from '../config/mikrotik-connection.js';

export const connectToApi = async () => {
  const client = new RouterOSClient(mikrotikConfig);
  await client.connect();
  const api = await client.getApi();
  return { client, api };
};

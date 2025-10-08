import { RouterOSAPI } from 'node-routeros';

export const getMikrotikConnection = ({ host, user, password, port }) => {
  return new RouterOSAPI({ host, user, password, port });
};
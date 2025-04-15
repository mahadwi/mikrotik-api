import { RouterOSAPI } from 'node-routeros';

export const getMikrotikConnection = () => new RouterOSAPI({
  host: '10.110.16.1', // Ganti dengan IP MikroTik kamu
  user: 'doni',
  password: '@ndur$%1989',
  port: 8728,
});
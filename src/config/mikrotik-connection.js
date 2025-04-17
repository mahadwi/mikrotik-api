import { RouterOSAPI } from 'node-routeros';
import key from './env.js';

const { mikrotik } = key;

export const getMikrotikConnection = () => new RouterOSAPI({
  host: mikrotik.host, // Ganti dengan IP MikroTik kamu
  user: mikrotik.user,
  password: mikrotik.password,
  port: mikrotik.port,
});